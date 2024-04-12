import { useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Plus from "@/assets/icons/plus.svg";
import X from "@/assets/icons/x.svg";
import WhiteCheck from "@/assets/icons/white-check.svg";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { postStorage } from "../../api/storage";
import { useDispatch, useSelector } from "react-redux";
import { checkObject, modules, types } from "./constants";
import { toast } from "sonner"
import { setToaster } from "../../redux/features/toaster/toaster";
import { postHint, postTask } from "../../api/task-api";

const SelectBlock = ({ handleSelectValue, elems = [], title = "", placeholder = "", field = "", required = false, value = "" }) => {
    return <div>
        <div className=" text-white text-sm font-semibold font-['Raleway'] mb-2 leading-tight">{title}</div>
        <Select onValueChange={(e) => handleSelectValue(e, field)} className={`w-[432px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight`}>
            <SelectTrigger className={`w-[180px]  ${required && value?.length == 0 ? "border border-red-500" : ""}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {elems.map((i, key) => (
                        <SelectItem key={key} value={i.key}>{i.value}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
}

const InputBlock = ({ handleChange, name, label, type = "text", value = "", required = false }) => {
    return <div>
        <div className=" text-white text-sm font-semibold font-['Raleway'] mb-2 leading-tight">{label}</div>
        <Input type={type} onChange={handleChange} name={name} className={`w-[432px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight ${required && value?.length == 0 ? "border border-red-500" : ""}`} />
    </div>
}

export const AddChallenge = () => {
    const { toaster } = useSelector((state) => state.toaster)
    const { error, storageLoading } = useSelector((state) => state.storage)
    const { postTaskError, postHintError,postLoading } = useSelector((state) => state.task)
    const dp = useDispatch()
    const [showHint, setShowHint] = useState(false)
    const [required, setIsRequired] = useState(false)
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [fileHint, setFileHint] = useState("")
    const [imageHint, setImageHint] = useState("")
    const [newHint, setNewHint] = useState("")
    const [task, setTask] = useState({
        type: "",
        difficulty: "",
        title: "",
        description: "",
        points: "",
        file_url: null,
        answer: "",
        image_url: null,
    })

    const sendFile = (bucket, data) => {
        const formData = new FormData();
        formData.append('file', data);
        return   dp(postStorage({ bucket: bucket, formData: formData }))
    }
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }
    const handleChangeHint = (e) => {
        setNewHint(e.target.value)
    }

    const handleFile = (setter, e) => {
        setter(e.target.files[0])
    }

    const handleSelectValue = (value, name) => {
        setTask({ ...task, [name]: value })
    }
    const handleClick = async () => {
        if (checkObject(task)) {
            toast("Заполните обязательные поля", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
            setIsRequired(true)
            dp(setToaster(false))
            return
        }


        let fileUrl;
        let imgUrl

        if (image) {
            imgUrl =await sendFile('images', image)
            if (error) {
                toast("Ошибка при загрузки картинки", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                dp(setToaster(false))
            }
        }
        if (file) {
            fileUrl =await sendFile('tasks', file)
            if (error) {
                toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                dp(setToaster(false))
            }
        }

        let newTask = {
            ...task,
            points: Number(task.points),
            file_url: fileUrl?.payload?.url || null,
            image_url: imgUrl?.payload?.url || null,
        }
       let postedTask= await dp(postTask(newTask))
        if (postTaskError) {
            toast("Поля заполнены неверно", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
            dp(setToaster(false))
            return
        }
        console.log(postedTask)
        if(showHint){
            let fileHintUrl;
            if (fileHint) {
                fileHintUrl =await sendFile('tasks', fileHint)
                if (error) {
                    toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
            }
            let imageHintUrl;
            if (imageHint) {
                imageHintUrl = await sendFile('images', imageHint)
                if (error) {
                    toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
            }
            console.log(fileHintUrl )
            let toPostHint = {
                task_id: postedTask?.payload?.id,
                text: newHint,
                file_url: fileHintUrl?.payload?.url || null,
                image_url: imageHintUrl?.payload?.url || null,
            }
            console.log(toPostHint)
            dp(postHint(toPostHint))
            if (postHintError) {
                toast("Ошибка при добавлении задания", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                dp(setToaster(false))
            }
        }

        dp(setToaster(true))
        toast("Успешно", { icon: <img className="w-[22px] h-[22px" src={WhiteCheck} alt="Иконка" /> })

    }
    return <div>
        <Link to="/modules">
            <Button className="w-[92px] h-[42px] bg-[#171B26] mb-[20px]">
                <img src={ArrowLeft} className="mr-1" />Назад
            </Button>
        </Link>
        <div className="w-[965px] px-8 mb-7 py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch  flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch text-white text-lg mb-2 font-bold font-['Raleway'] leading-snug justify-between flex"> Добавление кейса </div>
                <div className="w-full h-px bg-[#666970] mb-[26px]"></div>
                <div className="flex justify-between flex-wrap w-full">
                    <InputBlock required={required} handleChange={handleChange} name="title" label="Название кейса" value={task.title} />
                    <SelectBlock required={required} handleSelectValue={handleSelectValue} value={task.difficulty} elems={types} title="Сложность" placeholder="Выберить уровень сложности" field="difficulty" />
                    <SelectBlock required={required} handleSelectValue={handleSelectValue} value={task.type} elems={modules} title="Добавить в модуль" placeholder="Выберите модуль" field="type" />
                    <InputBlock required={required} handleChange={handleChange} type="number" name="points" label="Кол-во очков" value={task.points} />
                    <InputBlock required={required} handleChange={(e) => handleFile(setImage, e)} name="image_url" label="Картинка" type="file" value="none" />
                    <InputBlock required={required} handleChange={(e) => handleFile(setFile, e)} name="file_url" label="Файл" type="file" value="none" />
                    <InputBlock required={required} handleChange={handleChange} name="answer" label="Верный ответ" value={task.answer} />
                </div>
                <div className="text-white text-sm font-semibold font-['Raleway'] mb-1 leading-tight">Текст</div>
                <Input onChange={handleChange} name="description" className={`w-full h-[132px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight ${required && task.description?.length == 0 ? "border border-red-500" : ""}`} />
                {!showHint && <Button onClick={() => setShowHint(true)} className="text-white text-base font-semibold font-['Raleway'] w-full h-[70px] pl-[69px] pr-[70px] py-[23px] leading-normal bg-[#222631] rounded-lg justify-center items-start gap-1.5 inline-flex"><img src={Plus} />Добавить подсказку</Button>}
            </div>
        </div>
        {showHint &&
            <div className="w-[965px] px-8  py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch  flex-col justify-start items-start gap-[7px] flex">
                    <div className="self-stretch text-white text-lg mb-2 font-bold font-['Raleway'] leading-snug justify-between flex"> Подсказка <img src={X} onClick={() => { setShowHint(false) }} /> </div>
                    <div className="w-full h-px bg-[#666970] mb-[26px]"></div>
                    <div className="flex justify-between flex-wrap w-full">
                        <InputBlock required={required} handleChange={(e) => handleFile(setImageHint, e)} name="image_url" label="Картинка" type="file" value="none" />
                        <InputBlock required={required} handleChange={(e) => handleFile(setFileHint, e)} name="file_url" label="Файлы" type="file" value="none" />
                    </div>
                    <div className=" text-white text-sm font-semibold font-['Raleway'] mb-1 leading-tight">Текст подсказки</div>
                    <Input onChange={handleChangeHint} name="text" className="w-full h-[132px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight" />
                </div>
            </div>
        }
        <div className="pt-10 pb-[65px]">
            <Button disabled={postLoading||storageLoading} bg="red" className="w-full" onClick={handleClick}>
                Добавить кейс
            </Button>
        </div>
    </div>
}

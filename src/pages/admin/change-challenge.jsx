import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
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
import { editHint, editTask, postHint, postTask } from "../../api/task-api";
import { getHintByIdAsync, getTaskByIdAsync } from "../../redux/features/tasks/taskSlices";

const SelectBlock = ({ handleSelectValue, elems = [], title = "", placeholder = "", field = "", required = false, inpVal = "" }) => {
    return <div>
        <div className=" text-white text-sm font-semibold font-['Raleway'] mb-2 leading-tight">{title}</div>
        <Select onValueChange={(e) => handleSelectValue(e, field)} className={`w-[432px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight`}>
            <SelectTrigger className={`w-[180px]  ${required && inpVal?.length == 0 ? "border border-red-500" : ""}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {elems.map((i, key) => (
                        <SelectItem key={key} value={i.key}>{i.inpVal}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
}

const InputBlock = ({ handleChange, name, label, type = "text", inpVal = "", required = false }) => {
    return <div>
        <div className=" text-white text-sm font-semibold font-['Raleway'] mb-2 leading-tight">{label}</div>
        {type == "file" ?
            <Input type={type} onChange={handleChange} name={name} className={`w-[432px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight ${required && value?.length == 0 ? "border border-red-500" : ""}`} />
            :
            <Input type={type} onChange={handleChange} name={name} value={inpVal} className={`w-[432px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight ${required && value?.length == 0 ? "border border-red-500" : ""}`} />
        }
    </div>
}

export const ChangeChallenge = () => {
    const { error, success, storageLaoding } = useSelector((state) => state.storage)
    const { editTaskError, editHintError, postHintError, task, editLoading, hint } = useSelector((state) => state.task)
    const dp = useDispatch()
    const { id } = useParams()

    const [showHint, setShowHint] = useState(false)
    const [required, setIsRequired] = useState(false)

    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [fileHint, setFileHint] = useState("")
    const [imageHint, setImageHint] = useState("")

    const [newHint, setNewHint] = useState("")
    const [hasHint, setHasHint] = useState(false)
    const [updatedTask, setUpdatedTask] = useState({})

    const [newTask, setNewTask] = useState({
        type: "",
        difficulty: "",
        title: "",
        description: "",
        points: "",
        file_url: null,
        answer: "",
        image_url: null,
    })
    useEffect(() => {
        setNewTask(task)
        setNewHint({ text: hint.text })
        setUpdatedTask({description:task.description})
        // setHasHint((JSON.stringify(hint)==JSON.stringify({})))
        // console.log((JSON.stringify({})==JSON.stringify(hint)))
        // console.log(JSON.stringify(hint))
    }, [task])
    useEffect(() => {
        setHasHint((JSON.stringify(hint) !== JSON.stringify({})))
        console.log((JSON.stringify({}) !== JSON.stringify(hint)))
        console.log(JSON.stringify(hint))
    }, [hint])

    useEffect(() => {
        dp(getTaskByIdAsync(id))
        dp(getHintByIdAsync(id))
    }, [dp, id])

    const sendFile = (bucket, data) => {
        const formData = new FormData();
        formData.append('file', data);
        return dp(postStorage({ bucket: bucket, formData: formData }))
    }

    const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
        setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value })
        if ([e.target.name] == 'points') {
            setUpdatedTask({ ...updatedTask, [e.target.name]: Number(e.target.value) })
        }
    }

    const handleChangeHint = (e) => {
        setNewHint({ ...newHint, text: e.target.value })
    }

    const handleFile = (setter, e) => {
        setter(e.target.files[0])
    }

    const handleSelectValue = (value, name) => {
        setNewTask({ ...newTask, [name]: value })
    }

    const handleClick = async () => {
        if (checkObject(newTask)) {
            toast("Заполните обязательные поля", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
            setIsRequired(true)
            dp(setToaster(false))
            return
        }

        let fileUrl;
        let imgUrl

        if (image) {
            imgUrl = await sendFile('images', image)
            console.log(imgUrl)
            setUpdatedTask({ ...updatedTask, image_url: imgUrl?.payload?.url || null })
            console.log({ ...updatedTask, image_url: imgUrl?.payload?.url || null })

            if (error) {
                toast("Ошибка при загрузки картинки", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                dp(setToaster(false))
            }
        }
        if (file) {
            fileUrl = await sendFile('tasks', file)
            setUpdatedTask({ ...updatedTask, file_url: fileUrl?.payload?.url || null, })

            if (error) {
                toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                dp(setToaster(false))
            }
        }

        console.log("udp",updatedTask)

        dp(editTask({ editTask: updatedTask, id }))
        if (editTaskError) {
            toast("Поля заполнены неверно", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
            dp(setToaster(false))
            return
        }


        if (showHint) {
            let fileHintUrl;
            if (fileHint) {
                fileHintUrl = await sendFile('tasks', fileHint)
                setNewHint({ ...newHint, file_url: fileHintUrl?.payload?.url || null })
                if (error) {
                    toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
            }
            let imageHintUrl;
            if (imageHint) {
                imageHintUrl = await sendFile('images', imageHint)
                setNewHint({ ...newHint, image_url: imageHintUrl?.payload?.url || null })
                if (error) {
                    toast("Ошибка при загрузки файла", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
            }
            console.log(newHint)
            if (hasHint) {
                dp(editHint({ id, editHint: { ...newHint } }))
                if (editHintError) {
                    toast("Ошибка при изминении подсказки", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
            } else {
                dp(postHint({    ...newHint,task_id: id,  }))
                if (postHintError) {
                    toast("Ошибка при добавлении подсказки", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
                    dp(setToaster(false))
                }
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
                <div className="self-stretch text-white text-lg mb-2 font-bold font-['Raleway'] leading-snug justify-between flex">Кейс: {task?.title} </div>
                <div className="w-full h-px bg-[#666970] mb-[26px]"></div>
                <div className="flex justify-between flex-wrap w-full">
                    <InputBlock required={required} handleChange={handleChange} name="title" label="Название кейса" inpVal={newTask.title} />
                    <SelectBlock required={required} handleSelectValue={handleSelectValue} inpVal={newTask.difficulty} elems={types} title="Сложность" placeholder="Выберить уровень сложности" field="difficulty" />
                    <SelectBlock required={required} handleSelectValue={handleSelectValue} inpVal={newTask.type} elems={modules} title="Добавить в модуль" placeholder="Выберите модуль" field="type" />
                    <InputBlock required={required} handleChange={handleChange} type="number" name="points" label="Кол-во очков" inpVal={newTask.points} />
                    <InputBlock required={required} handleChange={(e) => handleFile(setImage, e)} name="image_url" label="Картинка" type="file" inpVal="none" />
                    <InputBlock required={required} handleChange={(e) => handleFile(setFile, e)} name="file_url" label="Файл" type="file" inpVal="none" />
                    <InputBlock required={required} handleChange={handleChange} name="answer" label="Верный ответ" inpVal={newTask.answer} />
                </div>
                <div className="text-white text-sm font-semibold font-['Raleway'] mb-1 leading-tight">Текст</div>
                <Input onChange={handleChange} multiple value={newTask.description} name="description" className={`w-full h-[132px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight ${required && newTask.description?.length == 0 ? "border border-red-500" : ""}`} />
                {!showHint && <Button onClick={() => setShowHint(true)} className="text-white text-base font-semibold font-['Raleway'] w-full h-[70px] pl-[69px] pr-[70px] py-[23px] leading-normal bg-[#222631] rounded-lg justify-center items-start gap-1.5 inline-flex"><img src={Plus} />{hasHint ? "Изменить" : "Добавить"} подсказку</Button>}
            </div>
        </div>
        {showHint &&
            <div className="w-[965px] px-8  py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch  flex-col justify-start items-start gap-[7px] flex">
                    <div className="self-stretch text-white text-lg mb-2 font-bold font-['Raleway'] leading-snug justify-between flex"> Подсказка <img src={X} onClick={() => { setShowHint(false) }} /> </div>
                    <div className="w-full h-px bg-[#666970] mb-[26px]"></div>
                    <div className="flex justify-between flex-wrap w-full">
                        <InputBlock required={required} handleChange={(e) => handleFile(setImageHint, e)} name="image_url" label="Картинка" type="file" inpVal="none" />
                        <InputBlock required={required} handleChange={(e) => handleFile(setFileHint, e)} name="file_url" label="Файлы" type="file" inpVal="none" />
                    </div>
                    <div className=" text-white text-sm font-semibold font-['Raleway'] mb-1 leading-tight">Текст подсказки</div>
                    <Input onChange={handleChangeHint} value={newHint.text} name="text" className="w-full h-[132px] text-white text-base font-semibold font-['Raleway'] mb-5 leading-tight" />
                </div>
            </div>
        }
        <div className="pt-10 pb-[65px]">
            <Button className="w-full" onClick={handleClick} bg={`${editLoading || storageLaoding ? 'disabled' : 'red'}`} disabled={editLoading || storageLaoding}>
                Изменить кейс
            </Button>
        </div>
    </div>
}

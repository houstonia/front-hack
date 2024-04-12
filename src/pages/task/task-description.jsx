import { ChallengeCard } from "@/components/shared/challengeCard"
import { Input } from '@/components/ui/input'
import { Button } from "../../components/ui/button"
import WhiteCheck from "@/assets/icons/white-check.svg";
import SideMenu from "../../components/shared/sidemenu";
import CardImg from "@/assets/Image.png"
import Download from "@/assets/icons/download.svg"
import { DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner"
import X from "@/assets/icons/x.svg";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Link, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCompletedTasksAsync, getHintByIdAsync, getTaskByIdAsync, getTasksAsync } from "../../redux/features/tasks/taskSlices";
import { sendUserAnswer } from "../../api/task-api";
import { getCurrentUser } from "../../redux/features/auth/authSlices";
import { setToaster } from "../../redux/features/toaster/toaster";
import { TaskSolveButton } from "../../components/shared/task-solve-button";

export const TaskDescription = () => {
    const [answer, setAnswer] = useState("")

    const { tasks, task, hint ,completedTasks} = useSelector((state => state.task))
    const { currentUser } = useSelector((state => state.auth))
	const markedIds = completedTasks.map(item => item.id);
    const dp = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dp(getTasksAsync())
        dp(getTaskByIdAsync(id))
        dp(getHintByIdAsync(id))
        console.log(task)
    }, [dp, id])

    useEffect(() => {
        fetchUser()
    }, [dp])

    const fetchUser = async () => {
        let cur = await dp(getCurrentUser());
        await dp(getCompletedTasksAsync(cur?.id))
    };
    const handleChange = (e) => {
        setAnswer(e.target.value)
    }
    const handleClick = async () => {
        let res = (await dp(sendUserAnswer({ taskId: task.id, answer: { answer } })))?.payload?.valid
        dp(setToaster(res))
        toast(res ? "Ответ верен" : "Ответ не верен", { icon: <img className="w-[22px] h-[22px" src={res ? WhiteCheck : X} alt="Иконка" /> })
        console.log(res)

    }

    return <div className="flex flex-row gap-7">
        <div>
            <div className="w-full flex h-[42px] flex flex-row justify-between mb-4">
                <div className="flex flex-row gap-[16px]">
                <Link to="/tasks">
                    <button className=" w-[101.46px] pl-2.5 pr-4 py-2.5 bg-[#171B26] rounded-lg flex flex-row justify-center items-center gap-2">
                        <img src="/src/assets/icons/ArrowBack.svg"></img>
                        <div className="text-white text-[15px] font-semibold leading-tight">Назад</div>
                    </button>
                </Link>
                {task?.type==="reverse"&&task?.title==="Лабиринт"&&
                <TaskSolveButton/>
                }
                </div>
                {hint?.text &&
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="pl-2.5 pr-4 py-2.5 bg-[#171B26] rounded-lg flex flex-row justify-center items-center gap-2">
                            <img src="/src/assets/icons/help-circle.svg"></img>
                            <div className="text-white text-[15px] font-semibold leading-tight">Подсказка</div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="w-[660px] h-[606px] px-8 pt-7 pb-8 bg-[#171B26] rounded-xl shadow flex flex-col justify-start items-start gap-2.5">
                        <div className="flex w-full flex-row justify-between items-center border-b-px border-b-2 border-b-[#666970] pb-3">
                            <div className="text-white items-center text-lg font-semibold">Подсказка</div>
                            <DialogClose>
                                <button className="w-[22px] h-[22px] flex items-center">
                                    <img className="w-7 h-7" src="/src/assets/icons/xgray.svg"></img>
                                </button>
                            </DialogClose>
                        </div>
                        <div className="self-stretch h-[82px] flex-col justify-start items-end gap-4 flex">
                            <div className="self-stretch h-[478px] flex-col justify-start items-start gap-3.5 flex">
                                <div className="self-stretch">
                                    <span className="text-white text-base font-semibold font-['Raleway'] leading-normal"> {hint?.text} </span>
                                </div>
                                {hint?.image_url && <img className="w-[596px] h-[336px] rounded-lg" src={hint.image_url} />}
                                {hint?.file_url && <div className="self-stretch justify-start items-start gap-3.5 flex flex-row">
                                    <NavLink to={hint?.file_url}>
                                        <Button className="w-[199px] h-[42px] bg-[#222631]" icon="/src/assets/icons/download.svg" variant="download" size="download"  > Скачать файл</Button>
                                    </NavLink>
                                </div>
                                }
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                }
            </div>
            <ChallengeCard task={task} />
            <div className="flex items-center gap-3.5">
            {markedIds.includes(task.id)?  <Input placeholder="Flag" size="task" value={`${markedIds.includes(task.id) &&task.answer}`} onChange={handleChange} border={`${markedIds.includes(task.id) ?'success':''}`}  />
:                <Input placeholder="Flag" size="task" onChange={handleChange}  />
}
                <Button bg={`${markedIds.includes(task.id) ?'success':'red'}`} disabled={markedIds.includes(task.id)} variant="standart" size="standart" className="flex" onClick={handleClick}>
                   {markedIds.includes(task.id) ?<><img src={WhiteCheck} alt="" srcset="" />Решено</>:"Submit"}
                </Button>
            </div>
        </div>
        <SideMenu data={tasks} id={id} />
    </div>
}
import { ModuleCard } from "@/components/shared/admin/module-card"
import { Button } from "../../components/ui/button"
import Plus from "@/assets/icons/plus.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTaskByType, getTasksAsync } from "../../redux/features/tasks/taskSlices";



export const Modules = () => {
    const tasks = useSelector((state => state.task.tasks))
    const dp = useDispatch()
    useEffect(() => {
        dp(getTasksAsync())
    }, [dp])
    return <div>
        {getTaskByType(tasks)?.map((i, key) => (
            <ModuleCard data={i} key={key} />
        ))}
        <Link  to="add-challenge">
            <Button className="text-white text-base font-semibold font-['Raleway'] w-full h-[70px] mb-10  leading-normal bg-[#222631] rounded-lg justify-center items-center gap-1.5 inline-flex"><img src={Plus} />Добавить кейс</Button>
        </Link>

    </div>
}
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom";
import { TaskSolveItem } from "./task-solve-item";

export const TaskSolveButton = ({variant = "selected", variant1 = "selected"}) => {
    const currentPath = window.location.href;
    let path = currentPath;
    const status = currentPath.indexOf('/solution')
    if(status > -1){
        path = currentPath.slice(0, status)
    }
    else{
        path = currentPath + "/solution"
    }
    variant = (status !== -1)?"selected":"default";
    return(<div className="flex flex-row rounded-sm w-[210px] text-white">
        <TaskSolveItem className="rounded-l-md" text="Кейс" adress={status != -1?path:window.location.href} variant={status!=-1?"default":"selected"}></TaskSolveItem>
        <TaskSolveItem className="rounded-r-md" text="Решение" adress={status == -1?path:window.location.href} variant={status==-1?"default":"selected"}></TaskSolveItem>
    </div>)
}
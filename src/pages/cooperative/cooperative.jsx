
import { useState } from "react";
import { cn } from "@/lib/utils.js";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.jsx";

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog";
import { ProjectHubCard } from "@/components/shared/project-hub/project-hub-card"

 const MyTask = () => {
    return <div className="w-[304px] h-[206px] relative bg-[#222631] rounded-lg p-4">
        <p className="text-white text-lg font-bold font-['Raleway'] leading-snug pb-4">Онбординг</p>
        <p className="text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight pb-4">Создание сервиса облегчающего вхождение абитуриента в ...</p>
        <p className="text-white text-sm font-semibold font-['Raleway'] leading-tight pb-4">Ваш чат <span className="text-violet-400 text-sm font-semibold font-['Raleway'] leading-tight">https://t.me/channel</span></p>
        <Button size="full">Выйти</Button>
    </div>
}

const Wrapper = ({ title, children }) => {
    return (
        <div className="w-[fit] px-8 mb-7 py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
            <h1 className="text-white text-lg font-bold font-['Raleway'] leading-snug">{title}</h1>
            <div className="flex flex-wrap">
                {children}
            </div>
        </div>
    );
}

export const CustomDialogTrigger = ({ children }) => {
    return <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="w-[470px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
            <p className="text-white text-lg font-bold font-['Raleway'] leading-snug">ИИ чат-бот </p>
            <div className="text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight">Создание сервиса облегчающего вхождение абитуриента в студенческую среду, знакомство с правилами колледжа, сервисами доступными студенту. Анализ достижений и неудач студента для персонализированного подбора рекомендаций по дальнейшему развитию (курсы, занятия, короткие программы)</div>
            <p className="w-[464px] text-white text-sm font-semibold font-['Raleway'] leading-tight mt-2 "> Роль в команде</p>
            <div className='my-1'>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите роль в команде" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Frontend</SelectItem>
                        <SelectItem value="dark">Backend</SelectItem>
                        <SelectItem value="system">UI</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex w-[100%] justify-between">
                <DialogClose>
                    <Button size="full" bg="background3">Отменить</Button>
                </DialogClose>
                <DialogClose>
                    <Button size="full" bg="red">Присоединиться</Button>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
}

 const MyCustomDialogTrigger = ({ children }) => {
    return <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="w-[470px] rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch h-[82px] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch text-white text-base font-semibold font-['Raleway'] leading-normal">Вы уверены, что хотите выйти из команды?</div>
                <div className="justify-end items-start gap-3.5 inline-flex">
                    <DialogClose>
                        <Button bg="background3">Нет</Button>
                    </DialogClose>
                    <DialogClose>
                        <Button bg="red">Да</Button>
                    </DialogClose>
                </div>
            </div>
        </DialogContent>
    </Dialog>
}
 const TasksComp = () => {
    return <Wrapper title="">
        <CustomDialogTrigger>
            <ProjectHubCard />
        </CustomDialogTrigger>
        <ProjectHubCard />
    </Wrapper>
}
 const MyTasksComp = () => {
    return <Wrapper title="">
        <MyCustomDialogTrigger>
            <MyTask />
        </MyCustomDialogTrigger>
    </Wrapper>
}
const templates = [
    {
        title: "Задачи",
        template: <TasksComp />
    },
    {
        title: "Мои задачи",
        template: <MyTasksComp />
    },
]

export const Cooperative = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    return <div>
        <div className="w-full flex flex-col pb-3">
            <div>
                {templates.map((item, i) => (
                    <Button key={i} onClick={() => setSelectedTab(i)} className={cn(selectedTab === i ? 'bg-[#9A66F4] hover:bg-[#9A66F4]' : 'bg-[#171B26] hover:bg-[#202329]', 'rounded-none text-white w-[113px]', (i === 0) && 'rounded-l-md', (i === templates.length - 1) && 'rounded-r-md')}>
                        {item.title}
                    </Button>
                ))}
            </div>
            <div className='bg-[#171B26] mt-5'>
                {templates[selectedTab].template}
            </div>
        </div>

    </div>
}

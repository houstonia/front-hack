import { useState } from "react";
import { cn } from "@/lib/utils.js";

import { Button } from "@/components/ui/button"
import { ProjectHubCard } from "@/components/shared/project-hub/project-hub-card"

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

export const TasksComp = () => {
    return <Wrapper title="">
        <ProjectHubCard />
        <ProjectHubCard />
    </Wrapper>
}
const templates = [
    {
        title: "Задачи",
        template: <TasksComp />
    },
    {
        title: "Мои задачи",
        template: <div></div>
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


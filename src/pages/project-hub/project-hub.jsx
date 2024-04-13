import { ProjectHubCard } from "@/components/shared/project-hub/project-hub-card"
import { SearchInput } from "@/components/shared/search-input"
import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksHubsAsync } from "../../redux/features/topic/topicSlices";

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

export const ProjectHub = () => {
  const {tasksHub}=  useSelector((state)=>state.topic)
   const dp= useDispatch()
    useEffect(()=>{
        dp(getTasksHubsAsync())
    },[])
    return <div>
        <div className="w-full flex flex-row pb-3">
            <SearchInput className="bg-[#171B26] w-full hover:outline-none hover:border-none" placeholder="Поиск" />
            <Button className="bg-[#9A66F4] text-white ml-4" size="lg">Поиск</Button>
        </div>
        {tasksHub?.map(i=>(
        <Wrapper title={i.company_name}>
            {i.tasks.map(task=>(
            <ProjectHubCard key={task.id} title={task.title} tags={task.subjects} description={task.description} level={task.level}/>
            ))}
        </Wrapper>
        ))}
    </div>
}
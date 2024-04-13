import Users from "@/assets/icons/users.svg"
import Download from "@/assets/icons/download.svg"
import {Button} from "@/components/ui/button"

export const Tag = ({name}) => {
    return <div className="p-1 mr-2 bg-[#30324A] rounded justify-center items-center gap-2 flex">
        <div className="text-center text-white text-sm font-bold font-['Raleway'] leading-tight">{name}</div>
    </div>
}

export const ProjectHubCard = () => {
    return <div className="w-fit p-4 bg-[#222631] rounded-lg mr-3 mb-3">
        <p className="text-white text-base font-semibold font-['Raleway'] leading-tight py-2">Онбординг</p>
        <p className="w-[272px] text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight py-2">Создание сервиса облегчающего вхождение абитуриента в ...</p>
        <div className="flex w-[100%] pt-2 pb-5 justify-start">
            <Tag name="Математика" /> 
            <Tag name="Информатика"/> 
            <Tag name="ИИ"/>
        </div>
        <div className="flex items-center"> 
            <img src={Users} alt="" />
            <span className=" text-sm text-zinc-500 font-semibold font-['Raleway'] leading-tight m-2">Сложность:</span> 
            {/* <span className="text-green-500 text-sm font-semibold font-['Raleway'] leading-tight mr-2">легкая</span> */}
            <span className="text-[#FFC100] text-sm font-semibold font-['Raleway'] leading-tight mr-2">средняя</span>
        </div>
        {/* <Button size="full"><img src={Download} className="mr-2"/> Скачать материалы</Button> */}
    </div>
}
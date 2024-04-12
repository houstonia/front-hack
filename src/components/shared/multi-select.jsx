import  PlusIcon  from "@/assets/icons/plus-in-circle.svg";
import { cn } from "@/lib/utils"


export const MultiSelect = ({name='Тип курса', textClass}) => {
  return <div className="py-2  rounded-md  justify-center items-center gap-1 inline-flex">
    <div className="w-5 h-5">
      <img src={PlusIcon}/> 
    </div>
    <div className={cn("text-zin-400 text-sm font-medium font-['Inter'] leading-normal text-white", textClass)}>{name}</div>
  </div>
}
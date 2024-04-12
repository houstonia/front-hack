import { Button } from "../ui/button"
import { MultiSelect } from "./multi-select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { useDispatch } from "react-redux"
import { Checkbox } from "./custom-checkbox"
import { cn } from "@/lib/utils"

export const CourseFilter = ({ name = "Тип курса" ,vars=[],data=[],remove,set,clear, className, textClass}) => {
    const dp=useDispatch()

    const handleClick=()=>{
        console.log(data)
        dp(clear())
    }

    return <Popover>
        <PopoverTrigger asChild>
            <Button variant="outline" className={cn("ml-2", className)}>
                <MultiSelect name={name} />
                {data.length>0&&<div className="w-px mx-1 h-4 relative bg-zinc-200"></div>}
                <div className="flex">
                    {data.map((i, key) => (
                        <div key={key} className="h-5 mx-1 px-1 py-0.5 bg-zinc-100 rounded justify-center items-center gap-2.5 inline-flex">
                            <div className="text-xs font-normal font-['Inter'] leading-none">{i}</div>
                        </div>  
                    ))}
                </div>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[198px] p-1 pr-3 bg-[#333846]">
            <div className="border-b border-zinc-200 px-4">
                {vars?.map((i,index)=>(
                <div className="flex items-center space-x-2 my-3" key={index}>
                    <Checkbox className="" id="terms" value={i} remove={remove} set={set} data={data}/>
                    <Label className={textClass} htmlFor="terms">{i}</Label>
                </div>        
                ))}
            </div>
            <div className="flex justify-center">
                {data.length>0&&<Button className={textClass} variant="ghost" onClick={handleClick}>Сбросить фильтры</Button>}
            </div>
        </PopoverContent>
    </Popover>
}



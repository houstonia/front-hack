import { Card } from "@/components/ui/card"
import CardImg from "@/assets/card-img/ipt.svg";

export const CourseCard=()=>{
    return <Card className="w-[377px] h-60 relative my-2">
    <div className="w-[377px] h-[158px] pl-[293px] pr-5 pt-5 pb-[114px] left-0 top-0 absolute border-b border-zinc-200 justify-end items-center inline-flex">
        <div className="w-16 self-stretch px-2 bg-zinc-900 rounded-[43px] justify-center items-center inline-flex">
            <div><span className="text-white text-sm font-medium font-['Inter'] leading-normal">5000</span><span className="text-white text-sm font-medium font-['Inter'] ml-1 leading-normal">₽</span></div>
        </div>
    </div>
    <div className="w-[189px] h-[138px] left-[94px] top-[20px] absolute">
        <img src={CardImg} />
    </div>
    <div className="left-[20px] top-[170px] absolute text-zinc-900 text-lg font-semibold font-['Inter'] leading-7">Инженер по тестированию</div>
    <div className="left-[20px] top-[198px] absolute text-gray-500 text-base font-normal font-['Inter'] leading-normal">С опытом / Инф. безопасность </div>
</Card>
}
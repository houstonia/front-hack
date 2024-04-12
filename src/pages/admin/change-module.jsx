import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";


export const ChangeModule = () => {
    return <div>
        <Link to="/modules">
            <Button className="w-[92px] h-[42px] bg-[#171B26] mb-[28px]"> <img src={ArrowLeft} className="mr-1" />Назад</Button>
        </Link>
        <div className="w-[965px] px-8 mb-7 py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch  flex-col justify-start items-start gap-[7px] flex">
                <div className="self-stretch text-white text-lg mb-2 font-bold font-['Raleway'] leading-snug justify-between flex"> Категория: Реверс </div>
                <div className="w-full h-px bg-[#666970] mb-[26px]"></div>
                <div className="w-[888px] text-white text-sm font-semibold font-['Raleway'] mb-1 leading-tight">Название категрии</div>
                <Input size="default" className="text-white text-base font-semibold font-['Raleway'] leading-tight" />
                <div className="justify-end inline-flex w-full pt-[30px]">
                    <Button bg="red">Изменить</Button>
                </div>
            </div>
        </div>
    </div>
}
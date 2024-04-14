import pi from "@/assets/pi.png"
import { Input } from '@/components/ui/input'

export const TestCard = ({question}) => {
    return <div className="w-[768px] h-[805px] p-8 bg-[#222631] rounded-xl flex-col justify-center items-start gap-5 inline-flex mb-10">
        <img className="w-[960px] h-[547px]" src={pi} rounded-xl />
        <div className="text-white text-base font-semibold font-['Raleway'] leading-tight">{question}</div>
        <div className="self-stretch text-white text-sm font-semibold font-['Raleway'] leading-tight">Ответ</div>
        <Input size="test" variant="task" />
        <div className="self-stretch h-[52px] px-6 py-3.5 bg-violet-500 rounded-lg flex-col justify-center items-start gap-2 inline-flex">
            <div className="self-stretch text-center text-white text-base font-semibold font-['Raleway'] leading-tight">Сохранить ответ</div>
        </div>
    </div>
}
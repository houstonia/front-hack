import Check from "@/assets/icons/check.svg"

export const TaskElem = ({difficulty="Training",points="476",title="build_error"}) => {
    return <div className="w-[286px] h-[70px] relative bg-[#222631] rounded-lg">
        <div className="h-[42px] left-[16px] top-[14px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-white text-base font-semibold font-['Raleway'] leading-tight flex"> {title}{false&&<img classNameName="ml-2" src={Check}/>}</div>
            <div className="self-stretch text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight">{points}pts</div>
        </div>
        <div className="px-1.5 py-0.5 left-[216px] top-[12px] absolute bg-zinc-700 rounded justify-center items-center inline-flex">
            <div className="text-white text-sm font-bold font-['Raleway'] leading-tight">{difficulty}</div>
        </div>
    </div>
}
export const SolutionBlock = ({ title, children}) => {
    return(
    <div className="flex flex-col gap-[26px] h-fit px-[32px] pt-[28px] pb-[26px] w-[660px] gap-[26px] text-white bg-[#171B26] rounded-lg">
        <div className="text-white text-lg font-bold font-['Raleway'] leading-snug mb-[18px] border-b-2 border-b-[#666970] pb-[18px]">{title}</div>
        <div className="flex flex-col [&>*where(img)]:w-[596px] flex-wrap">{children}
        </div>
    </div>
    )
}
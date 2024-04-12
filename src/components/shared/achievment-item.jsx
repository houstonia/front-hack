import { Progress } from "./ProgressBar"

function AchievmentItem({imgSRC, title, desc, currentValue, targetValue}){
    return(<div className="bg-[#171B26] w-[952px] h-[170px] rounded-lg flex flex-row p-6 gap-2">
        <img className="bg-transparent w-[104px]" src={imgSRC}></img>
        <div className="w-full flex flex-col justify-between">
            <div className="w-full flex flex-row justify-between">
                <div className="text-white text-lg font-semibold font-['Raleway'] leading-snug">
                    {title}
                </div>
                <div className="text-[#8A8F9A]">
                    {currentValue + " / " + targetValue}
                </div>
            </div>
            <div className="w-full">
                <div className="flex w-full flex-col justify-between gap-2"></div>
                <Progress className="bg-red-500 bg-opacity-20 h-2" value={currentValue/targetValue * 100}/>
                <div className="text-neutral-400 text-base font-semibold font-['Raleway'] leading-tight mt-3">{desc}</div>
            </div>
        </div>
    </div>)
}

export default AchievmentItem
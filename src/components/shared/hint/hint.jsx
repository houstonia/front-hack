import BotImage from "@/assets/bot-image.svg";
import AiBot from "@/assets/icons/aibot.svg"
import Glow from "@/assets/icons/glow.svg"
import {cn} from "@/lib/utils.js";

export const Hint = ({className}) => {
    return (
        <div className={className}>
            <div className={cn('h-[304px] w-[304px] relative')}>
                <img src={AiBot} alt="aibot-logo"/>
                <img src={Glow} className="absolute left-[50%] top-[50%]" style={{transform: 'translate(-50%, -40%)'}} />
            </div>
        </div>
    )
    // return (
    //     <div {...props}>
    //         <img src={AiBot} />
    //         <img src={Glow} className="absolute" />
    //         {/*<div className="text-white w-[193px] h-[60px] px-3.5 py-2 bg-slate-600 rounded-xl ml-[-60px]">Здесь ты можешь найти меня!</div>*/}
    //     </div>
    // )
}
import BotImage from "@/assets/bot-image.svg";
import AiBot from "@/assets/icons/aibot.svg"
import Glow from "@/assets/icons/glow.svg"

export const Hint = () => {
    return (
        <div className="absolute flex items-center top-[] left-[400px]">
            <img src={AiBot} />
            <img src={Glow} className="absolute" />
            <div className="text-white w-[193px] h-[60px] px-3.5 py-2 bg-slate-600 rounded-xl ml-[-60px]">Здесь ты можешь найти меня!</div>
        </div>
    )
}
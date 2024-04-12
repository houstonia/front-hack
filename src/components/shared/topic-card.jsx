import React from "react";
import Users from "../../assets/icons/users.svg"
import Telegram from "../../assets/icons/telegram.svg"

export const TopicCard = ({ title, content, telegram_name }) => {
    return (
        <div className="w-[304px] p-3 bg-[#222631] rounded-lg">
            <p className="text-white text-base font-semibold font-['Raleway'] leading-tight my-1">{title}</p>
            <p className="w-[272px] text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight my-3">{content}</p>
            <div className="flex my-2">
                <img src={Users} alt="" srcset="" />
                <p className="pl-1 text-zinc-500 text-sm font-semibold font-['Raleway'] leading-tight">1234 участника</p>
            </div>
            <div className="flex my-2">
                <img src={Telegram} alt="" />
                <p className="pl-1 text-violet-400 text-sm font-semibold font-['Raleway'] leading-tigh">{telegram_name}</p>
            </div>
        </div>
    )
}
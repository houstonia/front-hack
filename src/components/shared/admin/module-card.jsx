import { Link } from "react-router-dom";
import { TopicCard } from "../topic-card";


export const ModuleCard = ({ data, name }) => {

    return <div className="w-[965px] px-8 mb-7 py-7 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-fit flex-col justify-start items-start gap-[7px] flex">
            <div className="self-stretch pb-[26px]  text-white text-lg font-bold font-['Raleway'] leading-snug justify-between flex">{name}</div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex overflow-scroll">
                <div className="flex flex-nowrap space-x-4 overflow-hidden">
                    {
                        data?.map((i, key) => (
                            <TopicCard title={i.title} content={i.content} telegram_name={i.telegram_name} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
}
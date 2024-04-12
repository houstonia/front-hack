import Download from "@/assets/icons/download.svg"
import CardImg from "@/assets/Image.png"
import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"


export const ChallengeCard = ({ task }) => {
    return <div className="w-[660px] h-fit px-8 py-6 bg-[#171B26]  rounded-xl flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-[26px] flex">
            <div className="self-stretch h-10 flex-col justify-start items-start gap-[18px] flex">
                <div className="w-[596px] h-[22px] justify-between items-center inline-flex">
                    <div className="justify-between items-center inline-flex">
                        <div className="text-white text-lg font-bold mr-3 font-['Raleway'] leading-snug">{task.title}</div>
                        <div className="text-white text-sm font-bold font-['Raleway'] leading-tight px-1.5 py-0.5 bg-zinc-700 rounded justify-center items-center inline-flex">{task.difficulty}</div>
                    </div>
                    <div className="text-right text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight">{task.points} pts</div>
                </div>
            </div>
            <div className="self-stretch] flex-col justify-start items-start gap-3.5 flex">
                <div className="self-stretch"><span className="text-white text-base font-semibold font-['Raleway'] leading-normal">{task.description} </span> <span className="text-white text-base font-semibold font-['Raleway'] leading-normal">.</span></div>
                {task.image_url && <img className="w-fit h-fit rounded-lg" src={task?.image_url} />}
                <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
                    {task?.file_url && <div className="self-stretch justify-start items-start gap-3.5 flex flex-row">
                        <NavLink to={task?.file_url}>
                            <Button className="w-[199px] h-[42px] bg-[#222631]" icon="/src/assets/icons/download.svg" variant="download" size="download"  > Скачать файл</Button>
                        </NavLink>
                    </div>}
                </div>
            </div>
        </div>
    </div>
}
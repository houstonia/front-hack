import { Link } from "react-router-dom"
import { TaskElem } from "./task-elem"
const types={
  "cryptography":"Криптография",
  "reverse":"Реверс",
  "web":" Web",
  "forensic":"Forensic",
  "steganoraphy":"Стеганография",
}

export const TaskCard = ({ key,data }) => {
  return <div className="w-[965px] h-[178px] px-8 mb-7 pt-7 pb-8 bg-[#171B26] rounded-xl flex-col justify-start items-start gap-2.5 inline-flex" key={key}>
    <div className="self-stretch h-[118px] flex-col justify-start items-start gap-[7px] flex">
      <div className="self-stretch text-white text-lg font-bold font-['Raleway'] leading-snug">{data[0].type}</div>
      <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex overflow-auto">
        <div className="">
          <div className="flex flex-nowrap space-x-4 overflow-hidden">
            {data.map((i )=>(
               <Link to={i.id}>
                 <TaskElem id={i.id} points={i.points} title={i.title} difficulty={i.difficulty}/>
               </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
}
import { ModuleCard } from "../../components/shared/admin/module-card"
import { SearchInput } from "../../components/shared/search-input"
import { Button } from "../../components/ui/button"
import {taskData} from "./const"

export const Tasks = () => {
    return <div>
        <div className="w-full flex flex-row pb-3">
            <SearchInput className="bg-[#171B26] w-full hover:outline-none hover:border-none " placeholder="Поиск" />
            <Button className="bg-[#9A66F4] text-white ml-4" size="lg">Поиск</Button>
        </div>
        {
           taskData.map(i=>
            <ModuleCard name={i.categoryName} data={i.topics}/>)
        }
    </div>
}
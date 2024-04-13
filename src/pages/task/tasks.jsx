import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModuleCard } from "../../components/shared/admin/module-card"
import { SearchInput } from "../../components/shared/search-input"
import { Button } from "../../components/ui/button"
import { getTopicsAsync } from "../../redux/features/topic/topicSlices"
export const Tasks = () => {
    const {topics}=useSelector((state)=>state.topic)
    const dp=useDispatch()
    useEffect(()=>{
        dp(getTopicsAsync())
    },[])
    return <div>
        <div className="w-full flex flex-row pb-3">
            <SearchInput className="bg-[#171B26] w-full hover:outline-none hover:border-none " placeholder="Поиск" />
            <Button className="bg-[#9A66F4] text-white ml-4" size="lg">Поиск</Button>
        </div>
        {
           topics?.map((i,ind)=>
            <ModuleCard key={ind} name={i.category_name} data={i.topics}/>)
        }
    </div>
}
import { PopoverContent } from "@radix-ui/react-popover"
import { Button } from "../../components/shared/custom-btn"
import { TableRow } from "../../components/shared/tableRow"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCurrentUser } from "../../redux/features/auth/authSlices"
import { getCompletedTasksAsync } from "../../redux/features/tasks/taskSlices"

export const MyEducation = () => {
    const dp = useDispatch()
    useEffect(() => {
        fetchUser()
    }, [dp])

    const fetchUser = async () => {
        let cur = await dp(getCurrentUser());
        await dp(getCompletedTasksAsync(cur?.id))
    };
    const { completedTasks } = useSelector((state => state.task))
    console.log(completedTasks)
    const items = ["1-10", "11-50"]
    return <div className="flex flex-col gap-7">
        <img className="h-[430px] w-[952px]" src="/src/assets/icons/Statistics.png" />
        <table className="table-fixed text-white bg-[#171B26]">
            <thead className="text-[#7A7D83]">
                <tr>
                    <th className="h-[60px] pl-5 text-start">Кейс</th>
                    <th className="h-[60px] pl-5 text-start">Категории</th>
                    <th className="h-[60px] pl-5 text-start">pts</th>
                    {/* <th className="h-[60px] pl-5 text-start">Время решения</th> */}
                </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-[#222631] ">
                {
                    completedTasks?.map((i, ind) => (
                        <TableRow title={i.title} category={i.type} pts={i.points} time="Сентябрь 00, 00:00:00" />
                    ))
                }
            </tbody>
        </table>
        {/* <div className="flex flex-row justify-between text-white">
            <div className="flex flex-row gap-1 items-center"><div className="pr-1">Показать по</div>
                <Select defaultValue="10">
                    <SelectTrigger className="w-[75px] h-[40px] text-white bg-[#171B26] border-0">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="10">1-10</SelectItem>
                        <SelectItem value="50">1-50</SelectItem>
                    </SelectContent>
                </Select>
                <div className="ml-2">Из 50</div>
            </div>
            <div className="flex flex-row row justify-between gap-3">
                <button className="flex flex-row justify-center rounded-lg items-center w-[42px] h-[42px] bg-[#222631]"><img src="/src/assets/icons/ArrowBack.svg"></img></button>
                <button className="flex flex-row justify-center rounded-lg items-center w-[42px] h-[42px] bg-[#222631]"><img src="/src/assets/icons/ArrowForward.svg"></img></button>
            </div>
        </div> */}
    </div>
}
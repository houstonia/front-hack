import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const Leaderboard = () => {
    return <div className="flex flex-col gap-4 text-white">
        <div>Топ 10 лидеров недели</div>
        <div className="flex flex-row gap-4">
            <img src="/src/assets/icons/Chart.png" />
            <img src="/src/assets/icons/Designations.png" />
        </div>
        <table className="w-[952px] h-[] table-fixed text-[#7A7D83] bg-[#171B26]">
            <tr className="h-[60px]">
                <th className="text-center pl-5 w-[101px] ">Место</th>
                <th className="pl-[30px] text-start w-[734px]">Пользователь</th>
                <th className="pl-5 text-start w-[117px]">pts</th>
            </tr>
            <tbody className="text-white [&>*:nth-child(odd)]:bg-[#222631]">
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">1</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">2</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">3</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">4</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">5</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">6</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">7</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">8</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">9</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
                <tr className="h-[60px]">
                    <td className="pl-5 text-start">10</td>
                    <td className="pl-5 text-start">Ennui185</td>
                    <td className="pl-5 text-start">00000</td>
                </tr>
            </tbody>
        </table>
        <div className="flex flex-row justify-between text-white mb-10 ">
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
        </div>
    </div>
}

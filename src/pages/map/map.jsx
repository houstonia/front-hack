import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from '@/components/ui/input'
import {cn} from "@/lib/utils.js";
import { PanoramaTour } from "../../components/shared/panorama-tour";
import FloorNavigator from "../../components/shared/FloorNavigator";

const templates = [
    {
        title: "Карта",
        template: <FloorNavigator/>
    },
    {
        title: "360' карта",
        template: <PanoramaTour/>
    },
    {
        title: "Маршрут",
        template: <div>Маршрут</div>   
    }
]


export const Map=()=>{
    const [selectedTab, setSelectedTab] = useState(0);
    return <div>
          {templates.map((item, i) => (
                <Button key={i} onClick={() => setSelectedTab(i)} className={cn(selectedTab === i ? 'bg-[#9A66F4] hover:bg-[#9A66F4]' : 'bg-[#171B26] hover:bg-[#202329]', 'rounded-none text-white w-[113px]', (i === 0) && 'rounded-l-md', (i === templates.length-1) && 'rounded-r-md')}>
                    {item.title}
                </Button>
            ))}
            <div className='bg-[#171B26] p-8 mt-7'>
                <div >
                    {templates[selectedTab].template}
                </div>
                <div className='mt-7 flex justify-end gap-4'>
                <Input placeholder="Поиск"/>
                    <Button size="lg"  className='text-white bg-[#9A66F4] hover:bg-[#F15048]'>Поиск</Button>
                </div>
            </div>
    </div>
}
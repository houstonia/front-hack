import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from '@/components/ui/input'
import {cn} from "@/lib/utils.js";
import { PanoramaTour } from "../../components/shared/panorama-tour";
import FloorNavigator from "../../components/shared/FloorNavigator";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.jsx";
import BottomPanel from "@/pages/map/BottomPanel.jsx";
import SidePanel from "@/pages/map/SidePanel.jsx";
import axios from "axios";

export const Map=()=>{

    const [selectedTab, setSelectedTab] = useState(0);
    const [points, setPoints] = useState([]);

    const templates = [
        {
            title: "2D карта",
            template: <FloorNavigator points={points}/>
        },
        {
            title: "360' карта",
            template: <PanoramaTour/>
        },
    ]

    const fetchPoints = () => {
        axios.get('http://80.76.60.168:8080/api/maps/?start=reg4rt&end=g4g4tgf').then(res => setPoints(res.data.coordinates))
    }

    return (
        <div className="flex gap-x-[32px]">
            <div className='w-[688px] h-[45px]'>
                {templates.map((item, i) => (
                    <Button key={i} onClick={() => setSelectedTab(i)} className={cn(selectedTab === i ? 'bg-[#9A66F4] hover:bg-[#9A66F4]' : 'bg-[#171B26] hover:bg-[#202329]', 'rounded-none text-white w-[113px]', (i === 0) && 'rounded-l-md', (i === templates.length-1) && 'rounded-r-md')}>
                        {item.title}
                    </Button>
                ))}
                <div className='bg-[#171B26] p-8 mt-7'>
                    <div>
                        {templates[selectedTab].template}
                    </div>
                    <div>
                        <BottomPanel className='mt-5'/>
                    </div>
                </div>
            </div>
            <div className='w-[272px] h-[45px] block min-w-[272px]'>
                <SidePanel fetchPoints={fetchPoints}/>
            </div>
        </div>
    )
}
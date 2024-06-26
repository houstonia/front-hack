import {useEffect, useState} from "react";
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
import {useLocation} from "react-router-dom";

export const Map=()=>{
    const [selectedTab, setSelectedTab] = useState(0);
    const [points, setPoints] = useState([]);
    const [positions, setPositions] = useState({from: '', to: ''});
    const location = useLocation();
    const data = {coordinates: location?.state?.coordinates || [], from: location?.state?.from || '', to: location?.state?.to || ''};

    useEffect(() => {
        if(data.coordinates.length) {
            setPositions({from: data.from, to: data.to});
        }
    }, [])

    const templates = [
        {
            title: "2D карта",
            template: <FloorNavigator points={points.length ? points : data.coordinates}/>
        },
        {
            title: "360' VR тур",
            template: <PanoramaTour/>
        },
    ]
    // 80.76.60.168:8080
    const fetchPoints = () => {
        axios.get(`https://gagarinhack.duckdns.org/api/maps/?start=${positions.from}&end=${positions.to}`).then(res => setPoints(res.data.coordinates))
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
                <SidePanel fetchPoints={fetchPoints} setPositions={setPositions} positions={positions} />
            </div>
        </div>
    )
}
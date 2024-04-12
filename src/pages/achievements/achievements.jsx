import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAwardsByUsers } from "../../api/awards-api"
import AchievmentItem from "../../components/shared/achievment-item"
import { getCurrentUser } from "../../redux/features/auth/authSlices"
import TargetIcon from "@/assets/icons/Target.png";
import CalendarIcon from "@/assets/icons/Calendar.png";
import LightningIcon from "@/assets/icons/Lightning.png";
import BookIcon from "@/assets/icons/Book.png";
import CupIcon from "@/assets/icons/Cup.png";
import CodeIcon from "@/assets/icons/Code.png";

export const Achievements =()=>{
const dp=useDispatch()
const {currentUser}=useSelector((state)=>state.auth)
const fetchUser=async()=>{
    return await dp(getCurrentUser())
}
useEffect(()=>{
    console.log(currentUser)
    console.log(fetchUser().then(data=>
        dp(getAwardsByUsers(data.id))
        
        ))
},[dp])
    return <div className="flex w-3/4 flex-col gap-[28px] pb-[48px]">
        <AchievmentItem imgSRC={TargetIcon} desc="Решите 5 кейсов без ошибок" title="Снайпер" currentValue={2} targetValue={5}/>
        <AchievmentItem imgSRC={CalendarIcon} desc="Решите кейсы в субботу и воскресенье" title="Воин выходного дня" currentValue={0} targetValue={2}/>
        <AchievmentItem imgSRC={LightningIcon} desc="Решайте кейсы неделю без перерыва" title="Энтузиаст" currentValue={7} targetValue={7}/>
        <AchievmentItem imgSRC={BookIcon} desc="Заработайте 1000 pts, решая кейсы" title="Мудрец" currentValue={550} targetValue={1000}/>
        <AchievmentItem imgSRC={CupIcon} desc="Войдите в топ 10 еженедельного рейтинга" title="Лидер" currentValue={0} targetValue={10}/>
        <AchievmentItem imgSRC={CodeIcon} desc="Решите в общем 100 кейсов" title="Решала" currentValue={0} targetValue={100}/>
    </div>
}
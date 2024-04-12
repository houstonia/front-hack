import {Button} from "@/components/ui/button.jsx";
import {cn} from "@/lib/utils.js";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { editUserMe, editUserMePassword } from "../../../api/auth-api";
import { setToaster } from "../../../redux/features/toaster/toaster";
import X from "@/assets/icons/x.svg";
import WhiteCheck from "@/assets/icons/white-check.svg";

const ContentSelector = ({templates,userInfo,password}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const {editError,editSuccess,editLoading}=useSelector((state)=>state.auth)

    const dp=useDispatch()
    const handleClick=()=>{
        console.log(password)
        console.log(Object.keys(password)[0]=="oldPassword")
        if(Object.keys([password])[0]=="oldPassword"){
            dp(editUserMePassword(password))
        }else
        {
            dp(editUserMe(userInfo))
        }
        if(editSuccess){
            dp(setToaster(true))
            toast("Успешно", { icon: <img className="w-[22px] h-[22px" src={WhiteCheck} alt="Иконка" /> })
        }
        if(editError){
            toast("Ошибка при изменении данных", { icon: <img className="w-[22px] h-[22px" src={X} alt="Иконка" /> })
            dp(setToaster(false))
        }
    }
    return (
        <div>
            {templates.map((item, i) => (
                <Button key={i} onClick={() => setSelectedTab(i)} className={cn(selectedTab === i ? 'bg-[#9A66F4] hover:bg-[#9A66F4]' : 'bg-[#171B26] hover:bg-[#202329]', 'rounded-none text-white w-[113px]', (i === 0) && 'rounded-l-md', (i === templates.length-1) && 'rounded-r-md')}>
                    {item.title}
                </Button>
            ))}
            <div className='h-fit bg-[#171B26] p-8 mt-7'>
                <div className='w-full rounded-xl'>
                    {templates[selectedTab].template}
                </div>
                <div className='mt-7 flex justify-end gap-4'>
                    <Button className='text-white bg-[#222631] hover:bg-[#202329]'>Отменить данные</Button>
                    <Button bg={`${editLoading?'disabled':''}`} disabled={editLoading}  className='text-white bg-[#9A66F4] hover:bg-[#F15048]' onClick={handleClick}>Изменить данные</Button>
                </div>
            </div>
        </div>
    );
};

export default ContentSelector;
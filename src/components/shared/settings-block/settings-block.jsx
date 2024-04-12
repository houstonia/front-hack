
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContentSelector from "../content-selector/content-selector";

export const InputBlock = ({ title, className, type = 'input', setter, value, placeholder, name, ...props }) => {
    return (
        <div className={className}>
            <div className="text-white text-sm font-semibold font-['Raleway'] leading-tight">{title}</div>
            <div className='mt-1.5 text-sm'>
                <Input className='w-full bg-[#222631] h-[52px]' name={name} onChange={setter} value={value} type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}

export const ProfileTab = ({ user,setUser }) => {

    return (
        <div className='flex gap-x-6'>
            <div className='w-[50%]'>
                <InputBlock title='Никнейм' placeholder='Введите никнейм' name="username" setter={setUser} value={user?.username} className='mb-5' />
                <InputBlock title='Имя' placeholder='Введите имя' name="name" setter={setUser} value={user?.name}/>
            </div>
            <div className='w-[50%]'>
                <InputBlock title='Фамилия' placeholder='Введите фамилию' name="surname" setter={setUser} value={user?.surname} className='mb-5' />
                <InputBlock title='Страна' placeholder='Выберите страну' name="country" setter={setUser} value={user?.country} />
            </div>
        </div>
    )
}

export const EmailTab = ({user,setUser}) => {
    return (
        <div className='flex gap-x-6'>
            <div className='w-[50%]'>
                <InputBlock title='Старый email' placeholder='Введите старый email' />
            </div>
            <div className='w-[50%]'>
                <InputBlock title='Новый email' placeholder='Введите новый email' name="email" setter={setUser} value={user?.email}/>
            </div>
        </div>
    )
}

export const PasswordTab = ({value,setValue}) => {
    return (
        <div className='flex gap-x-6'>
            <div className='w-[50%]'>
                <InputBlock title='Старый пароль' placeholder='Введите старый пароль'  name="oldPassword" setter={setValue} value={value?.oldPassword}/>
            </div>
            <div className='w-[50%]'>
                <InputBlock title='Новый пароль' placeholder='Введите новый пароль'  name="newPassword" setter={setValue} value={value?.newPassword}/>
            </div>

        </div>
    )
}

export const SettingsBlock = () => {
    const { currentUser } = useSelector((state) => state.auth)
    const [userInfo, setUserInfo] = useState({})
    const [password,setNewPassword]=useState({oldPassword:"",newPassword:""})
    const [edited,setEdited]=useState({})
  
    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
        setEdited({...edited,  [e.target.name]: e.target.value})
    }
    const handleChangePassword = (e) => {
        setNewPassword({ ...password, [e.target.name]: e.target.value })
    }

    useEffect(() => { 
        if(currentUser) setUserInfo(currentUser)
        console.log("ds",currentUser)
     }, [currentUser])

    const templates = [
        {
            title: "Профиль",
            template: <ProfileTab user={userInfo} setUser={handleChange} />
        },
        {
            title: "Почта",
            template: <EmailTab user={userInfo} setUser={handleChange}/>
        },
        {
            title: "Пароль",
            template: <PasswordTab value={password} setValue={handleChangePassword}/>    
        }
    ]

    return (
        <div>
            <ContentSelector templates={templates} userInfo={edited} password={password}/>
        </div>
    );
};

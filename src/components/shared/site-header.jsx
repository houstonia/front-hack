import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import LogIn from "@/assets/icons/log-in.svg";
import UserLk from "@/assets/icons/user.svg";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import { Link } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlices";
import { useDispatch } from "react-redux";
import NotificationIcon from "@/assets/icons/Notifications.svg";
import Logo from "@/assets/infotecsLogo.svg";


function Header({currentUser}) {
    console.log(LogIn)
    const dp=useDispatch()
    return <header className="bg-[#171B26] px-[350px] py-5 flex justify-between">
        <img src={Logo} />
        <div className="flex flex-row gap-3">
            <button>
                <img className="rounded-lg" src={NotificationIcon}></img>
            </button>
            <Popover>
                <PopoverTrigger asChild>
                    <button className="text-white text-semibold"> Андрей{currentUser?.email}</button>
                </PopoverTrigger>
                <PopoverContent className="w-[216px] p-0">
                    <div className="h-[104px] bg-[#333846] rounded-[10px] flex-col justify-start items-start inline-flex">
                        <div className="w-[216px] h-[52px] py-0.5 flex-col justify-center items-start gap-2.5 flex">
                            <Link to="lk">
                            <div className=" px-4 py-3 rounded-lg justify-start items-center gap-2.5 inline-flex"
                            //  onClick={() => toast("Вход выполнен успешно", {icon:<img className="w-[22px] h-[22px" src={WhiteCheck} alt="Иконка" />})}
                             >
                                <img className="w-[24px] h-[24px] px-[3px] py-0.5 justify-center items-center flex" src={UserLk} />
                                <div className="text-white text-base font-semibold font-['Raleway'] leading-tight">Аккаунт</div>
                            </div>
                            </Link>
                        </div>
                        <div className="w-[216px] h-[52px] py-0.5 flex-col justify-center items-start gap-2.5 flex">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className=" px-4 py-3 rounded-lg justify-start items-center gap-2.5 inline-flex">
                                        <img className="w-[24px] h-[24px] p-0.5 justify-center items-center flex" src={LogIn} />
                                        <div className="text-white text-base font-semibold font-['Raleway'] leading-tight">Выход</div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="w-[450px] h-[124px] px-6 pt-[18px] pb-6 rounded-[10px] flex-col justify-start items-start gap-2.5 inline-flex">
                                    <div className="self-stretch h-[82px] flex-col justify-start items-end gap-4 flex">
                                        <div className="self-stretch text-white text-base font-semibold font-['Raleway'] leading-normal">Вы уверены, что хотите выйти из аккаунта?</div>
                                        <div className="justify-end items-start gap-3.5 inline-flex">
                                            <DialogClose>
                                                <Button bg="background3">Нет</Button>
                                            </DialogClose>
                                            <DialogClose>
                                                <Button bg="red" onClick={()=>{dp(logout())}}>Да</Button>
                                            </DialogClose>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    </header>
}

export default Header
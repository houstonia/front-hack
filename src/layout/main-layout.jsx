import React, { useState } from "react";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import Header from "../components/shared/site-header";
import { Toaster } from "@/components/ui/sonner"
import { useSelector } from "react-redux";
import Map from "../assets/icons/map.svg"
import Trophy from "../assets/icons/trophy.svg";
import News from "../assets/icons/news.svg"
import Message from "../assets/icons/message.svg"
import Electronic from "../assets/icons/electronic.svg"
import {Hint} from "@/components/shared/hint/hint.jsx";
import PlatformTour from "@/components/shared/platformTour/platformTour.jsx";

const menuItems = [
    {
        href: 'bot',
        title: 'Электроник',
        icon: () => <img src={Electronic} alt="" srcset="" />
    },
    {
        href: 'tasks',
        title: 'ТГ чаты',
        icon: () => <img src={Message} alt="" srcset="" />
    },
    {
        href: 'map',
        title: 'Карты',
        icon: () => < img src={Map} alt="" />
    },
    {
        href: 'project-hub',
        title: 'Проектный хаб',
        icon: () => <img src={News} />
    },
    {
        href: 'achievments',
        title: 'Ачивки',
        icon: () => <img src={Trophy} alt="" srcset="" />
    },

];

export const MainLayout = () => {
    const location = useLocation();
    const { currentUser } = useSelector(((state) => state.auth));

    const getCurrentPath = (path) =>  setCurrentPath(path)

    return (
        <div className='bg-[#0D111D] min-h-screen relative'>
            <Header currentUser={currentUser} />
            <div className="flex px-[310px] pt-[2rem] gap-3">
                <aside className='w-full md:w-[260px] relative flex-col justify-start items-start inline-flex'>
                    <nav className="ml-3">
                        <ul className="w-[100%] h-[196px] mt-[15px] flex-col items-center">
                            {menuItems.map((item, index) => (
                                <NavLink to={item.href} key={index}>
                                    <li key={item.title} className={`${location.pathname === '/' + item.href ? 'bg-[#171B26]' : ''} w-[236px] h-9 px-[1.7rem] py-[1.5rem] mb-[10px] rounded-md justify-start items-center gap-1.5 inline-flex`} onClick={() => getCurrentPath(item.href)}>
                                        <div className="h-5 pr-[2.50px]  justify-center items-center flex">
                                            {item.icon()}
                                        </div>
                                        <p className={`text-white text-[16px] font-semibold font-['Raleway'] leading-5`}>{item.title}</p>
                                    </li>
                                </NavLink>
                            ))
                            }
                        </ul>
                    </nav>
                </aside>
                <main className="flex-1 w-[100%] pt-5">
                    <Outlet />
                </main>
                <Toaster color={(true ? "#67C23A" : "#F15048")} />
                <div className='h-5 w-5 bg-red absolute'></div>
            </div>
        </div>
    );
}
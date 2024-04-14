import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import SearchIcon from '@/assets/search-icon.svg';
import {Input} from "@/components/ui/input.jsx";

const BottomPanel = ({...props}) => {
    return (
        <div {...props}>
            <div className='text-white text-sm'>Филиал</div>
            <div className='mt-2'>
                <Select defaultValue='light'>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выбрите филиал"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Пенза, ПГУ</SelectItem>
                        <SelectItem value="dark">Каменка, ПГУ</SelectItem>
                        <SelectItem value="system">Лопатино, ПГУ</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='mt-2 flex'>
                <Input variant='bot' placeholder='Поиск'/>
                <div className='h-[52px] w-[52px] bg-[#222631] flex items-center justify-center rounded-r-md' >
                    <img src={SearchIcon} alt="search icon"/>
                </div>
            </div>
        </div>
    );
};

export default BottomPanel;
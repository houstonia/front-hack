import React from 'react';
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

const SidePanel = ({fetchPoints}) => {
    return (
        <div>
            <div className='text-white text-sm mb-2'>Пункт отправления</div>
            <Input placeholder='Введите пункт отправления'/>
            <div className='h-[40px] w-[2px] bg-[#D9D9D9]' style={{margin: '20px auto'}}></div>
            <div className='text-white text-sm mb-2'>Пункт прибытия</div>
            <Input placeholder='Введите пункт прибытия'/>
            <Button className='mt-5 w-full h-[52px]' bg='purple' onClick={fetchPoints}>Построить маршрут</Button>
        </div>
    );
};

export default SidePanel;
import BotImage from "@/assets/bot-image.svg";

import React, {useEffect, useRef, useState} from 'react';
import MessageItem from '@/pages/bot/message-item.jsx';
import { Input } from '@/components/ui/input.jsx';

import SendIcon from '@/assets/send-icon.svg';
import axios from "axios";

const BotPage = () => {

  const [content, setContent] = useState([]);

  const content_block = useRef(null)

  useEffect(() => {
    axios.get('https://gagarinhack.duckdns.org/api/chat_bot/history').then(res => setContent(res.data.history))
  }, [])

  useEffect(() => {
    content_block.current.scrollTo(0, content_block.current.scrollHeight)
  })

  return (
    <div className='flex'>
      <div className="w-[75%]">
        <div className='h-[calc(100vh-300px)] overflow-auto' ref={content_block}>
          <img src={BotImage} alt="Bot" style={{ margin: '-58px auto' }} />
          {content.map(message => (
            <MessageItem key={message.id} message={message} />
          ))}
          {/*<MessageItem my={true} />*/}
        </div>
        <div className='flex items-center mt-4'>
          <Input placeholder='Введите сообщение' variant="bot"/>
          <div className="bg-[#222631] h-[52px] w-[52px] flex items-center justify-center cursor-pointer rounded-r-md">
            <img src={SendIcon} />
          </div>
        </div>
      </div>
      <div className="w-[25%] ml-4 text-[#818888]">
        <div>Функционал и команды</div>
        <div>-Ответы на вопросы</div>
        <div>-Построение</div>
        <div>2D маршрута</div>
      </div>
    </div>
  );
};

export default BotPage;
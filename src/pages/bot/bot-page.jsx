import BotImage from "@/assets/bot-image.svg";

import React, {useEffect, useRef, useState} from 'react';
import MessageItem from '@/pages/bot/message-item.jsx';
import { Input } from '@/components/ui/input.jsx';

import SendIcon from '@/assets/send-icon.svg';

const content = [
  {
    id: '345435454',
    text: ['Привет, меня зовут Электроник!', 'Я твой личный помощник на всем твоем пути обучения.'],
    meta: {
      text: ['Давай познакомимся поближе?'],
      type: 'button',
      content: 'Давай!',
      action: 'test'
    },
    my: false
  },
  {
    id: '3454354',
    text: ['Давай!'],
    my: true
  },
  {
    id: '345435454',
    text: ['Какие учебные предметы или предметы из какой области тебе интересны?'],
    my: false
  },
  {
    id: '3454354',
    text: ['Мне нравится математика, да и вообще все физико-математические науки'],
    my: true
  },
  {
    id: '345435454',
    text: ['Чем увлекаешьсы в свободное время?'],
    my: false
  },
  {
    id: '3454354',
    text: ['Я люблю музыку, а также читаю в свободное время'],
    my: true
  },
  {
    id: '3454354',
    text: ['Отлично! Давай я тебе расскажу про свой функционал.', 'Помощь по открытым вопросам<br/>' +
    '1. Предложение чатов с ребятами с общими интерсами<br/>' +
    '2. Предложение дополнительной теории<br/>' +
    '3. Незаурядное общение<br/>' +
    '4. Построение дороги до аудитории\n' +
    '5. Могу скинуть карту заведения и даже дать погулять по универу в  формате онлайн, 360 карты<br/>' +
    '6. Погу рассказать про универ, наведи камеру на QR'],
    my: false
  },
  {
    id: '3454354',
    text: ['Как мне пройти в 403 аудиторию?'],
    my: true
  },
  {
    id: '345435454',
    text: ['Да, конечно, держи!'],
    meta: {
      text: ['7а-403 находится здесь!', '7й корпус, 5-й этаж, от лестницы направо'],
      type: 'button',
      content: 'Перейти в карты',
      action: 'test'
    },
    my: false
  },
  {
    id: '3454354',
    text: ['Я обожаю The Doors и Дениса Майданова'],
    my: true
  },
  {
    id: '345435454',
    text: ['Держи чатик ребят со схожими интересами!'],
    meta: {
      type: 'topics',
      topics: [
        {
          id: 'evervrvrec',
          title: 'Музыка',
          content: 'Собраны люди любящие музыку!',
          tgUrl: 'https://t.me/25gg1_2',
        },
        {
          id: 'evervrvrergec',
          title: 'Гитаристы',
          content: 'Привет, мы гитаристы, входи в наш телеграм канал!',
          tgUrl: 'https://t.me/25gg1_2',
        },
      ],
      action: 'test'
    },
    my: false
  },
  {
    id: '3454354',
    text: ['Что едят черепахи?'],
    my: true
  },
  {
    id: '345435454',
    text: ['Черепашки едят маленькие кусочки яблок, слив, персиков, абрикосов'],
    my: false
  }
]

const BotPage = () => {

  const content_block = useRef(null)

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
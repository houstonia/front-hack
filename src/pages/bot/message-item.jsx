import React from 'react';
import BotAvatar from '@/assets/bot-avatar.png';
import UserAvatar from '@/assets/user-avatar.png';
import CheckIcon from '@/assets/check-icon.svg';
import {cn} from '@/lib/utils.js';
import {Button} from '@/components/ui/button.jsx';
import {TopicCard} from "@/components/shared/topic-card.jsx";
import {useNavigate} from "react-router-dom";
import {act} from "react-dom/test-utils";

const MetaParser = ({meta}) => {
    const navigate = useNavigate();
    const {type, data} = meta;

    const applyAction = (action) => {
        switch (action) {
            case 'buildRoute':
                navigate('/map', {state: {coordinates: data.coordinates, from: data.from, to: data.to}});
                break;
        }
    }

    switch (type) {
        case 'button':
            const {text, content, action} = meta;
            return (
                <ItemWrapper>
                    {text ? text.map(item => (
                        <div>{item}</div>
                    )) : null}
                    <div>
                        <Button className='mt-2 w-full' onClick={() => applyAction(action)}>{content}</Button>
                    </div>
                </ItemWrapper>
            )
        case 'topics':
            const {topics} = meta;
            return (
                <div>
                    {topics.map(topic => <div className='mb-1'><TopicCard key={topic.id} title={topic.title}
                                                                          content={topic.content}
                                                                          telegram_name={topic.tgUrl}/></div>)}
                </div>
            )
    }

}

const ItemWrapper = ({className, my, children}) => {
    return (
        <div
            className={cn('w-fit h-fit text-white relative mb-1 max-w-[350px]', my ? 'bg-[#A779F6]' : 'bg-[#202232]', className)}
            style={{padding: '4px 12px 4px 12px', borderRadius: my ? '16px 16px 8px 16px' : '16px 16px 16px 8px'}}>
            <div className={cn('mr-[55px] text-base', my ? 'mr-[55px]' : 'mr-[40px]')}>{children}</div>
            <div className="absolute right-3 bottom-1 flex items-center">
                {my && <img src={CheckIcon} alt="Check"/>}
                <div className={cn('text-xs', my ? 'text-white' : 'text-[#818888]')}>14:35</div>
            </div>
        </div>
    );
}

const TextItem = ({my, className, text}) => {
    return (
        <ItemWrapper my={my} className={className}>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
            <MetaParser meta={my}/>
        </ItemWrapper>
    );
};

const MessageItem = ({message}) => {

    const {id, text, meta, my} = message;

    return (
        <div className={cn('flex items-end gap-x-2 mb-1', my && 'flex-row-reverse')}>
            <div>
                <img src={my ? UserAvatar : BotAvatar} alt="bot-avatar"/>
            </div>
            <div>
                {text.map(item => <TextItem key={id} my={my} text={item} className="mb-1"/>)}
                {meta ? <MetaParser meta={meta}/> : null}
            </div>
        </div>
    );
};

export default MessageItem;
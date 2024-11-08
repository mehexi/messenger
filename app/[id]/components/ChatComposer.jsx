import { SendIcon } from 'lucide-react';
import React from 'react';

const ChatComposer = () => {
    return (
        <div className='bg-secondary flex px-6 py-3 gap-3'>
            <input type="text" className='w-full rounded-full h-10 outline-none focus:outline-none focus:bg-primary/20 px-6'/>
            <button className='aspect-square bg-primary w-10 rounded-full flex justify-center items-center hover:bg-secondary-foreground hover:text-primary duration-300'>
                <SendIcon size={18}/>
            </button>
        </div>
    );
};

export default ChatComposer;
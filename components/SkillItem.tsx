import React from 'react';
import { ReactNode } from 'react';

interface SkillItemProps{
    icon: ReactNode;
    text: string;

}

export default function SkillItem({icon, text}: SkillItemProps){
    return(
        <>
        <div className='inline-block px-1 py-1'>
            <div className='flex rounded-full bg-zinc-900 px-2'>
                {icon}
                <span className='pl-1'>
                    {text}
                </span>

            </div>

        </div>

        </>


    )


}
import React from 'react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface TechnicalItemProps{
    icon: ReactNode;
    text: string;

}

export default function TechItem({icon, text}: TechnicalItemProps){
    return(
        <>
        <div className='inline-block px-1 py-1'>
            <div className='flex rounded-full bg-zinc-900 px-1 text-xs'>
                {icon}
                <span className='pl-1'>
                    {text}
                </span>

            </div>

        </div>

        </>


    )


}
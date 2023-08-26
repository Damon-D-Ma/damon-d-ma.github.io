import React from 'react';

interface SkillData {
  icon: React.ReactNode;
  skill: string;
  level: number;
}

export default function SkillBar({ icon, skill, level }: SkillData) {
  return (
    <div className='px-1 py-1 w-full'>
      <div className='flex rounded-full bg-zinc-900 p-1 text-xs'>
        <div className='flex w-48 inline-block'>
          {icon}
          <span className='pl-1'>{skill}</span>
        </div>
        <div className='bg-zinc-900 h-4 w-full rounded-full px-1'>
          <div
            className='bg-[#0078d7] h-full transition-all rounded-full'
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
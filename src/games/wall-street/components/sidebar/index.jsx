import { ChartBarSquareIcon, ChatBubbleLeftRightIcon, PresentationChartBarIcon, StarIcon, TrophyIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='h-full w-full bg-slate-950  flex flex-col gap-6 justify-start py-4 shadow-md'>
      <button className='flex flex-col justify-center items-center hover:bg-slate-800'>
        <ChartBarSquareIcon className='h-8 w-8' />
        <p className='text-sm'>Análise de <br/>  Mercado</p>
      </button>
      <button className='flex flex-col justify-center items-center hover:bg-slate-800'>
        <PresentationChartBarIcon className='h-8 w-8' />
        <p className='text-sm'>Histórico</p>
      </button>
      <button className='flex flex-col justify-center items-center hover:bg-slate-800'>
        <ChatBubbleLeftRightIcon className='h-8 w-8' />
        <p className='text-sm'>Chat</p>
      </button>
      <button className='flex flex-col justify-center items-center hover:bg-slate-800'>
        <TrophyIcon className='h-8 w-8' />
        <p className='text-sm'>Torneios</p>
      </button>
      <button className='flex flex-col justify-center items-center hover:bg-slate-800'>
        <StarIcon className='h-8 w-8' />
        <p className='text-sm'>Ranking</p>
      </button>
    </div>
  )
}

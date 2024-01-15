import React, { useState } from 'react'
import About from '@/core/components/modal-provably-fair'
import { ChatBubbleLeftRightIcon, ExclamationTriangleIcon, MusicalNoteIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'

export default function Footer({ }) {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    /* sm:w-[33%] xl:w-[25%] w-[100%] */
    <div
      className={`fixed z-[999] bottom-0 left-0 flex  bg-black h-10 border-[1px] border-gray-700 relative w-full`}
    >
      <div className='flex items-center gap-2 bg-orange-600 my-2 mx-2 px-2 rounded-md text-white cursor-pointer'>
        <ChatBubbleLeftRightIcon className='h-5 w-5' />
        <p className='text-sm'>Chat</p>
      </div>

      <div className='flex item-center m-2 gap-4'>
        <div  className='flex items-center gap-2 bg-yellow-300  px-2 rounded-md text-black cursor-pointer'>
        <p className='text-sm'>Como Jogar?</p>

        </div>
        <div  className='flex items-center gap-2 bg-yellow-300  px-2 rounded-md text-black cursor-pointer'>
          <ExclamationTriangleIcon className='h-5 w-5' />
        <p className='text-sm'>Suporte ao jogador Hypetech</p>
        </div>
      </div>

      <div className="flex items-center flex-grow">
        <p className="pl-2 text-white  text-[12px] md:text-[7px] lg:text-[12px] ">
          This game is{' '}
        </p>
        <i className="fi fi-rs-shield-check pl-1 text-green-500 items-center">
          <img
            src="../images/icons/SecureLogo.svg"
            className="h-4 mx-auto"
          />
        </i>
        <button
          onClick={() => {
            setShowModal(!showModal)
          }}
          className="pl-1 text-[12px] md:text-[7px] lg:text-[12px] text-white items-center"
        >
          <span className="">Provably Fair</span>
        </button>
      </div>
      <div className="flex items-center pr-3">
        <p className="text-white text-[12px] md:text-[7px] lg:text-[12px]">
          powered by
        </p>
        <p className="pl-1  text-[12px] md:text-[7px] lg:text-[9px] text-white underline">
          <a
            href="https://hypetech.games/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HYPETECH
          </a>
        </p>
      </div>{' '}
      <MusicalNoteIcon className='h-5 w-5 m-2' title='desativar musica'/>
      <SpeakerWaveIcon className='h-5 w-5 m-2' title=''/>
      {/* <SpeakerXMarkIcon  className='h-5 w-5'/> */}
      <About show={showModal} toggle={setShowModal} />
    </div>
  )
}

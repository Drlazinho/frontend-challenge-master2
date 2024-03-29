import React, { useState, useEffect, useRef, useContext } from 'react'
import { WallStreetGameContext } from '@/core/providers/games/wall-street-game.provider'

type Props = {
  game: string
  balance: string
  executeAction: Function
  openChatHandler?: Function
  name: string
}

import If from '../conditions/if'

import {
  QuestionMarkCircleIcon,
  Bars3Icon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline'
import { getGameLogo, getHowToPlay } from '@/core/helpers'
import GameLimitsModal from '@/core/components/shared/modals/wall-street/game-limits'
import { Chat } from '../chat'

export default function Navbar({
  game,
  balance,
  executeAction,
}: Props) {
  const HowToPlay = getHowToPlay(game)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showChat, setShowChat] = useState(false)
  const [showGameLimitsModal, setShowGameLimitsModal] =
    useState<boolean>(false)

  const [animationEnabled, setAnimationEnabled] = useState(true)
  const [musicEnabled, setMusicEnabled] = useState(true)
  const [audioContextAllowed, setAudioContextAllowed] = useState(true)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const {soundEnabled, 
        setSoundEnabled, 
        soundClick, 
        playerName
      } = useContext(WallStreetGameContext)

  const handleSoundEnabled = (event) => {
    const { checked } = event.target

    executeAction(checked ? 'soundsOn' : 'soundsOff')
    setSoundEnabled(checked)
  }

  const handleMusicEnabled = (event) => {
    const { checked } = event.target

    executeAction(checked ? 'musicOn' : 'musicOff')
    setMusicEnabled(checked)
  }

  const handleAnimationEnabled = (event) => {
    const { checked } = event.target
    executeAction(checked ? 'animationOff' : 'animationOn')
    setAnimationEnabled(checked)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    soundClick()
  }

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false)
    }
    setAudioContextAllowed(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    setTimeout(() => {
      if (window.AudioContext == false) {
        setAudioContextAllowed(false)
      }
    }, 2000)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const isMobileDevice =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  return (
    <div className="top-0 z-50 ">
      <div className="h-auto mx-auto px-5 py-2 flex items-center w-full justify-end soft-border-bottom">
        <h1 className="self-starth-auto">{getGameLogo(game)}</h1>

        <div className="flex items-center ml-auto gap-2">
          {/* {audioContextAllowed && !isMobileDevice && (
            <div className="flex justify-center sm:px-9 text-red-500 font-bold text-sm sm:text-xl">
              Clique no jogo para ativar os sons
            </div>
          )} */}
          {/* <button
            onClick={() => {
              setShowModal(!showModal)
              soundClick()
            }}
            className="btn py-0 px-0 flex items-center text-gray-500 bg-transparent border-none gap-1 rounded-md capitalize text-sm font-normal"
          > */}
            <QuestionMarkCircleIcon             onClick={() => {
              setShowModal(!showModal)
              soundClick()
            }} className="h-8 w-8 text-gray-500 hover:text-gray-100 cursor-pointer" />
            {/* <span className="hidden sm:inline">Como Jogar?</span> */}
          {/* </button> */}

          <div className="flex gap-4 p-1 justify-center align-middle">
                  <img
                    src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                    className="h-8 invert rounded-full"
                  />
                  <div className="">
                    <p className="font-bold text-xs text-white">
                      {/* Nome do Jogador */}
                      {playerName}
                    </p>
                    <p className="text-xs flex">
                      <span className="block mt-1 mr-2 rounded-full bg-green-600 h-2 w-2"></span>{' '}
                      <span className="opacity-50">Online agora</span>
                    </p>
                  </div>
                </div>

          <div className="text-md text-center font-bold mr-1">
            <p className="text-green-500">R$ {balance}</p>
            {/* <p className="text-green-500">Name: {playerName}</p> */}
            <p className="text-green-500 text-[12px] mt-[-7px]">
              SALDO REAL
            </p>
          </div>
        </div>
      </div>

      <HowToPlay show={showModal} toggle={setShowModal} />

      <GameLimitsModal
        show={showGameLimitsModal}
        toggle={setShowGameLimitsModal}
      />

      { <Chat show={showChat} /> }
     {/*  {audioContextAllowed && isMobileDevice && (

        <div className="flex justify-center sm:px-9 text-red-500 font-bold text-sm sm:text-xl">
          Clique no jogo para ativar os sons
        </div>
      )}  */}
    </div>
  )
}

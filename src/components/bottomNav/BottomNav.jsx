import React from 'react'
import './bottomNav.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

const BottomNav = () => {
  const [activeBottomNav, setActiveBottomNav] = useState('#')
  return (
    <div className='page-container'>
      <div className='BottomNav'>
        <a
          href='#'
          onClick={() => {
            setActiveBottomNav('#')
          }}
          className={activeBottomNav === '#' ? 'active' : ''}
        >
          <IoIosArrowDown />
        </a>
        <a
          href='#about'
          onClick={() => {
            setActiveBottomNav('#about')
          }}
          className={activeBottomNav === '#about' ? 'active' : ''}
        >
          <IoIosArrowDown />
        </a>
        <a
          href='#experience'
          onClick={() => {
            setActiveBottomNav('#experience')
          }}
          className={
            activeBottomNav === '#experience' ? 'active' : ''
          }
        >
          <IoIosArrowDown />
        </a>
        <a
          href='#services'
          onClick={() => {
            setActiveBottomNav('#services')
          }}
          className={activeBottomNav === '#services' ? 'active' : ''}
        >
          <IoIosArrowDown />
        </a>
      </div>
    </div>
  )
}

export default BottomNav

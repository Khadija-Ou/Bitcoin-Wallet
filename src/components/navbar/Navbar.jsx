import './navbar.scss'
import { useState } from 'react'
import { BiDotsVerticalRounded, BiBookContent } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { LiaUploadSolid } from 'react-icons/lia'
import { IoRemoveCircleOutline } from 'react-icons/io5'

function NavBar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div>
      {/* Overlay for mobile menu */}
      {click && <div className='overlay' onClick={handleClick}></div>}
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-arrow'>
            <IoIosArrowBack />
          </div>

          <a href='/' className='nav-logo'>
            Bitcoin Wallet
          </a>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={handleClick}>
                Edit
                <AiOutlineCreditCard />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={handleClick}>
                Courier info
                <BiBookContent />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={handleClick}>
                Share
                <LiaUploadSolid />
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/'
                className='nav-links remove'
                onClick={handleClick}
              >
                Remove
                <IoRemoveCircleOutline />
              </a>
            </li>
          </ul>

          <div className='nav-icon' onClick={handleClick}>
            <BiDotsVerticalRounded />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

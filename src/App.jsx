import React from 'react'
import Featured from './components/featured/Featured'
import Tabs from './components/tabs/Tabs'
import TradeButtons from './components/tradeButtons/TradeButtons'
import BottomNav from './components/bottomNav/BottomNav'
import NavBar from './components/navbar/Navbar'
import './index.scss'

const App = () => {
  return (
    <>
      <NavBar />
      <Featured />
      <Tabs />
      <TradeButtons />
      <BottomNav />
    </>
  )
}

export default App

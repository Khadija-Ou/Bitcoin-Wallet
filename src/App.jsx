import React from 'react'
import Nav from './components/navbar/Navbar'
import Featured from './components/featured/Featured'
import Tabs from './components/tabs/Tabs'
import TradeButtons from './components/tradeButtons/TradeButtons'

const App = () => {
  return (
    <>
      <Nav />
      <Featured />
      <Tabs />
      <TradeButtons />
    </>
  )
}

export default App

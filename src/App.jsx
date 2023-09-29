import React from 'react'
import Nav from './components/navbar/Navbar'
import Featured from './components/featured/Featured'
import Tabs from './components/tabs/Tabs'
import Chart from './components/chart/Chart'

const App = () => {
  return (
    <>
      <Nav />
      <Featured />
      <Tabs />
      {/* <Chart title='Last 6 Months (Revenue)' aspect={3 / 1} /> */}
    </>
  )
}

export default App

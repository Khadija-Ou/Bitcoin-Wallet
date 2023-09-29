import React from 'react'
import './tradeButtons.scss'
import Bitcoin from '../../assets/bitcoin.png'

const BuySellButtons = () => {
  return (
    <div className='page-container'>
      <div className='trade-buttons'>
        <div className='buy-button'>
          <img src={Bitcoin} alt='' className='coin-image' />
          Buy BTC
        </div>
        <div className='sell-button'>
          <img src={Bitcoin} alt='' className='coin-image' />
          Sell BTC
        </div>
      </div>
    </div>
  )
}

export default BuySellButtons

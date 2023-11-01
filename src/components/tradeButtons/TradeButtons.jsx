import React from "react";
import "./tradeButtons.scss";
import DollarPink from "../../assets/dollarPink.png";
import DollarBlue from "../../assets/dollarBlue.png";

const BuySellButtons = () => {
  return (
    <div className="page-container">
      <div className="trade-buttons">
        <div className="buy-button">
          <img src={DollarBlue} alt="" className="coin-image" />
          Buy BTC
        </div>
        <div className="sell-button">
          <img src={DollarPink} alt="" className="coin-image" />
          Sell BTC
        </div>
      </div>
    </div>
  );
};

export default BuySellButtons;

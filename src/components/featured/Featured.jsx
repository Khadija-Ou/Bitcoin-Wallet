import "./featured.scss";
import { useState } from "react";
import Bitcoin from "../../assets/bitcoin.png";
import { IoIosArrowDown } from "react-icons/io";

const Featured = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="page-container">
      <div className="featured">
        <div className="top">
          <div className="top-content">
            <div className="top-coin">
              <img src={Bitcoin} alt="" className="coin-image" />
              <h2>Bitcoin</h2>
            </div>
            <p>BTC</p>
          </div>

          <span className="btc-price">3.529020 BTC</span>

          <div className="top-info">
            <span className="price">$19.153 USD</span>
            <span className="change">- 2.23%</span>
          </div>
          <div className="top-icon" onClick={toggle}>
            <IoIosArrowDown color="#aeb8c4" fontSize="1.5em" />
          </div>
        </div>

        {show && (
          <div className="bottom">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="bottom-btns">
              <button className="primary-button">Buy</button>
              <button className="secondary-button">Sell</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Featured;

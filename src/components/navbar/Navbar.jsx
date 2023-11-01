import "./navbar.scss";
import { useState } from "react";
import { BiDotsVerticalRounded, BiBookContent } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineCreditCard } from "react-icons/ai";
import { LiaUploadSolid } from "react-icons/lia";
import { IoRemoveCircleOutline } from "react-icons/io5";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      {/* Overlay for mobile menu */}
      {click && <div className="overlay" onClick={handleClick}></div>}
      <nav className="navbar ">
        <div className="nav-container page-container">
          <div className="nav-icon">
            <IoIosArrowBack />
          </div>

          <a href="/" className="nav-logo">
            Bitcoin Wallet
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={handleClick}>
                Edit
                <AiOutlineCreditCard className="nav-link-icon" />
              </a>
              <hr
                style={{
                  background: "#aeb8c4",
                  height: "1px",
                  width: "calc(100% - 1rem)",
                  marginLeft: "auto",
                }}
              />{" "}
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={handleClick}>
                Courier info
                <BiBookContent className="nav-link-icon" />
              </a>
              <hr
                style={{
                  background: "#aeb8c4",
                  height: "1px",
                  width: "calc(100% - 1rem)",
                  marginLeft: "auto",
                }}
              />
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={handleClick}>
                Share
                <LiaUploadSolid className="nav-link-icon" />
              </a>
              <hr
                style={{
                  background: "#aeb8c4",
                  height: "1px",
                  width: "calc(100% - 1rem)",
                  marginLeft: "auto",
                }}
              />
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links remove" onClick={handleClick}>
                Remove
                <IoRemoveCircleOutline className="nav-link-icon" />
              </a>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <BiDotsVerticalRounded />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

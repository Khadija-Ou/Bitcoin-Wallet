import React from "react";
import "./bottomNav.scss";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { GiMultiDirections } from "react-icons/gi";
import { RiBook2Fill } from "react-icons/ri";
import { useState } from "react";

const BottomNav = () => {
  const [activeBottomNav, setActiveBottomNav] = useState("#");
  return (
    <div className="BottomNav">
      <div className="BottomNav-container page-container">
        <a
          href="#"
          onClick={() => {
            setActiveBottomNav("#");
          }}
          className={activeBottomNav === "#" ? "active" : ""}
        >
          <div className="icon">
            <RiBook2Fill size={28} />
          </div>
        </a>

        <a
          href="#location"
          onClick={() => {
            setActiveBottomNav("#location");
          }}
          className={activeBottomNav === "#location" ? "active" : ""}
        >
          <div className="icon">
            <GiMultiDirections size={28} />
          </div>
        </a>

        <a
          href="#notification"
          onClick={() => {
            setActiveBottomNav("#notification");
          }}
          className={activeBottomNav === "#notification" ? "active" : ""}
        >
          <div className="icon">
            <IoNotifications size={28} />
          </div>
        </a>

        <a
          href="#settings"
          onClick={() => {
            setActiveBottomNav("#settings");
          }}
          className={activeBottomNav === "#settings" ? "active" : ""}
        >
          <div className="icon">
            <IoSettingsSharp size={28} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;

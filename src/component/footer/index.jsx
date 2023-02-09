import React from "react";
import "./style.css";
import iconLA2 from "../../accsets/img/iconLA2.png";
import iconMenu from "../../accsets/img/iconMenu.png";
import iconClear from "../../accsets/img/iconClear.png";

const Footer = () => {
  const handleClea = () => {
    const imgClone = document.getElementById("img");
    imgClone.remove();
  };
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-score">0/580</div>
        <div className="footer-right">
          <div className="footer-login">sign in</div>
          <div>
            <div className="footer-img">
              <img alt="" src={iconLA2} />
            </div>
            <div className="footer-img">
              <img alt="" src={iconClear} onClick={handleClea} />
            </div>
            <div className="footer-img">
              <img alt="" src={iconMenu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

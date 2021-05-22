import React from "react";

const Header = () => {
  return (
    <nav className="header-bar" uk-navbar="true">
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="">
            <a href="#">ผู้ใช้งาน</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

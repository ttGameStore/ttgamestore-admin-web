import React from "react";

const Header = () => {
  return (
    <div className="header-bar">
      <div>
        <span>TT Gamestore</span>
      </div>
      <div>
        {/* <div className="header-search"> */}
        <a href="" uk-icon="icon: search"></a>
        {/* </div> */}
        <div className="uk-inline">
          <a className="uk-margin-small-left" href="" uk-icon="icon: user"></a>
          <div uk-dropdown="mode: click">
            <div>
              <span>จัดการบัญชี</span>
            </div>
            <div>
              <span>ออกจากระบบ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

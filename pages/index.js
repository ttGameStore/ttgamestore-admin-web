import React from "react";
import Link from "next/link";
import Style from "../styles/modules/Login.module.css";

const LoginScreen = () => {
  return (
    <div
      className={`uk-card uk-card-body ${Style.login_background}`}
      uk-height-viewport="expand: true"
    >
      <div className={`uk-position-center ${Style.login_container}`}>
        <div className="uk-flex uk-flex-center">
          <div className="uk-margin uk-width-1-2">
            <div className="uk-inline uk-width-1-1">
              <div className="uk-form-icon" uk-icon="icon: user" />
              <input
                className="uk-input"
                type="text"
                placeholder="ชื่อผู้ใช้งาน"
              />
            </div>
          </div>
        </div>

        <div className="uk-flex uk-flex-center">
          <div className="uk-margin uk-width-1-2">
            <div className="uk-inline uk-width-1-1">
              <div className="uk-form-icon" uk-icon="icon: lock" />
              <input
                className="uk-input"
                type="password"
                placeholder="รหัสผ่าน"
              />
            </div>
          </div>
        </div>
        <div className="uk-flex uk-flex-center">
          <Link href="/manageCard/manageCardListScreen" as="/card-list">
            <button className="uk-button uk-button-default uk-width-1-2">
              เข้าสู่ระบบ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

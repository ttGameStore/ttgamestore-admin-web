import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import RouteLink from "../utils/RouteLink.util";

const Narbar = (props) => {
  const router = useRouter();
  const [pathname] = useState(router.pathname);
  console.log("router ---> ", router.pathname);
  return (
    <div uk-grid="true">
      <div className="uk-width-1-5">
        <div className="navber uk-card uk-card-body uk-width-1-1">
          <ul className="uk-nav-default uk-nav-parent-icon" uk-nav="true">
            <li>
              <a href="#">กระดาน</a>
            </li>
            <li className="uk-parent">
              <a href="#">จัดการ</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">ผู้ใช้งาน</a>
                </li>
                <li>
                  <a href="#">แบรนเนอร์</a>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">บัตร</a>
              <ul className="uk-nav-sub">
                <li>
                  <Link href={RouteLink.route_card_list} as="/card-list">
                    <a>จัดการบัตร</a>
                  </Link>
                </li>
                <li>
                  <a href="/card-list">ประเภทบัตร</a>
                </li>
                <li>
                  <Link href={RouteLink.route_card_add} as="/card-add">
                    <a>เพิ่มบัตร</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="uk-parent">
              <a href="#">รายการ</a>
              <ul className="uk-nav-sub">
                <li>
                  <a href="#">ยืนยันเติมเงิน</a>
                </li>
                <li>
                  <a href="#">ประวัติเติมเงิน</a>
                </li>
                <li>
                  <a href="#">กำไร</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="uk-width-expand uk-padding">
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Narbar;

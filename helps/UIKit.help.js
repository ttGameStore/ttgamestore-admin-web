import React, { useEffect, useState } from "react";

const UIKit = (props) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const uikit = require("uikit");
      const icons = require("uikit/dist/js/uikit-icons.min");
      uikit.use(icons);
      // setReady(true);
    }
  });

  return <div>{props.children}</div>;
};

export default UIKit;

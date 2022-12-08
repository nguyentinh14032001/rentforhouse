import React, { useEffect, useRef, useState } from "react";

import Sidebar from "./Sidebar";

const BackgroundLayout = ({ children }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [bgLayoutPosition, setBgLayoutPosition] = useState(0);
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setWindowY(window.scrollY);
      if (bgLayoutPosition.height - windowY < 500) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowY]);

  const ref = useRef(null);

  useEffect(() => {
    setBgLayoutPosition(ref.current.getBoundingClientRect());
  }, [windowY]);

  // console.log("bgLayoutPosition", bgLayoutPosition.height);
  // console.log("isFixed", isFixed);
  // console.log("window.scrollY", window.scrollY);

  return (
    <div className="grid grid-cols-12 " ref={ref}>
      <Sidebar isFixed={isFixed} bgLayoutPosition={bgLayoutPosition} />

      <div className="col-span-10 col-start-3 mr-4 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;

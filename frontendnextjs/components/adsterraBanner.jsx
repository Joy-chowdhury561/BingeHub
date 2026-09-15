"use client";

import { useEffect, useRef } from "react";

const AdsterraBanner = ({ adKey, width, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    window.atOptions = {
      key: adKey,
      format: "iframe",
      height,
      width,
      params: {},
    };

    const script = document.createElement("script");
    script.src = `https://heavinessslight.com/${adKey}/invoke.js`;
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [adKey, height, width]);

  return (
    <div className="my-5 w-screen overflow-x-clip">
      <div className="flex w-[clamp(22rem,70vw,150rem)] h-[clamp(100px,30vw,100rem)] justify-center">
        <div
          ref={containerRef}
          className="flex shrink-0 items-center justify-center"
          style={{ width, height }}
        />
      </div>
    </div>
  );
};

export default AdsterraBanner;

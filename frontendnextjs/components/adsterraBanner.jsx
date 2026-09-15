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
    <div className="mt-24 w-screen overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="flex min-w-full justify-center">
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

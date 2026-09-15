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
    <div className="my-5 flex w-screen justify-center overflow-x-clip">
      <div
        ref={containerRef}
        className="flex w-[80vw] max-w-full items-center justify-center overflow-hidden [&_iframe]:h-full! [&_iframe]:w-full!"
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    </div>
  );
};

export default AdsterraBanner;

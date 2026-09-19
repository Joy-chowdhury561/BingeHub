"use client";
import { useEffect, useRef } from "react";
const AdBanner2 = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner) {
      return undefined;
    }

    window.atOptions = {
      key: "ebae2c63ea2908f485ac32272918b382",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.src ="https://heavinessslight.com/ebae2c63ea2908f485ac32272918b382/invoke.js";
    script.async = true;
    banner.appendChild(script);

    return () => {
      script.remove();
      delete window.atOptions;
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="flex min-h-15 mt-5  w-[clamp(300px,100vw,200rem)] justify-center overflow-hidden"
    />
  );
};

export default AdBanner2;

"use client";

import { useEffect, useRef } from "react";

const AdBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner) {
      return undefined;
    }

    window.atOptions = {
      key: "771fa7ec71dfcac85fc54951d92b999f",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://heavinessslight.com/771fa7ec71dfcac85fc54951d92b999f/invoke.js";
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
      className="flex min-h-[60px] w-full justify-center overflow-hidden"
    />
  );
};

export default AdBanner;

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
      key: "bfd7ed8a777e41c04c34c3fe4ddf9232",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.src ="https://heavinessslight.com/bfd7ed8a777e41c04c34c3fe4ddf9232/invoke.js";
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
      className="flex min-h-20 my-5 w-[clamp(300px,100vw,200rem)] justify-center overflow-hidden"
    />
  );
};

export default AdBanner;

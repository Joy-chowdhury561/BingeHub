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
      key: "76784826ebe9e444a9a574bc87ce5ab6",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://heavinessslight.com/76784826ebe9e444a9a574bc87ce5ab6/invoke.js";
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
      className="flex min-h-20 my-5 w-[clamp(300px,80vw,100rem)] justify-center overflow-hidden"
    />
  );
};

export default AdBanner;

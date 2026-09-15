import Script from "next/script";

const AdBanner = () => {
  return (
    <div className="flex min-h-[60px] w-full justify-center overflow-hidden">
      <Script id="adsterra-banner-options" strategy="afterInteractive">
        {`var atOptions = {
  key: "771fa7ec71dfcac85fc54951d92b999f",
  format: "iframe",
  height: 60,
  width: 468,
  params: {}
};`}
      </Script>
      <Script
        src="https://heavinessslight.com/771fa7ec71dfcac85fc54951d92b999f/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default AdBanner;


import Script from "next/script";

const AdBanner2 = () => {
  return (
    <div className="mt-24 w-screen overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="flex min-w-full justify-center">
        <div className="flex h-[90px] w-[728px] shrink-0 items-center justify-center">
        <Script id="adsterra-banner-config" strategy="afterInteractive">
          {`
            atOptions = {
    'key' : '7f4960df108f2488aaac442d3528e9d2',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
          `}
        </Script>
        <Script
          src="https://heavinessslight.com/7f4960df108f2488aaac442d3528e9d2/invoke.js"
          strategy="afterInteractive"
        />
        </div>
      </div>
    </div>
  );
};

export default AdBanner2;

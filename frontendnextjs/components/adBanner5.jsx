
import Script from "next/script";
const AdBanner5 = () => {
  return (
    <div className="mt-24 w-screen overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="flex min-w-full justify-center">
        <div className="flex h-62.5 w-75 shrink-0 items-center justify-center">
        <Script id="adsterra-banner-config" strategy="afterInteractive">
          {`
            atOptions = {
    'key' : 'e6780f6c1b16d27ac0fa57081a0ca8ee',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
          `}
        </Script>
        <Script
          src="https://heavinessslight.com/e6780f6c1b16d27ac0fa57081a0ca8ee/invoke.js"
          strategy="afterInteractive"
        />
        </div>
      </div>
    </div>
  );
};

export default AdBanner5;

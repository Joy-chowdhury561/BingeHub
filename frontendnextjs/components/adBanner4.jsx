
import Script from "next/script";
const AdBanner4 = () => {
  return (
    <div className="mt-24 w-screen overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="flex min-w-full justify-center">
        <div className="flex h-[300px] w-[160px] shrink-0 items-center justify-center">
        <Script id="adsterra-banner-config" strategy="afterInteractive">
          {`
            atOptions = {
    'key' : '7065697c571bcf80fcab92487cb3ff1f',
    'format' : 'iframe',
    'height' : 300,
    'width' : 160,
    'params' : {}
  };
          `}
        </Script>
        <Script
          src="https://heavinessslight.com/7065697c571bcf80fcab92487cb3ff1f/invoke.js"
          strategy="afterInteractive"
        />
        </div>
      </div>
    </div>
  );
};

export default AdBanner4;


import Script from "next/script";
const AdBanner3 = () => {
  return (
    <div className="mt-24 w-screen overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="flex min-w-full justify-center">
        <div className="flex h-[600px] w-[160px] shrink-0 items-center justify-center">
        <Script id="adsterra-banner-config" strategy="afterInteractive">
          {`
            atOptions = {
    'key' : '21f144301e35bda1635be61ac70ac850',
    'format' : 'iframe',
    'height' : 600,
    'width' : 160,
    'params' : {}
  };
          `}
        </Script>
        <Script
          src="https://heavinessslight.com/21f144301e35bda1635be61ac70ac850/invoke.js"
          strategy="afterInteractive"
        />
        </div>
      </div>
    </div>
  );
};

export default AdBanner3;

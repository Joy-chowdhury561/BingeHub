import Script from "next/script";

const AdBanner = () => {
  return (
    <div className="mt-24 w-full overflow-x-auto bg-black py-2 sm:mt-0">
      <div className="mx-auto flex h-15 w-117 items-center justify-center">
        <Script id="adsterra-banner-config" strategy="afterInteractive">
          {`
            atOptions = {
              'key': '771fa7ec71dfcac85fc54951d92b999f',
              'format': 'iframe',
              'height': 60,
              'width': 468,
              'params': {}
            };
          `}
        </Script>
        <Script
          src="https://heavinessslight.com/771fa7ec71dfcac85fc54951d92b999f/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
};

export default AdBanner;

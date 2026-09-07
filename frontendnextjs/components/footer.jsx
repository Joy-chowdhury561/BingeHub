

const Footer = ({isPending}) => {
  return (
    <>
      {!isPending && (
        <footer className="mt-8 relative bottom-13 sm:mb-0 w-full flex justify-center items-center p-5">
          <div className="text-white flex gap-0.5 text-center  text-[clamp(0.7rem,0.8vw,2rem)]">
            <p className="text-red-500">Disclaimer:</p> All videos and pictures
            on BingeHub are from the Internet, and their copyrights belong to
            the original creators. We only provide webpage services and do not
            store, record, or upload any content.
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

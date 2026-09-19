const Footer = ({ isPending }) => {
  return (
    <>
      {!isPending && (
        <footer className=" mt-8 relative bottom-13 sm:bottom-0 bg-[#161616]   w-full flex border-t border-gray-700  items-center p-5">
          <p className="text-gray-300 flex gap-0.5  text-[12px]">
            Disclaimer: All videos and pictures on BingeHub are from the
            Internet, and their copyrights belong to the original creators. We
            only provide webpage services and do not store, record, or upload
            any content.
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;

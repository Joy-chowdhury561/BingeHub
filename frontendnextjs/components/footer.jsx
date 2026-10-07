import { FaRegCopyright } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = ({ isPending }) => {
  return (
    <>
      {!isPending && (
        <footer className=" mt-15 relative flex flex-col bottom-13 sm:bottom-0 bg-[#161616]   w-full border-t border-gray-700  justify-center px-5 pt-3 pb-10 gap-3">
          <p className="text-gray-300 flex gap-0.5  text-[12px]">
            Disclaimer: All videos and pictures on BingeHub are from the
            Internet, and their copyrights belong to the original creators. We
            only provide webpage services and do not store, record, or upload
            any content.
          </p>
          <p className="flex items-center text-[12px] text-white gap-2">
            <FaRegCopyright className="text-white" />
            <a href="https://www.linkedin.com/in/joy-chowdhury6969">
              Joy chowdhury 2026
            </a>
          </p>
          <p className="flex items-center text-[12px] gap-1 text-white">
            Made with <FaHeart className="text-red-500" />
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;

import { React, useState } from "react";
import { Link } from "react-scroll";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";
import { contactEmail } from "../constants/links";
import { externalLinks } from "../constants/links";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const ytLink = externalLinks.find((link) => link.id === "yt");
  const instaLink = externalLinks.find((link) => link.id === "insta");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error during copying", err);
    }
  };

  return (
    <footer
      id="footer"
      className="relative flex flex-col items-center gap-5 p-6 w-full mt-3"
    >
      <div
        aria-hidden="true"
        className="w-[95%] border-t-[1px] border-tertiary mb-12"
      ></div>
      <div className="flex gap-4 justify-center items-center w-full">
        <div title="YouTube" aria-hidden="true" className="icon-circle-box">
          <a href={ytLink.href} target="_blank" rel="noopener noreferrer">
            <SiYoutube className="w-6 h-6"></SiYoutube>
          </a>
        </div>
        <div title="Instagram" aria-hidden="true" className="icon-circle-box">
          <a href={instaLink.href} target="_blank" rel="noopener noreferrer">
            <SiInstagram className="w-6 h-6"></SiInstagram>
          </a>
        </div>
        <div
          title="Kopiuj email"
          aria-hidden="true"
          className="relative group icon-circle-box"
        >
          <span className="absolute top-[-50%] -translate-y-1/2 text-light text-sm">
            {copied ? <>Skopiowano&nbsp;email</> : ""}
          </span>
          <MdMail onClick={copyToClipboard} className="w-6 h-6 cursor-pointer"></MdMail>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
      <div className="absolute bottom-0 right-3 sm:bottom-5 sm:right-8">
        <Link to="hero">
          <RiArrowUpSLine
            className="w-10 h-10 sm:w-14 sm:h-14 text-tertiary dark:text-light hover:-translate-y-1 
          transition-all duration-300 cursor-pointer"
          ></RiArrowUpSLine>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { FC, useState } from "react";

const ContactModal: FC<{
  isModalOpen: boolean;
  setIsModalOpen: any;
}> = ({ isModalOpen, setIsModalOpen }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsModalOpen(false), setIsCopied(false);
    }, 1000);
  };

  return (
    <div
      id="contact-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={
        isModalOpen
          ? "bg-gray-900/20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full"
          : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full"
      }
    >
      <div className="relative p-4 w-full max-w-xs max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center flex flex-col">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              proje@ramazanerikli.com
            </h3>
            <a href="/" className="link-gmail py-2.5 rounded-full">
              open in Gmail
            </a>
            <button
              onClick={handleCopy}
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none rounded-full hover:bg-gray-100"
            >
              {isCopied ? "copied!" : "copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

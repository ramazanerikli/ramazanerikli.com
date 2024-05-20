"use client";
import React, { useState } from "react";
import Link from "next/link";
import ContactModal from "./contact-modal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <footer className="flex flex-col justify-center items-start mx-auto w-full mb-8 border-t pt-4 border-gray-200">
        <div className="grid grid-cols-3 gap-4 md:gap-16 mt-8 w-full">
          <div className="flex flex-col">
            <h4 className="font-bold mb-2 text-slate-600">General</h4>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Blog
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Portfolio
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold mb-2 text-slate-600">Links</h4>
            <a
              className="text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ramazanerikli"
            >
              Github
            </a>
            <a
              className="hidden text-gray-500 hover:text-gray-600 transition"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ramazanerikli_"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => setIsModalOpen(true)}
              data-modal-toggle="contactModal"
              className="inter-medium flex items-center gap-2 hover:-translate-y-2 transition-all duration-500 text-center transition-all duration-500  text-white shadow-2xl shadow-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-3 lg:px-5 py-2.5 lg:mr-2 mb-2 focus:outline-none"
            >
              <span>Contact</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden lg:block"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }


  useEffect(() => {
    setIsMenuOpen(false)
  },[pathname])

  return (
    <div className={isMenuOpen ? "mobile-menu open lg:hidden" : "mobile-menu close lg:hidden"}>
      <button className="toggle-btn" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <svg viewBox="0 0 16 15" fill="#000" xmlns="http://www.w3.org/2000/svg"><rect y="2" width="16" height="1"></rect><rect y="7" width="16" height="1"></rect><rect y="12" width="8" height="1"></rect><title>Menu</title></svg>
        ) : (
          <svg viewBox="0 0 14 14" fill="#000" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><path d="M13.25 0.75L1.25 12.75" stroke="currentColor"></path><path d="M1.25 0.75L13.25 12.75" stroke="currentColor"></path><title>Close</title></svg>
        )}
      </button>



        <ul className="lg:hidden md:hidden menu flex flex-col absolute w-full overflow-y-auto z-30">
          <button type="button" className="hidden toggle-btn" onClick={toggleMenu}>
            <svg viewBox="0 0 14 14" fill="#000" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><path d="M13.25 0.75L1.25 12.75" stroke="currentColor"></path><path d="M1.25 0.75L13.25 12.75" stroke="currentColor"></path><title>Close</title></svg>
          </button>
          <li className="has-space border-b-2 border-gray-200">
            <a href="/" className="flex w-auto pb-4 pt-4 text-xl ">
              Home
            </a>
          </li>
          <li className="border-b-2 border-gray-200">
            <a href="/projects" className="flex w-auto pb-4 pt-4 text-xl">
              Projects
            </a>
          </li>
          <li className="border-b-2 border-gray-200">
            <a href="/blog" className="flex w-auto pb-4 pt-4 text-xl">
              Blog
            </a>
          </li>
        </ul>
    </div>
  );
}

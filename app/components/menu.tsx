"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function reset() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={isMenuOpen ? "mobile-menu open lg:hidden" : "mobile-menu close lg:hidden"}>
      <button className="toggle-btn" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
        {!isMenuOpen && (
          <svg viewBox="0 0 16 15" fill="#000" xmlns="http://www.w3.org/2000/svg"><rect y="2" width="16" height="1"></rect><rect y="7" width="16" height="1"></rect><rect y="12" width="8" height="1"></rect><title>Menu</title></svg>
        )}
      </button>

        <ul className="lg:hidden md:hidden menu flex flex-col absolute bg-white w-full overflow-y-auto z-30 h-full min-h-screen max-h-screen">
          <button type="button" className="toggle-btn" onClick={toggleMenu}>
            <svg viewBox="0 0 14 14" fill="#000" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round"><path d="M13.25 0.75L1.25 12.75" stroke="currentColor"></path><path d="M1.25 0.75L13.25 12.75" stroke="currentColor"></path><title>Close</title></svg>
          </button>
          <li className="has-space">
            <Link href="/" className="flex w-auto pb-4 pt-4">
              Home
            </Link>
          </li>
          <li className="">
            <Link href="/blog" className="flex w-auto pb-4 pt-4">
              Blog
            </Link>
          </li>
          <li className="">
            <Link href="/projects" className="flex w-auto pb-4 pt-4">
              Projects
            </Link>
          </li>
          <li className="menu-mail-container">
            <a className="font-bold menu-mail" href="mailto:hello@ramazanerikli.com">hello@ramazanerikli.com</a>
          </li>
        </ul>
    </div>
  );
}

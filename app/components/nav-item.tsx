"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem: FC<{
  href: string;
  text: string;
}> = ({ href, text }) => {
  const pathname = usePathname() as any;
  const isActive =
    (href === "/" && pathname === "/") ||
    (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={
        isActive 
        ? 
        "hidden md:inline-block py-2 transition-all inter-medium text-gray-800 border-b-2 border-black"
        :
        "hidden md:inline-block py-2 transition-all inter-medium text-gray-800 border-b-2 border-gray-200"
      }
    >
      <span className="text-lg">{text}</span>
    </Link>
  );
};

export default NavItem;

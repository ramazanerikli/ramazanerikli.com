"use client";
import { FC } from "react";
import { useRouter, usePathname } from "next/navigation";
import NextLink from "next/link";
import cn from "classnames";

const NavItem: FC<{
  href: string;
  text: string;
}> = ({ href, text }) => {
  const router = useRouter();
  const pathname = usePathname() as any;
  const isActive =
    (href === "/" && pathname === "/") ||
    (href !== "/" && pathname.startsWith(href));
  return (
    <NextLink
      href={href}
      className={cn(
        isActive ? "inter-medium text-gray-800" : "inter-medium",
        "hidden md:inline-block py-2 px-3 rounded-md hover:bg-gray-100 transition-all"
      )}
      style={{ display: text === "Contact" ? "none" : "" }}
    >
      <span className={text === "Contact" ? "hidden text-center transition-all duration-500  text-white shadow-2xl font-bold shadow-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-md px-5 py-2.5 mr-2 mb-2 focus:outline-none" : ""}>{text}</span>
    </NextLink>
  );
};

export default NavItem;

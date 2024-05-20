"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import cn from "classnames";

const NavItem: FC<{
  href: string;
  text: string;
}> = ({ href, text }) => {
  const pathname = usePathname() as any;
  const isActive =
    (href === "/" && pathname === "/") ||
    (href !== "/" && pathname.startsWith(href));
  return (
    <a
      href={href}
      className={cn(
        isActive ? "inter-medium text-gray-800" : "inter-medium",
        "hidden md:inline-block py-2 px-3 rounded-md hover:bg-gray-100 transition-all"
      )}
    >
      <span>{text}</span>
    </a>
  );
};

export default NavItem;

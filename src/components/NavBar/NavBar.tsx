"use client";
import { FC, useState } from "react";
import { NavLink, Route, routePaths, routes } from "@core";
import { Logo } from "@components";
import Link from "next/link";
import HamburgerIcon from "@heroicons/react/24/solid/Bars3Icon";
import { usePathname } from "next/navigation";

const NavItem: FC<NavLink> = ({ to, name }) => {
  const pathName = usePathname();

  return (
    <Link href={to}>
      <h2
        className={`hover:text-glow-blue ${
          to === pathName ? "text-glow-blue" : ""
        }`}
      >
        {name}
      </h2>
    </Link>
  );
};

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="p-8 bg-secondary-gray flex justify-between items-center">
      <Link href={routePaths[Route.HOME]}>
        <Logo />
      </Link>
      <div>
        <div className="sm:hidden">
          <HamburgerIcon />
        </div>
        <div className="flex gap-4">
          {routes.map((route) => (
            <NavItem key={route.name} {...route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

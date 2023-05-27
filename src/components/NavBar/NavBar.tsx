"use client";
import { FC, useCallback, useState } from "react";
import { NavLink, Route, routePaths, routes } from "@core";
import { Logo } from "@components";
import Link from "next/link";
import HamburgerIcon from "@heroicons/react/24/solid/Bars3Icon";
import CloseIcon from "@heroicons/react/24/solid/XMarkIcon";
import { usePathname } from "next/navigation";

interface NavItemProps extends NavLink {
  onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({ to, name, onClick }) => {
  const pathName = usePathname();

  return (
    <Link href={to}>
      <h2
        className={`text-lg hover:text-glow-blue ${
          to === pathName ? "text-glow-blue" : ""
        }`}
        onClick={onClick}
      >
        {name}
      </h2>
    </Link>
  );
};

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onMobileMenuClick = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen, setMenuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <div className="p-8 bg-secondary-gray flex justify-between items-center">
        <Link href={routePaths[Route.HOME]}>
          <Logo />
        </Link>
        <div>
          {!menuOpen && (
            <HamburgerIcon
              className="sm:hidden h-12 w-12 cursor-pointer hover:text-glow-blue"
              onClick={onMobileMenuClick}
            />
          )}
          {menuOpen && (
            <CloseIcon
              className="sm:hidden h-12 w-12 cursor-pointer hover:text-glow-blue"
              onClick={onMobileMenuClick}
            />
          )}
          <div className="gap-4 hidden sm:flex">
            {routes.map((route) => (
              <NavItem key={route.name} {...route} />
            ))}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden flex gap-4 bg-secondary-gray flex-col items-center justify-center p-8 absolute w-full">
          {routes.map((route) => (
            <NavItem key={route.name} {...route} onClick={closeMenu} />
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;

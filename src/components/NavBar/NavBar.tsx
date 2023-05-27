import { FC } from "react";
import { NavLink, routes } from "@core";
import { Logo } from "@components";
import Link from "next/link";

const NavItem: FC<NavLink> = ({ to, name }) => {
  return (
    <Link href={to}>
      <h2>{name}</h2>
    </Link>
  );
};

export const NavBar = () => {
  return (
    <div className="p-8 bg-secondary-gray flex justify-between items-center">
      <Logo />
      <div className="flex gap-4">
        {routes.map((route) => (
          <NavItem {...route} />
        ))}
      </div>
    </div>
  );
};

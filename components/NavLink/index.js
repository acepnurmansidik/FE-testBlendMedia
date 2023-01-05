import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  return (
    <Link
      className={`nav-link  ${router.pathname === href ? "active" : ""}`}
      aria-current="page"
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;

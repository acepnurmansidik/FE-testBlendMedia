/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Button from "../Button";

const Navbar = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    return setToken(Cookies.get("token"));
  });

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <nav className="container navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link href={"/"} className="navbar-brand">
          <div className="brand-name">Tokosidia</div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className={`navbar-nav ${
              router.pathname !== "/signin" ? "mx-auto" : "ms-auto"
            } my-3 my-lg-0`}
          ></div>

          {router.pathname !== "/signin" && (
            <>
              {token ? (
                <div className="navbar-nav ms-auto">
                  <div className="nav-item dropdown d-flex flex-column flex-lg-row align-items-lg-center authenticated gap-3">
                    <span className="text-light d-none d-lg-block">Hello,</span>

                    <Link
                      className="nav-link dropdown-toggle mx-0 d-none d-lg-block"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/avatar.png" alt="semina" width="60" />
                    </Link>

                    <Link
                      className="d-block d-lg-none dropdown-toggle text-light text-decoration-none"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <img src="/images/avatar.png" alt="semina" width="60" />
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href={"/dashboard"} className="dropdown-item">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href={"/setting"} className="dropdown-item">
                          Settings
                        </Link>
                      </li>
                      <li onClick={() => handleLogout()}>
                        <Link className="dropdown-item" href={"/"}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>

                    {/* <div className="collapse" id="collapseExample">
                      <ul className="list-group">
                        <li>
                          <Link className="list-group-item" href="/">
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link className="list-group-item" href="/">
                            Settings
                          </Link>
                        </li>
                        <li>
                          <Link className="list-group-item" href="/">
                            Rewards
                          </Link>
                        </li>
                        <li onClick={() => handleLogout()}>
                          <Link className="list-group-item"></Link>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              ) : (
                <div className="d-grid">
                  <Link href={"/signin"}>
                    <div className="btn-navy">Sign In</div>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

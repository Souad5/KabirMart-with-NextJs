"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Brand */}
      <div className="flex-1">
        <Link className="text-xl font-bold text-primary" href="/">
          KabirMart
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link className="btn btn-ghost" href="/productslist">
              Products
            </Link>
          </li>
          <li>
            <Link className="btn btn-ghost" href="/dashboard/add-product">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary text-white" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md md:hidden z-50">
          <ul className="menu flex flex-col gap-2 p-4">
            <li>
              <Link className="btn btn-ghost w-full" href="/productslist">
                Products
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost w-full" href="/dashboard/add-product">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary text-white w-full" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

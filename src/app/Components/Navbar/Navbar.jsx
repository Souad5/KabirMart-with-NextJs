"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme on html
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") html.classList.add("dark");
    else html.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 shadow-sm px-4 md:px-8 relative">
      <div className="flex-1">
        <Link className="text-xl font-bold text-primary dark:text-white" href="/">
          KabirMart
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-2">
        <Link className="btn btn-ghost dark:text-white" href="/">
          Home</Link>
        <Link className="btn btn-ghost dark:text-white" href="/productslist">
          Products
        </Link>
        <Link className="btn btn-ghost dark:text-white" href="/dashboard/add-product">
          Dashboard
        </Link>

        {/* Theme Toggle */}
        <button className="btn btn-ghost ml-2" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {session ? (
          <button
            onClick={() => signOut()}
            className="btn btn-primary ml-2 text-white"
          >
            Logout
          </button>
        ) : (
          <Link className="btn btn-primary ml-2 text-white" href="/login">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="btn btn-ghost">
          ☰
        </button>
      </div>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 dark:bg-gray-900 shadow-md md:hidden z-50">
          <ul className="menu flex flex-col gap-2 p-4">
            <Link className="btn btn-ghost w-full dark:text-white" href="/productslist">
              Products
            </Link>
            <Link className="btn btn-ghost w-full dark:text-white" href="/dashboard/add-product">
              Dashboard
            </Link>

            {session ? (
              <button
                onClick={() => signOut()}
                className="btn btn-primary w-full text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                className="btn btn-primary w-full text-white"
                href="/login"
              >
                Login
              </Link>
            )}

            <button
              className="btn btn-ghost w-full"
              onClick={toggleTheme}
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

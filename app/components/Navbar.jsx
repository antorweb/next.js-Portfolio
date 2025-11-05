// 

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ icons for menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [myhtml, setMyhtml] = useState(null);

  useEffect(() => {
    setMyhtml(document.querySelector("html"));
  }, []);

  const handelMode = () => {
    if (myhtml) {
      myhtml.classList.toggle("dark");
      console.log(myhtml);
    }
  };

  return (
    <>
      <nav id="navbar" className="dark:bg-main dark:text-white fixed w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* ---------- Logo ---------- */}
            <Link href={"/"} className="text-[40px] font-bold">
              remeni
            </Link>

            {/* ---------- Desktop Menu ---------- */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#contact"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="flex items-center gap-6">
                <button onClick={handelMode}>
                  <MdLightMode className="text-[30px]" />
                </button>
                <button className="w-[136px] text-[16px] font-medium font-main text-[#F9FAFB] bg-main rounded-2xl py-1.5 dark:bg-white dark:text-main">
                  Download CV
                </button>
              </div>
            </div>

            {/* ---------- Mobile Menu Button ---------- */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={handelMode}>
                <MdLightMode className="text-[26px]" />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[28px]"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* ---------- Mobile Menu Dropdown ---------- */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center gap-6 pb-6 animate-slideDown bg-white dark:bg-main">
              <ul className="flex flex-col items-center gap-4">
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                    onClick={() => setMenuOpen(false)}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                    onClick={() => setMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#contact"}
                    className="text-[16px] dark:text-white font-medium font-main text-main"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <button className="w-[136px] text-[16px] font-medium font-main text-[#F9FAFB] bg-main rounded-2xl py-1.5 dark:bg-white dark:text-main">
                Download CV
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

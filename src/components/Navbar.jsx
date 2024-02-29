import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// assets
import Close from "@/assets/close.svg";
import Hamburger from "@/assets/hamburger-menu.svg";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-black py-3 text-white fixed top-0 left-0 md:px-12 right-0">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl items-center md:flex md:px-8">
        <div className="text-white flex items-center justify-between font-bold text-3xl">
          <Link href="/">Logo</Link>
          <button className="md:hidden" onClick={() => setNavbar(!navbar)}>
            {navbar ? <Image src={Close} /> : <Image src={Hamburger} />}
          </button>
        </div>
        <div
          className={` flex-1 justify-self-center  ${
            navbar ? "block" : "hidden md:block"
          }`}
        >
            <div className="flex  md:space-x-8 md:justify-end space-y-8 md:space-y-0 h-screen md:h-auto flex-col md:flex-row font-semibold text-lg">

          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blogs</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

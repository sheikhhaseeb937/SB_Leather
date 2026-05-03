import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from 'react-router-dom';
import LogoImg from "../../assets/logoimg/LogoSB.jpeg"
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* LEFT: Hamburger */}
            <div className="flex items-center gap-4">
              <button className="md:hidden" onClick={() => setOpen(true)}>
                <MenuIcon />
              </button>

              {/* Logo */}
              <div className="text-xl font-semibold">
                <img className="w-[80px] h-16" src={LogoImg} alt="" />
              </div>
            </div>

            {/* CENTER: Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
           
<Link to="/NewArrivals" className="relative cursor-pointer group font-semibold tracking-wide">
  NEW ARRIVALS

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</Link>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("men")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Trigger */}
                <div className="flex items-center gap-1 cursor-pointer py-2 font-semibold tracking-wide">
                  <a className="relative cursor-pointer group">
                    MENS
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <ExpandMoreIcon
                    fontSize="small"
                    className={`transition-transform duration-300 ${
                      activeDropdown === "men" ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                {activeDropdown === "men" && (
                  <div className="absolute left-0 top-full w-56 bg-white shadow-lg border rounded-md z-50">
                    <a className="block px-4 py-2 hover:bg-gray-100">Wallet</a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Card Holder
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Document Case
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">Bag</a>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("women")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Trigger */}
                <div className="flex items-center gap-1 cursor-pointer py-2 ">
                <a className="relative cursor-pointer group font-semibold tracking-wide">
  WOMEN

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</a>
                  <ExpandMoreIcon
                    fontSize="small"
                    className={`transition-transform duration-300 ${
                      activeDropdown === "women" ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                {activeDropdown === "women" && (
                  <div className="absolute left-0 top-full w-56 bg-white shadow-lg border rounded-md z-50">
                    <a className="block px-4 py-2 hover:bg-gray-100">Wallet</a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Card Holder
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Document Case
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">Bag</a>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("travel")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Trigger */}
                <div className="flex items-center gap-1 cursor-pointer py-2">
                <a className="relative cursor-pointer group font-semibold tracking-wide">
  TRAVEL

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</a>
                  <ExpandMoreIcon
                    fontSize="small"
                    className={`transition-transform duration-300 ${
                      activeDropdown === "travel" ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown */}
                {activeDropdown === "travel" && (
                  <div className="absolute left-0 top-full w-56 bg-white shadow-lg border rounded-md z-50">
                    <a className="block px-4 py-2 hover:bg-gray-100">Wallet</a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Card Holder
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">
                      Document Case
                    </a>
                    <a className="block px-4 py-2 hover:bg-gray-100">Bag</a>
                  </div>
                )}
              </div>

          <a className="relative cursor-pointer group font-semibold tracking-wide">
  GIFT SET

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
</a>

              <a className="relative cursor-pointer group font-semibold tracking-wide">CORPORATE
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a className="relative cursor-pointer group font-semibold tracking-wide">CUSTOMIZE
                           <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* RIGHT: Icons */}
            <div className="flex items-center gap-4">
              <SearchIcon className="cursor-pointer" />
              <Person2OutlinedIcon className="cursor-pointer" />

              {/* Wishlist */}
              <div className="relative">
                <FavoriteBorderIcon className="cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>

              {/* Cart */}
              <div className="relative">
                <ShoppingBagOutlinedIcon className="cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="p-4 space-y-4 text-sm font-semibold tracking-wide">
          <Link to="/NewArrivals">NEW ARRIVALS</Link>
          <div>
            <p
              onClick={() =>
                setMobileDropdown(mobileDropdown === "men" ? null : "men")
              }
              className="cursor-pointer flex justify-between items-center"
            >
              MEN{" "}
              <span className="font-bold">
                {mobileDropdown === "men" ? "−" : "+"}
              </span>
            </p>

            {mobileDropdown === "men" && (
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <p>Wallet</p>
                <p>Card Holder</p>
                <p>Document Case</p>
                <p>Bag</p>
              </div>
            )}
          </div>
          <div>
            <p
              onClick={() =>
                setMobileDropdown(mobileDropdown === "women" ? null : "women")
              }
              className="cursor-pointer flex justify-between items-center "
            >
              WOMEN{" "}
              <span className="font-bold">
                {mobileDropdown === "men" ? "−" : "+"}
              </span>
            </p>

            {mobileDropdown === "women" && (
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <p>Handbags</p>
                <p>Clutches</p>
                <p>Wallets</p>
              </div>
            )}
          </div>
          <div>
            <p
              onClick={() =>
                setMobileDropdown(mobileDropdown === "travel" ? null : "travel")
              }
              className="cursor-pointer flex justify-between items-center"
            >
              TRAVEL{" "}
              <span className="font-bold ">
                {mobileDropdown === "men" ? "−" : "+"}
              </span>
            </p>

            {mobileDropdown === "travel" && (
              <div className="pl-4 mt-2 space-y-2 text-gray-600">
                <p>Travel Bags</p>
                <p>Luggage Tags</p>
                <p>Passport Holders</p>
              </div>
            )}
          </div>

          <p>GIFT SET</p>
          <p>CUSTOMIZE</p>
          <p>CORPORATE</p>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-40"
        ></div>
      )}
    </>
  );
}

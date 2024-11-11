import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offSetPos = elementPosition + window.scrollY + offsetTop;

      window.scrollTo({
        top: offSetPos,
        behavior: "smooth",
      });
    }
    setIsMobileOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50 ">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border-stone-50/30 border bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                <img src={logo} width={150} alt="" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-center ">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMenu}
              >
                {isMobileOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileOpen && (
            <ul className="flex flex-col ml-4  mt-4 backdrop-blur-md gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block text-lg w-full "
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

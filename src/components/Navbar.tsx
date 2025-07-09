"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import ContactModal from "./ContactWithUsModal";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/for-clients", label: "For Clients" },
  { href: "/explore-services", label: "Explore Services" },
  { href: "/success-stories", label: "Success Stories" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const openMobileMenu = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setShowMobileMenu(true);
    setTimeout(() => setIsMobileMenuOpen(true), 10);
  };

  const closeMobileMenu = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setIsMobileMenuOpen(false);
    setTimeout(() => setShowMobileMenu(false), 500);
  };

  const openContactModal = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setShowContactModal(true);
    closeMobileMenu();
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    <>
      <div className="w-full px-5 md:px-8 border-b border-[#DEE5ED]">
        <div className="max-w-[1280px] mx-auto w-full py-[15px] flex items-center">
          <div className="w-full flex items-center justify-between gap-5">
            <Logo />
            <div className="hidden lg:flex items-center gap-8 mt-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#252525] text-[16px] leading-[24px] font-normal transition duration-200 hover:text-[#3A96AF]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <Button
                className="border border-[#3A96AF] h-[40px] rounded-md px-4 text-[#3A96AF] hover:bg-[#3A96AF] hover:text-white text-[12px] leading-[16px] font-medium"
                onClick={() => router.push("/login")}
              >
                Log in
              </Button>
              <Button
                className="border border-[#3A96AF] h-[40px] rounded-md px-4 bg-[#3A96AF] text-white text-[12px] leading-[16px] font-medium hover:bg-[#2d7a8f] transition-colors"
                onClick={() => router.push("/registration")}
              >
                Get Started Today
              </Button>
            </div>
            <button
              onClick={openMobileMenu}
              className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer"
              aria-label="Toggle mobile menu"
              type="button"
            >
              <span
                className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 max-h-0.5 bg-[#252525] transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
              onClick={closeMobileMenu}
            />
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#DEE5ED]">
                <Logo />
                <button
                  onClick={closeMobileMenu}
                  className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer"
                  aria-label="Close mobile menu"
                  type="button"
                >
                  <span
                    className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-[#252525] transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </button>
              </div>
              <div className="flex flex-col space-y-4 px-5 py-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#252525] text-[18px] leading-[28px] font-normal transition duration-200 hover:text-[#3A96AF]"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-[#DEE5ED]">
                  <Button
                    className="border border-[#3A96AF] h-[40px] rounded-md px-4 text-[#3A96AF] hover:bg-[#3A96AF] hover:text-white text-[12px] leading-[16px] font-medium"
                    onClick={() => router.push("/login")}
                  >
                    Log in
                  </Button>
                  <Button
                    className="border border-[#3A96AF] h-[40px] rounded-md px-4 bg-[#3A96AF] text-white text-[14px] leading-[18px] font-medium hover:bg-[#2d7a8f] transition-colors"
                    onClick={() => router.push("/registration")}
                  >
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </>
  );
};

export default Navbar;

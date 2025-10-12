"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Menu, X } from "lucide-react";

import { links } from "./Header";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus first focusable element when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="rounded-md p-2 text-white transition-colors duration-300 hover:text-[#D87D4A] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="bg-opacity-50 fixed inset-0 z-40 bg-black"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="fixed top-0 right-0 left-0 z-50 transform bg-black transition-transform duration-300 ease-in-out"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="px-6 py-8">
              {/* Menu Header */}
              <div className="mb-8 flex items-center justify-between">
                <h2
                  id="mobile-menu-title"
                  className="text-xl font-bold text-white"
                >
                  Menu
                </h2>
                <button
                  ref={firstFocusableRef}
                  onClick={closeMenu}
                  className="rounded-md p-2 text-white transition-colors duration-300 hover:text-[#D87D4A] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav role="navigation" aria-label="Mobile navigation">
                <ul className="space-y-4">
                  {links.map(({ href, label }) => {
                    const isActive =
                      pathname === href ||
                      (href !== "/" && pathname?.startsWith(href));

                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={closeMenu}
                          className={`block w-full rounded-md px-4 py-3 text-left transition-colors duration-300 focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none ${
                            isActive
                              ? "bg-[#D87D4A] font-bold text-white"
                              : "hover:bg-opacity-10 text-white hover:bg-white hover:text-[#D87D4A]"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Categories Quick Access */}
              <div className="border-opacity-20 mt-8 border-t border-white pt-8">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Shop by Category
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { href: "/category/headphones", label: "Headphones" },
                    { href: "/category/speakers", label: "Speakers" },
                    { href: "/category/earphones", label: "Earphones" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="block rounded-md px-4 py-2 text-white transition-colors duration-300 hover:text-[#D87D4A] focus:ring-2 focus:ring-[#D87D4A] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;

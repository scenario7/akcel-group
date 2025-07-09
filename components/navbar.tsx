'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import redLogo from "@/images/redLogo.png";
import { Open_Sans } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { akcelBusinesses } from "@/app/companyData";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface NavbarProps {
  lightMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ lightMode = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const bgColor = lightMode ? "bg-white" : "bg-[#000000]";
  const textColor = lightMode ? "text-black" : "text-white";
  const iconFill = lightMode ? "#000" : "#fff";
  const buttonBg = lightMode ? "bg-black" : "bg-white";
  const buttonHover = lightMode ? "hover:bg-gray-800" : "hover:bg-gray-200";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex flex-col relative">
      <div
        className={`flex justify-between ${bgColor} px-4 sm:px-6 lg:px-10 items-center py-2 sm:py-3 lg:py-4`}
      >
        <Link href="/" aria-label="Home" className="flex-shrink-0">
          <Image
            src={redLogo.src}
            alt="Akcel Group Logo"
            height={40}
            width={160}
            className="h-16 lg:h-24 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block z-20">
          <NavigationMenu viewport={false}>
            <NavigationMenuList
              className={`space-x-4 ${openSans.className} ${textColor} font-semibold tracking-tight`}
            >
              {/* Businesses */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${openSans.className} bg-transparent ${textColor}`}>
                  Businesses
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={`flex flex-col rounded min-w-[220px] ${openSans.className} text-white text-left`}>
                    {akcelBusinesses.map((company, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <Link href={`/businesses/${company.slug}`}>
                          {company.title}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${openSans.className} bg-transparent ${textColor}`}>
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white text-left`}>
                    <NavigationMenuLink asChild>
                      <Link href="/our-story">Our Story</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/leadership">Leadership</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/our-vision">Our Vision</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Media */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${openSans.className} bg-transparent ${textColor}`}>
                  Media
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white text-left`}>
                    <NavigationMenuLink asChild>
                      <Link href="#">Press Releases</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">In the News</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Events</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Podcasts</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Socials */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`${buttonBg} rounded-full p-2 ${buttonHover} transition`}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill={iconFill} />
                  <path
                    d="M8.339 17H6.167V10.667h2.172V17zM7.253 9.8a1.253 1.253 0 1 1 0-2.506 1.253 1.253 0 0 1 0 2.506zM17 17h-2.167v-3.2c0-.763-.014-1.744-1.063-1.744-1.064 0-1.227.832-1.227 1.69V17H10.38V10.667h2.08v.863h.03c.29-.55 1-1.13 2.06-1.13 2.204 0 2.61 1.45 2.61 3.34V17z"
                    fill={lightMode ? "#fff" : "#000"}
                  />
                </svg>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`${buttonBg} rounded-full p-2 ${buttonHover} transition`}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill={iconFill} />
                  <g>
                    <rect
                      x="7"
                      y="7"
                      width="10"
                      height="10"
                      rx="3"
                      stroke={lightMode ? "#fff" : "#000"}
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2.5"
                      stroke={lightMode ? "#fff" : "#000"}
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="15.5"
                      cy="8.5"
                      r="0.75"
                      fill={lightMode ? "#fff" : "#000"}
                    />
                  </g>
                </svg>
              </a>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${textColor} p-2 rounded-md hover:bg-gray-100 hover:bg-opacity-10 transition-colors`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${bgColor} border-t border-gray-200 border-opacity-20 mobile-menu-container`}>
          <div className="px-4 py-3 space-y-3 text-sm font-medium">
            {/* Businesses */}
            <div>
              <button
                onClick={() => toggleDropdown("businesses")}
                className={`w-full text-left ${textColor} py-2 font-semibold`}
              >
                Businesses
              </button>
              {openDropdown === "businesses" && (
                <div className="ml-4 space-y-2">
                  {akcelBusinesses.map((company, index) => (
                    <Link
                      key={index}
                      href={`/businesses/${company.slug}`}
                      className="block text-sm hover:underline"
                    >
                      {company.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us */}
            <div>
              <button
                onClick={() => toggleDropdown("about")}
                className={`w-full text-left ${textColor} py-2 font-semibold`}
              >
                About Us
              </button>
              {openDropdown === "about" && (
                <div className="ml-4 space-y-2">
                  <Link href="/our-story" className="block text-sm hover:underline">
                    Our Story
                  </Link>
                  <Link href="/leadership" className="block text-sm hover:underline">
                    Leadership
                  </Link>
                  <Link href="/our-vision" className="block text-sm hover:underline">
                    Our Vision
                  </Link>
                </div>
              )}
            </div>

            {/* Media */}
            <div>
              <button
                onClick={() => toggleDropdown("media")}
                className={`w-full text-left ${textColor} py-2 font-semibold`}
              >
                Media
              </button>
              {openDropdown === "media" && (
                <div className="ml-4 space-y-2">
                  <Link href="#" className="block text-sm hover:underline">
                    Press Releases
                  </Link>
                  <Link href="#" className="block text-sm hover:underline">
                    In the News
                  </Link>
                  <Link href="#" className="block text-sm hover:underline">
                    Events
                  </Link>
                  <Link href="#" className="block text-sm hover:underline">
                    Podcasts
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className={`${textColor} block py-2 font-semibold`}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

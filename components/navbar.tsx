import React from "react";
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

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-[#000000] px-10 items-center">
        <Link href="/" passHref legacyBehavior>
          <a aria-label="Home">
        <Image
          src={redLogo.src}
          alt="Akcel Group Logo"
          height={50}
          width={200}
          priority
        />
          </a>
        </Link>
        <NavigationMenu>
          <NavigationMenuList
        className={`space-x-4 ${openSans.className} text-white font-semibold tracking-tight`}
          >
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${openSans.className} bg-transparent text-white font-semibold tracking-tight`}
          >
            Our Businesses
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
          className={`flex flex-col rounded min-w-[220px] ${openSans.className} text-white tracking-tight`}
            >
          {akcelBusinesses.map((company, index) => (
            <NavigationMenuLink
              key={index}
              href={`/businesses/${company.slug}`}
            >
              {company.title}
            </NavigationMenuLink>
          ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${openSans.className} bg-transparent text-white font-semibold tracking-tight`}
          >
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
          className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white tracking-tight`}
            >
          <NavigationMenuLink href="/our-story">
            Our Story
          </NavigationMenuLink>
          <NavigationMenuLink href="/leadership">
            Leadership
          </NavigationMenuLink>
          <NavigationMenuLink href="/our-vision">
            Our Vision
          </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${openSans.className} bg-transparent text-white font-semibold tracking-tight`}
          >
            Media
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
          className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white tracking-tight`}
            >
          <NavigationMenuLink href="">
            Press Releases
          </NavigationMenuLink>
          <NavigationMenuLink href="">
            In the News
          </NavigationMenuLink>
          <NavigationMenuLink href="">
            Events
          </NavigationMenuLink>
          <NavigationMenuLink href="">
            Podcasts
          </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path
          d="M8.339 17H6.167V10.667h2.172V17zM7.253 9.8a1.253 1.253 0 1 1 0-2.506 1.253 1.253 0 0 1 0 2.506zM17 17h-2.167v-3.2c0-.763-.014-1.744-1.063-1.744-1.064 0-1.227.832-1.227 1.69V17H10.38V10.667h2.08v.863h.03c.29-.55 1-1.13 2.06-1.13 2.204 0 2.61 1.45 2.61 3.34V17z"
          fill="#000"
            />
          </svg>
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="bg-white rounded-full p-2 hover:bg-gray-200 transition"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <g>
          <rect
            x="7"
            y="7"
            width="10"
            height="10"
            rx="3"
            stroke="#000"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="#000"
            strokeWidth="1.5"
          />
          <circle cx="15.5" cy="8.5" r="0.75" fill="#000" />
            </g>
          </svg>
        </a>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;

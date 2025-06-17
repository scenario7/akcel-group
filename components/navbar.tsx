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
import { akcelCompanies } from "@/app/companyData";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-[#000000] px-10 items-center">
        <Image
          src={redLogo.src}
          alt="Akcel Group Logo"
          height={50}
          width={200}
          priority
        />
        <NavigationMenu>
          <NavigationMenuList
            className={`space-x-4 ${openSans.className} text-white font-semibold tracking-tight`}
          >
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
                Our Brands
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div
                  className={`flex flex-col rounded min-w-[220px] ${openSans.className} text-white tracking-tight`}
                >
                  {akcelCompanies.map((company, index) => (
                    <NavigationMenuLink
                      key={index}
                      href={`companies/${company.slug}`}
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
              <NavigationMenuLink href="/sustainability">
                Sustainability
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;

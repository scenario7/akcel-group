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

const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between bg-[#000000] px-10 items-center">
            <Image src={redLogo.src} alt="" height={50} width={200} />
            <NavigationMenu>
                <NavigationMenuList className={`space-x-4 ${openSans.className} text-white font-semibold tracking-tight`}>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${openSans.className} text-white font-semibold tracking-tight`}>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <div className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white tracking-tight`}>
                        <NavigationMenuLink href="/our-story">Our Story</NavigationMenuLink>
                        <NavigationMenuLink href="/leadership">Leadership</NavigationMenuLink>
                        <NavigationMenuLink href="/our-vision">Our Vision</NavigationMenuLink>
                    </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${openSans.className} text-white font-semibold tracking-tight`}>Businesses</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <div className={`flex flex-col rounded min-w-[180px] ${openSans.className} text-white tracking-tight`}>
                        <NavigationMenuLink href="/businesses/motor-sports">Motor Sports</NavigationMenuLink>
                        <NavigationMenuLink href="/businesses/it-services">IT Services</NavigationMenuLink>
                        <NavigationMenuLink href="/businesses/entertainment-media">Entertainment and Media</NavigationMenuLink>
                        <NavigationMenuLink href="/businesses/real-estate">Real Estate Development and Brokerage</NavigationMenuLink>
                        <NavigationMenuLink href="/businesses/education-training">Education and Training</NavigationMenuLink>
                        <NavigationMenuLink href="/businesses/alternative-investments">Alternative Investments</NavigationMenuLink>
                    </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`${openSans.className} text-white font-semibold tracking-tight`}>Our Brands</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <div className={`flex flex-col rounded min-w-[220px] ${openSans.className} text-white tracking-tight`}>
                        <NavigationMenuLink href="/brands/akcel-realty">Akcel Realty</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/akcel-entertainment">Akcel Entertainment</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/jetking-technologies">Jetking Technologies</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/remax-india">Remax India</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/akcel-gp">Akcel GP</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/akcel-gp-academy">Akcel GP Academy</NavigationMenuLink>
                        <NavigationMenuLink href="/brands/akcel-investments">Akcel Investments</NavigationMenuLink>
                    </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/media">Media</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/sustainability">Sustainability</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact">Contact Us</NavigationMenuLink>
                </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
    );
};

export default Navbar;

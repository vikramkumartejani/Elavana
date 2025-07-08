import Image from "next/image";
import Link from "next/link";
import React from "react";

// 1. Type definition
interface SocialLink {
    href: string;
    iconSrc: string;
    alt: string;
}

// 2. Data array
const socialLinksData: SocialLink[] = [
    {
        href: "/",
        iconSrc: "/assets/icons/share-icon.svg",
        alt: "share",
    },
    {
        href: "/",
        iconSrc: "/assets/icons/facebook-icon.svg",
        alt: "facebook",
    },
    {
        href: "/",
        iconSrc: "/assets/icons/linkedIn-icon.svg",
        alt: "linkedIn",
    },
    {
        href: "/",
        iconSrc: "/assets/icons/instagram-icon.svg",
        alt: "instagram",
    },
    {
        href: "/",
        iconSrc: "/assets/icons/twitter-icon.svg",
        alt: "twitter",
    },
    {
        href: "/",
        iconSrc: "/assets/icons/youtube-icon.svg",
        alt: "youtube",
    },
];

// 3. Component
const SocialLinks = () => {
    return (
        <div className="flex items-center flex-wrap gap-3">
            {socialLinksData.map((link, index) => (
                <Link href={link.href} key={index}>
                    <Image src={link.iconSrc} alt={link.alt} width={40} height={40} className="sm:w-[40px] w-[28px]" />
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;

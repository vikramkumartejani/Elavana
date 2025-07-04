'use client';
import { useEffect, useState } from "react";
import LiveChat from "@/SvgIcons/LiveChat";

export default function LiveChatButton() {
    const [showLiveChat, setShowLiveChat] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowLiveChat(window.scrollY >= 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showLiveChat) return null;
    return (
        <button className="fixed bottom-2 right-2 z-50 cursor-pointer">
            <LiveChat />
        </button>
    );
} 
"use client";
import LiveChat from "@/SvgIcons/LiveChat";
import React, { useState, MouseEvent } from "react";
import ContactModal from "./ContactWithUsModal";

export default function LiveChatButton() {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  const openContactModal = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };
  return (
    <>
      <button
        onClick={openContactModal}
        className="fixed bottom-2 right-2 z-50 cursor-pointer"
      >
        <LiveChat />
      </button>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </>
  );
}

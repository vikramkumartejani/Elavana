"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const countries = [
  {
    code: "+44",
    name: "United Kingdom",
    flag: (
      <img
        src="https://flagcdn.com/24x18/gb.png"
        alt="UK"
        width={24}
        height={18}
        style={{ borderRadius: "4px" }}
      />
    ),
  },
  {
    code: "+1",
    name: "United States",
    flag: (
      <img
        src="https://flagcdn.com/24x18/us.png"
        alt="US"
        width={24}
        height={18}
        style={{ borderRadius: "4px" }}
      />
    ),
  },
  {
    code: "+92",
    name: "Pakistan",
    flag: (
      <img
        src="https://flagcdn.com/24x18/pk.png"
        alt="Pakistan"
        width={24}
        height={18}
        style={{ borderRadius: "4px" }}
      />
    ),
  },
];

const ContactWithUsModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [countryIndex, setCountryIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPhone = e.target.value;
    setFormData((prev) => ({
      ...prev,
      phone: rawPhone,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullPhone = formData.phone
      ? `${countries[countryIndex].code} ${formData.phone}`
      : "";

    const payload = {
      ...formData,
      phone: fullPhone,
    };

    console.log("Form submitted:", payload);
    onClose();

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-[24px] max-w-[559px] py-4 sm:py-5  px-5 md:px-[30px] w-full max-h-[96vh] overflow-y-auto hide-scrollbar transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full absolute top-5 right-5 flex items-end justify-end mb-2 sm:mb-[28px]">
          <button
            onClick={onClose}
            className="cursor-pointer"
            type="button"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 13.414L17.657 19.071C17.846 19.253 18.098 19.354 18.361 19.352C18.623 19.349 18.874 19.244 19.059 19.059C19.245 18.873 19.35 18.623 19.352 18.361C19.354 18.098 19.254 17.846 19.071 17.657L13.414 12L19.071 6.343C19.254 6.154 19.354 5.902 19.352 5.64C19.35 5.377 19.245 5.127 19.059 4.941C18.874 4.756 18.623 4.651 18.361 4.649C18.098 4.646 17.846 4.747 17.657 4.929L12 10.586L6.343 4.929C6.154 4.751 5.903 4.654 5.643 4.659C5.383 4.663 5.135 4.768 4.952 4.952C4.768 5.135 4.663 5.383 4.659 5.643C4.655 5.903 4.753 6.154 4.93 6.343L10.586 12L4.929 17.657C4.834 17.749 4.758 17.86 4.705 17.982C4.653 18.104 4.625 18.235 4.624 18.368C4.623 18.5 4.648 18.632 4.698 18.755C4.749 18.878 4.823 18.99 4.917 19.083C5.011 19.177 5.122 19.252 5.245 19.302C5.368 19.352 5.5 19.377 5.633 19.376C5.765 19.375 5.897 19.347 6.019 19.295C6.141 19.243 6.251 19.166 6.343 19.071L12 13.414Z"
                fill="#09244B"
              />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h2 className="text-[24px] mt-4 sm:text-[32px] leading-[26px] sm:leading-[36px] font-semibold tracking-[-2%] text-[#3A96AF] mb-4 sm:mb-6">
          Let's Contact With Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />

          <Input
            id="company"
            name="company"
            label="Company/Organization"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter your company/organization"
            required
          />

          {/* Phone Number with Dropdown */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <label className="block text-[16px] leading-[20px] font-medium text-[#252525]">
              Phone Number
            </label>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  className="flex items-center cursor-pointer justify-between border border-[#E8ECF4] gap-2 px-3 sm:px-4 py-3 rounded-lg sm:rounded-[12px] min-w-[110px] sm:min-w-[114px] focus:outline-none"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  tabIndex={0}
                >
                  <div className="flex items-center gap-1">
                    {countries[countryIndex].flag}
                    <span className="text-[16px] leading-[18px] text-[#252525] font-normal tracking-[0.5px]">
                      {countries[countryIndex].code}
                    </span>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 w-5 h-5 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95"
                      stroke="#9A9EA6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-[180px] bg-white border border-gray-200 shadow-lg z-10">
                    {countries.map((country, idx) => (
                      <button
                        key={country.code}
                        type="button"
                        className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 ${
                          countryIndex === idx ? "bg-[#F8FAFC]" : ""
                        }`}
                        onClick={() => {
                          setCountryIndex(idx);
                          setDropdownOpen(false);
                        }}
                      >
                        {country.flag}
                        <span className="text-[12px]">
                          {country.name} ({country.code})
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl outline-none px-4 py-3 border border-[#E8ECF4] placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] leading-[20px] focus:border-[#3A96AF] transition-colors"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>

          <Input
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />

          <Input
            id="subject"
            name="subject"
            label="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter your subject"
            required
          />

          <Input
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            type="textarea"
            required
          />

          <div className="mt-3">
            <Button
              type="submit"
              className="w-full h-[44px] bg-[#3A96AF] text-white rounded-md text-[16px] font-medium hover:bg-[#2d7a8f] transition-colors"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactWithUsModal;

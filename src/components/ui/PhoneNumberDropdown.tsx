import React, { useState, useRef, useEffect } from 'react';

const countries = [
    {
        code: '+44',
        name: 'United Kingdom',
        flag: (
            <img src="https://flagcdn.com/24x18/gb.png" alt="UK" width={24} height={18} style={{ borderRadius: '4px' }} />
        ),
    },
    {
        code: '+1',
        name: 'United States',
        flag: (
            <img src="https://flagcdn.com/24x18/us.png" alt="US" width={24} height={18} style={{ borderRadius: '4px' }} />
        ),
    },
    {
        code: '+92',
        name: 'Pakistan',
        flag: (
            <img src="https://flagcdn.com/24x18/pk.png" alt="Pakistan" width={24} height={18} style={{ borderRadius: '4px' }} />
        ),
    },
];

interface PhoneNumberDropdownProps {
    value?: string;
    onChange?: (value: string) => void;
}

const PhoneNumberDropdown: React.FC<PhoneNumberDropdownProps> = ({ value, onChange }) => {
    const [countryIndex, setCountryIndex] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [phone, setPhone] = useState(value || '');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        onChange?.(e.target.value);
    };

    return (
        <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative" ref={dropdownRef}>
                <button
                    type="button"
                    className="flex items-center cursor-pointer justify-between gap-2 px-3 sm:px-4 py-[14px] bg-[#F8FAFC] rounded-lg sm:rounded-[12px] min-w-[70px] sm:min-w-[90px] focus:outline-none"
                    onClick={() => setDropdownOpen((open) => !open)}
                    tabIndex={0}
                >
                    {countries[countryIndex].flag}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-200 sm:w-6 sm:h-6 w-5 h-5 ${dropdownOpen ? 'rotate-180' : ''}`}
                    >
                        <path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95" stroke="#9A9EA6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-[180px] bg-white border border-gray-200 shadow-lg z-10">
                        {countries.map((country, idx) => (
                            <button
                                key={country.code}
                                type="button"
                                className={`flex items-center gap-2 cursor-pointer w-full px-3 py-2 hover:bg-gray-100 ${countryIndex === idx ? 'bg-[#F8FAFC]' : ''}`}
                                onClick={() => { setCountryIndex(idx); setDropdownOpen(false); }}
                            >
                                {country.flag}
                                <span className="text-[12px]">{country.name} ({country.code})</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg sm:rounded-[12px] bg-[#F8FAFC] outline-none px-4 py-[14px] placeholder:text-[#9A9EA6] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] border border-transparent focus:border-[#3A96AF] transition-colors h-[48px]"
                style={{ minWidth: 0 }}
                value={phone}
                onChange={handlePhoneChange}
            />
        </div>
    );
};

export default PhoneNumberDropdown; 
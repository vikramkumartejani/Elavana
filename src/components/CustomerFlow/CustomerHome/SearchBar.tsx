import React from 'react';
import Image from 'next/image';
import RippleButton from '@/components/ui/Button';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    showFilters: boolean;
    setShowFilters: (show: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, showFilters, setShowFilters }) => (
    <div className="flex items-center gap-3 justify-center w-full">
        <div className='relative bg-[#F8FAFC] w-full rounded-xl flex items-center gap-2.5 px-4 py-3.5 border border-transparent hover:border-[#3A96AF] transition duration-200'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#486284" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 22L20 20" stroke="#486284" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
                type="text"
                placeholder="Search Services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F8FAFC] placeholder:text-[#486284] text-[16px] leading-[20px] tracking-[0.5px] font-normal outline-none h-full"
            />
        </div>
        <RippleButton
            onClick={() => setShowFilters(!showFilters)}
            className="border border-[#2A6676] bg-[#3A96AF] rounded-md h-[48px] flex items-center gap-2.5 px-5 min-w-[116px]"
        >
            <span className='text-white text-[16px] leading-[24px] tracking-[0.5px] font-medium'>Filter</span>
            <Image src='/assets/icons/filter-icon.svg' alt='filter' width={24} height={24} />
        </RippleButton>
    </div>
);

export default SearchBar; 
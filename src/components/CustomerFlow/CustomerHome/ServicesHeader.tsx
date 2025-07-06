import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SortOption } from './types';

interface ServicesHeaderProps {
    sortBy: SortOption;
    setSortBy: (sort: SortOption) => void;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ sortBy, setSortBy }) => {
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

    const sortOptions = [
        { id: 'popular', name: 'Popular' },
        { id: 'rating', name: 'Rating' },
        { id: 'price-low', name: 'Price: Low to High' },
        { id: 'price-high', name: 'Price: High to Low' }
    ];

    const getSortDisplayName = (sortId: SortOption) => {
        const sortOption = sortOptions.find(option => option.id === sortId);
        return sortOption ? sortOption.name : 'Popular';
    };

    return (
        <div className="flex sm:items-center justify-between w-full mb-4 md:mb-[31px] sm:flex-row flex-col gap-2">
            <h2 className="text-[18px] md:text-[24px] md:leading-[30px] font-medium text-[#252525]">Available Services</h2>
            <div className="flex items-center space-x-4">
                <div className="relative sm:w-fit w-full">
                    <button
                        onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                        className="flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#3A96AF] transition-colors w-full sm:min-w-[180px]"
                    >
                        <span className="text-[14px] leading-[20px] font-medium text-[#252525]">{getSortDisplayName(sortBy)}</span>
                        <svg width="20" height="20" className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5999 7.45834L11.1666 12.8917C10.5249 13.5333 9.4749 13.5333 8.83324 12.8917L3.3999 7.45834" stroke="#252525" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {sortDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-[#E8ECF4] rounded-lg shadow-lg z-50 w-full sm:min-w-[180px]">
                            {sortOptions.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => {
                                        setSortBy(option.id as SortOption);
                                        setSortDropdownOpen(false);
                                    }}
                                    className={`w-full text-left p-3 hover:bg-gray-200 transition-colors ${sortBy === option.id ? 'bg-[#3a96af83] text-[#252525]' : 'text-[#252525]'}`}
                                >
                                    <span className="text-[14px]">{option.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServicesHeader; 
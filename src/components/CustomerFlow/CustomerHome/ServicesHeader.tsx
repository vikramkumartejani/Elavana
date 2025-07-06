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
        <div className="flex items-center justify-between w-full mb-[31px]">
            <h2 className="text-[24px] leading-[30px] font-medium text-[#252525]">Available Services</h2>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <button
                        onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                        className="flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#3A96AF] transition-colors min-w-[200px]"
                    >
                        <span className="text-[14px] text-[#252525]">{getSortDisplayName(sortBy)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {sortDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-[#E8ECF4] rounded-lg shadow-lg z-50 min-w-[200px]">
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
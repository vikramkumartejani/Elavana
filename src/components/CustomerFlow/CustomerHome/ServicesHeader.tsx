import React from 'react';
import { SortOption } from './types';

interface ServicesHeaderProps {
    sortBy: SortOption;
    setSortBy: (sort: SortOption) => void;
}

const ServicesHeader: React.FC<ServicesHeaderProps> = ({ sortBy, setSortBy }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSortBy(e.target.value as SortOption);
    };

    return (
        <div className="flex items-center justify-between w-full mb-[31px]">
            <h2 className="text-[24px] leading-[30px] font-medium text-[#252525]">Available Services</h2>
            <div className="flex items-center space-x-4">
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="popular">Popular</option>
                    <option value="rating">Rating</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default ServicesHeader; 
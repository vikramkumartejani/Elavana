import React, { useRef } from 'react';
import Image from 'next/image';
import { categories } from './data';

interface CategoryNavigationProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ selectedCategory, setSelectedCategory }) => {
    const categoryScrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (categoryScrollRef.current) {
            const amount = 260;
            categoryScrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex items-center justify-center w-full mb-4 md:mb-[31px]">
            {/* Left Arrow */}
            <button
                onClick={() => scroll('left')}
                className="cursor-pointer mr-4"
                aria-label="Scroll left"
                type="button"
            >
                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.5" y="0.5" width="33" height="33" rx="16.5" transform="matrix(-1 0 0 1 33.5 0)" stroke="#E8ECF4" />
                    <path d="M20.0415 10.4L14.6082 15.8333C13.9665 16.475 13.9665 17.525 14.6082 18.1667L20.0415 23.6" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Scrollable Categories */}
            <div
                ref={categoryScrollRef}
                className="flex items-center gap-[30px] w-full overflow-x-auto hide-scrollbar h-full"
            >
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex flex-col items-center justify-center gap-2 rounded-lg transition-colors min-w-[200px] max-w-[240px] cursor-pointer ${selectedCategory === category.id
                            ? 'text-[#3A96AF] font-semibold'
                            : 'text-[#252525]'
                            }`}
                    >
                        <Image src={category.icon} alt={category.name} width={70} height={70} />
                        <span className="text-[20px] leading-[24px] tracking-[0.5px] font-normal text-center w-full whitespace-nowrap">{category.name}</span>
                    </button>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll('right')}
                className="cursor-pointer ml-4"
                aria-label="Scroll right"
                type="button"
            >
                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="0.5" width="33" height="33" rx="16.5" stroke="#E8ECF4" />
                    <path d="M14.9583 10.4L20.3916 15.8333C21.0333 16.475 21.0333 17.525 20.3916 18.1667L14.9583 23.6" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default CategoryNavigation; 
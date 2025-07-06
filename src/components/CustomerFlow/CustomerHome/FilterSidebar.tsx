import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FilterSidebarProps, PriceRange, DateFilter } from './types';
import { categories, dateFilters } from './data';
import PriceRangeButton from './PriceRangeButton';

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    selectedCategory,
    setSelectedCategory,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedDateFilter,
    setSelectedDateFilter,
    onClearFilters
}) => {
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [dateDropdownOpen, setDateDropdownOpen] = useState(false);

    const getCategoryDisplayName = (categoryId: string) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'All';
    };

    const getDateDisplayName = (dateId: DateFilter) => {
        const dateFilter = dateFilters.find(filter => filter.id === dateId);
        return dateFilter ? dateFilter.name : 'Anytime';
    };

    const handleCategoryDropdownToggle = () => {
        setCategoryDropdownOpen(!categoryDropdownOpen);
        // Close date dropdown when opening category dropdown
        if (!categoryDropdownOpen) {
            setDateDropdownOpen(false);
        }
    };

    const handleDateDropdownToggle = () => {
        setDateDropdownOpen(!dateDropdownOpen);
        // Close category dropdown when opening date dropdown
        if (!dateDropdownOpen) {
            setCategoryDropdownOpen(false);
        }
    };

    return (
        <div className="min-w-[295px] max-w-[295px] border border-[#E8ECF4] rounded-[24px] px-4 py-[30px] h-fit sticky top-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-[24px] leading-[28px] tracking-[0.5px] font-semibold text-[#252525]">Filter</h3>
                <button
                    onClick={onClearFilters}
                    className="text-[12px] leading-[16px] tracking-[0.5px] font-medium hover:underline cursor-pointer text-[#ED0006]"
                >
                    Clear all
                </button>
            </div>

            {/* Categories Dropdown */}
            <div className="mb-6">
                <h4 className="font-medium text-[16px] leading-[20px] text-[#333333] mb-3">Categories</h4>
                <div className="relative">
                    <button
                        onClick={handleCategoryDropdownToggle}
                        className="w-full flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#3A96AF] transition-colors"
                    >
                        <span className="text-[14px] text-[#252525]">{getCategoryDisplayName(selectedCategory)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {categoryDropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E8ECF4] rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setSelectedCategory(category.id);
                                        setCategoryDropdownOpen(false);
                                    }}
                                    className={`w-full text-left p-3 hover:bg-gray-200 transition-colors ${selectedCategory === category.id ? 'bg-[#3a96af83] text-[#252525]' : 'text-[#252525]'
                                        }`}
                                >
                                    <span className="text-[14px]">{category.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Date Post Dropdown */}
            <div className="mb-6">
                <h4 className="font-medium text-[16px] leading-[20px] text-[#333333] mb-3">Date Post</h4>
                <div className="relative">
                    <button
                        onClick={handleDateDropdownToggle}
                        className="w-full flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#3A96AF] transition-colors"
                    >
                        <span className="text-[14px] text-[#252525]">{getDateDisplayName(selectedDateFilter)}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${dateDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {dateDropdownOpen && (
                        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-[#E8ECF4] rounded-lg shadow-lg z-50">
                            {dateFilters.map(filter => (
                                <button
                                    key={filter.id}
                                    onClick={() => {
                                        setSelectedDateFilter(filter.id as DateFilter);
                                        setDateDropdownOpen(false);
                                    }}
                                    className={`w-full text-left p-3 hover:bg-gray-200 transition-colors ${selectedDateFilter === filter.id ? 'bg-[#3a96af83] text-[#252525]' : 'text-[#252525]'
                                        }`}
                                >
                                    <span className="text-[14px]">{filter.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Price Range Buttons */}
            <div className="mb-6 w-full">
                <h4 className="font-medium text-[16px] leading-[20px] text-[#333333] mb-3">Price Range</h4>
                <div className='flex items-start flex-wrap gap-3'>
                    <PriceRangeButton
                        label="Under $100"
                        selected={selectedPriceRange === 'under-100'}
                        onClick={setSelectedPriceRange ? () => setSelectedPriceRange(selectedPriceRange === 'under-100' ? 'all' : 'under-100') : undefined}
                    />
                    <PriceRangeButton
                        label="$100 to $200"
                        selected={selectedPriceRange === '100-200'}
                        onClick={setSelectedPriceRange ? () => setSelectedPriceRange(selectedPriceRange === '100-200' ? 'all' : '100-200') : undefined}
                    />
                    <PriceRangeButton
                        label="$250 to $30000"
                        selected={selectedPriceRange === '250-30000'}
                        onClick={setSelectedPriceRange ? () => setSelectedPriceRange(selectedPriceRange === '250-30000' ? 'all' : '250-30000') : undefined}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar; 
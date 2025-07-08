// Type definitions for CustomerHome components
export interface Service {
    id: number;
    title: string;
    instructor: string;
    category: string;
    price: number;
    rating: number;
    students: number;
    duration: string;
    image: string;
    description: string;
    tags: string[];
    datePosted: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}

export type SortOption = 'popular' | 'rating' | 'price-low' | 'price-high';
export type PriceRange = 'all' | 'under-100' | '100-200' | '250-30000';
export type DateFilter = 'anytime' | 'today' | 'this-week' | 'this-month';

export interface ServiceCardProps {
    service: Service;
}

export interface FilterSidebarProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedPriceRange: PriceRange;
    setSelectedPriceRange: (range: PriceRange) => void;
    selectedDateFilter: DateFilter;
    setSelectedDateFilter: (filter: DateFilter) => void;
    onClearFilters: () => void;
}

export interface PriceRangeButtonProps {
    label: string;
    selected: boolean;
    onClick?: () => void;
} 
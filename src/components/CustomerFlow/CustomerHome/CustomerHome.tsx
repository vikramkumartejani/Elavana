"use client"
import React, { useState, useEffect, useRef, JSX } from 'react';
import { Search, Filter, Star, Users, Calendar, MapPin, Clock, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RippleButton from '@/components/ui/Button';
import Image from 'next/image';

// Type definitions
interface Service {
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

interface Category {
    id: string;
    name: string;
    icon: string;
}

type SortOption = 'popular' | 'rating' | 'price-low' | 'price-high';
type PriceRange = 'all' | 'under-100' | '100-200' | '250-2500';
type DateFilter = 'anytime' | 'today' | 'this-week' | 'this-month';

// Mock data for services
const servicesData: Service[] = [
    {
        id: 1,
        title: "KESSRA Training",
        instructor: "Andre Muniz",
        category: "Coaching",
        price: 50,
        rating: 4.8,
        students: 245,
        duration: "8 weeks",
        image: "/assets/card-placeholder.png",
        description: "Complete training program with expert instructors to support your development.",
        tags: ["Professional", "Certification"],
        datePosted: "2025-07-01"
    },
    {
        id: 2,
        title: "UI/UX MasterClass",
        instructor: "Andre Muniz",
        category: "Design",
        price: 150,
        rating: 4.9,
        students: 189,
        duration: "6 weeks",
        image: "/assets/card-placeholder.png",
        description: "Master UI/UX design principles with hands-on projects and expert guidance.",
        tags: ["Design", "UI/UX"],
        datePosted: "2025-07-02"
    },
    {
        id: 3,
        title: "Career Strategy Session",
        instructor: "Andre Muniz",
        category: "Event",
        price: 75,
        rating: 4.7,
        students: 156,
        duration: "2 hours",
        image: "/assets/card-placeholder.png",
        description: "Strategic planning session to advance your career with expert advice.",
        tags: ["Career", "Strategy"],
        datePosted: "2025-06-30"
    },
    {
        id: 4,
        title: "UX Conference",
        instructor: "Andre Muniz",
        category: "Conference",
        price: 300,
        rating: 4.8,
        students: 324,
        duration: "3 days",
        image: "/assets/card-placeholder.png",
        description: "Premium UX conference with industry experts and networking opportunities.",
        tags: ["Conference", "UX"],
        datePosted: "2025-07-05"
    },
    {
        id: 5,
        title: "Food Festival",
        instructor: "Andre Muniz",
        category: "Event",
        price: 25,
        rating: 4.6,
        students: 289,
        duration: "1 day",
        image: "/assets/card-placeholder.png",
        description: "Culinary experience with expert chefs and food enthusiasts.",
        tags: ["Food", "Festival"],
        datePosted: "2025-07-03"
    },
    {
        id: 6,
        title: "Web Development",
        instructor: "Andre Muniz",
        category: "Course",
        price: 450,
        rating: 4.9,
        students: 412,
        duration: "12 weeks",
        image: "/assets/card-placeholder.png",
        description: "Complete web development bootcamp with modern technologies.",
        tags: ["Programming", "Web"],
        datePosted: "2025-07-04"
    },
    {
        id: 7,
        title: "Career Coaching",
        instructor: "Andre Muniz",
        category: "Coaching",
        price: 120,
        rating: 4.8,
        students: 178,
        duration: "4 weeks",
        image: "/assets/card-placeholder.png",
        description: "Personal career coaching to help you achieve your professional goals.",
        tags: ["Career", "Coaching"],
        datePosted: "2025-07-06"
    },
    {
        id: 8,
        title: "Content Writing",
        instructor: "Andre Muniz",
        category: "Writing",
        price: 85,
        rating: 4.7,
        students: 234,
        duration: "6 weeks",
        image: "/assets/card-placeholder.png",
        description: "Master content writing techniques with practical exercises.",
        tags: ["Writing", "Content"],
        datePosted: "2025-07-01"
    }
];

const categories: Category[] = [
    { id: 'all', name: 'All', icon: '/assets/icons/all-filters.svg' },
    { id: 'consultation', name: 'Consultation', icon: '/assets/icons/all-filters.svg' },
    { id: 'event', name: 'Event / Workshops', icon: '/assets/icons/all-filters.svg' },
    { id: 'masterclass', name: 'Masterclass', icon: '/assets/icons/all-filters.svg' },
    { id: 'conference', name: 'Conference / Events', icon: '/assets/icons/all-filters.svg' },
    { id: 'products', name: 'Products', icon: '/assets/icons/all-filters.svg' },
    { id: 'courses', name: 'Self-Paced Courses', icon: '/assets/icons/all-filters.svg' },
    { id: 'coaching', name: 'Coaching', icon: '/assets/icons/all-filters.svg' },
    { id: 'design', name: 'Design', icon: '/assets/icons/all-filters.svg' },
    { id: 'writing', name: 'Writing', icon: '/assets/icons/all-filters.svg' }
];

const dateFilters = [
    { id: 'anytime', name: 'Anytime' },
    { id: 'today', name: 'Today' },
    { id: 'this-week', name: 'This Week' },
    { id: 'this-month', name: 'This Month' }
];

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
    <div className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <Image src='/assets/card-placeholder.png' alt='image' width={281} height={210} className='rounded-xl mb-4' />

        <div className='flex items-center justify-between gap-3'>
            <h3 className="font-semibold text-[18px] leading-[28px] tracking-[0.5px] mb-2 text-[#252525] line-clamp-1">{service.title}</h3>
            <span className="bg-[#D97E591F] px-3 py-1 rounded-md text-[12px] leading-[16px] tracking-[0.5px] font-semibold text-[#D97E59]">
                {service.category}
            </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
            <Image src='/assets/profile.svg' alt='profile' width={24} height={24} />
            <span className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">{service.instructor}</span>
        </div>

        <p className="text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] mb-4 line-clamp-3">{service.description}</p>

        <div className="flex items-end justify-end w-full">
            <span className="text-[20px] leading-[24px] tracking-[0.5px] font-bold text-[#D97E59]">${service.price}</span>
        </div>
    </div>
);

interface FilterSidebarProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    selectedPriceRange: PriceRange;
    setSelectedPriceRange: (range: PriceRange) => void;
    selectedDateFilter: DateFilter;
    setSelectedDateFilter: (filter: DateFilter) => void;
    onClearFilters: () => void;
}

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
                        onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                        className="w-full flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#D97E59] transition-colors"
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
                                    className={`w-full text-left p-3 hover:bg-gray-50 transition-colors ${selectedCategory === category.id ? 'bg-[#D97E591F] text-[#D97E59]' : 'text-[#252525]'
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
                        onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                        className="w-full flex items-center justify-between p-3 border border-[#E8ECF4] rounded-lg bg-white hover:border-[#D97E59] transition-colors"
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
                                    className={`w-full text-left p-3 hover:bg-gray-50 transition-colors ${selectedDateFilter === filter.id ? 'bg-[#D97E591F] text-[#D97E59]' : 'text-[#252525]'
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
                <div className='grid grid-cols-2 gap-3'>
                    <button
                        onClick={() => setSelectedPriceRange('under-100')}
                        className={`cursor-pointer border rounded-md py-3 px-4 text-[14px] leading-[18px] font-semibold tracking-[0.5px] transition-colors ${selectedPriceRange === 'under-100'
                            ? 'border-[#D97E59] bg-[#D97E591F] text-[#D97E59]'
                            : 'border-[#E8ECF4] bg-white text-[#252525] hover:border-[#D97E59]'
                            }`}
                    >
                        Under $100
                    </button>
                    <button
                        onClick={() => setSelectedPriceRange('100-200')}
                        className={`cursor-pointer border rounded-md py-3 px-4 text-[14px] leading-[18px] font-semibold tracking-[0.5px] transition-colors ${selectedPriceRange === '100-200'
                            ? 'border-[#D97E59] bg-[#D97E591F] text-[#D97E59]'
                            : 'border-[#E8ECF4] bg-white text-[#252525] hover:border-[#D97E59]'
                            }`}
                    >
                        $100 to $200
                    </button>
                    <button
                        onClick={() => setSelectedPriceRange('250-2500')}
                        className={`cursor-pointer border rounded-md py-3 px-4 text-[14px] leading-[18px] font-semibold tracking-[0.5px] transition-colors ${selectedPriceRange === '250-2500'
                            ? 'border-[#D97E59] bg-[#D97E591F] text-[#D97E59]'
                            : 'border-[#E8ECF4] bg-white text-[#252525] hover:border-[#D97E59]'
                            }`}
                    >
                        $250 to $2500
                    </button>
                </div>
            </div>
        </div>
    );
};

const CustomerHome: React.FC = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
    const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>('anytime');
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filteredServices, setFilteredServices] = useState<Service[]>(servicesData);

    const itemsPerPage = 8;

    const clearAllFilters = (): void => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSelectedPriceRange('all');
        setSelectedDateFilter('anytime');
        setSortBy('popular');
    };

    const filterByPriceRange = (service: Service, priceRange: PriceRange): boolean => {
        switch (priceRange) {
            case 'under-100':
                return service.price < 100;
            case '100-200':
                return service.price >= 100 && service.price <= 200;
            case '250-2500':
                return service.price >= 250 && service.price <= 2500;
            case 'all':
            default:
                return true;
        }
    };

    const filterByDate = (service: Service, dateFilter: DateFilter): boolean => {
        const today = new Date('2025-07-06'); // Using your current date
        const serviceDate = new Date(service.datePosted);

        switch (dateFilter) {
            case 'today':
                return serviceDate.toDateString() === today.toDateString();
            case 'this-week':
                const weekStart = new Date(today);
                weekStart.setDate(today.getDate() - today.getDay());
                return serviceDate >= weekStart && serviceDate <= today;
            case 'this-month':
                return serviceDate.getMonth() === today.getMonth() && serviceDate.getFullYear() === today.getFullYear();
            case 'anytime':
            default:
                return true;
        }
    };

    useEffect(() => {
        let filtered = servicesData;

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(service =>
                service.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Filter by price range
        filtered = filtered.filter(service => filterByPriceRange(service, selectedPriceRange));

        // Filter by date
        filtered = filtered.filter(service => filterByDate(service, selectedDateFilter));

        // Sort services
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
            default:
                filtered.sort((a, b) => b.students - a.students);
                break;
        }

        setFilteredServices(filtered);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, selectedPriceRange, selectedDateFilter, sortBy]);

    const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentServices = filteredServices.slice(startIndex, startIndex + itemsPerPage);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSortBy(e.target.value as SortOption);
    };

    const handlePageChange = (pageNumber: number): void => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = (): void => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = (): void => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    const renderPagination = (): JSX.Element | null => {
        if (totalPages <= 1 || filteredServices.length === 0) return null;

        return (
            <div className="flex items-center justify-center space-x-2 mt-12">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Show first page */}
                {currentPage > 3 && (
                    <>
                        <button
                            onClick={() => handlePageChange(1)}
                            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                        >
                            1
                        </button>
                        {currentPage > 4 && (
                            <span className="px-2 text-gray-500">...</span>
                        )}
                    </>
                )}

                {/* Show current page range */}
                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isInRange = pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2;

                    if (!isInRange) return null;

                    return (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === pageNumber
                                ? 'bg-blue-500 text-white'
                                : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                                }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {/* Show last page */}
                {currentPage < totalPages - 2 && (
                    <>
                        {currentPage < totalPages - 3 && (
                            <span className="px-2 text-gray-500">...</span>
                        )}
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        );
    };

    const renderNoResults = (): JSX.Element => (
        <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
            <p className="text-gray-600 text-center max-w-md">
                We couldn't find any services matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button
                onClick={clearAllFilters}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Clear All Filters
            </button>
        </div>
    );

    const renderCategoryNavigation = (): JSX.Element => {
        const scrollRef = useRef<HTMLDivElement>(null);

        const scroll = (direction: 'left' | 'right') => {
            if (scrollRef.current) {
                const amount = 260;
                scrollRef.current.scrollBy({
                    left: direction === 'left' ? -amount : amount,
                    behavior: 'smooth',
                });
            }
        };

        return (
            <div className="flex items-center justify-center w-full mb-[31px]">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 mr-4"
                    aria-label="Scroll left"
                    type="button"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Scrollable Categories */}
                <div
                    ref={scrollRef}
                    className="flex items-center gap-[30px] max-w-[1280px] overflow-x-auto h-full"
                >
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-lg transition-colors min-w-[140px] max-w-[140px] cursor-pointer ${selectedCategory === category.id
                                ? 'text-[#3A96AF] font-semibold'
                                : 'text-[#252525]'
                                }`}
                        >
                            <Image src={category.icon} alt={category.name} width={60} height={62} />
                            <span className="text-[20px] leading-[24px] tracking-[0.5px] font-normal text-center w-full">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-100 ml-4"
                    aria-label="Scroll right"
                    type="button"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        );
    };

    const renderServicesHeader = (): JSX.Element => (
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

    const renderSearchBar = (): JSX.Element => (
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
                className="border border-[#2A6676] bg-[#3A96AF] rounded-md h-[48px] flex items-center gap-2.5 px-5"
            >
                <span className='text-white text-[16px] leading-[24px] tracking-[0.5px] font-medium'>Filter</span>
                <Image src='/assets/icons/filter-icon.svg' alt='filter' width={24} height={24} />
            </RippleButton>
        </div>
    );

    return (
        <div className="min-h-screen ">
            <Navbar />

            <div className="max-w-[1280px] mx-auto py-8">
                {!showFilters ? (
                    // Normal layout without filters
                    <div className="">
                        {/* Search Bar */}
                        <div className="max-w-[810px] mx-auto mb-8">
                            {renderSearchBar()}
                        </div>

                        {/* Category Navigation */}
                        {renderCategoryNavigation()}

                        {/* Available Services Header */}
                        {renderServicesHeader()}

                        {/* Services Grid */}
                        {currentServices.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {currentServices.map(service => (
                                    <ServiceCard key={service.id} service={service} />
                                ))}
                            </div>
                        ) : (
                            renderNoResults()
                        )}
                    </div>
                ) : (
                    // Layout with filters
                    <div className="flex items-start space-x-8">
                        {/* Filter Sidebar */}
                        <FilterSidebar
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedPriceRange={selectedPriceRange}
                            setSelectedPriceRange={setSelectedPriceRange}
                            selectedDateFilter={selectedDateFilter}
                            setSelectedDateFilter={setSelectedDateFilter}
                            onClearFilters={clearAllFilters}
                        />

                        {/* Main Content */}
                        <div className="flex-1 space-y-8">
                            {/* Search Bar */}
                            {renderSearchBar()}

                            {/* Services Grid */}
                            {currentServices.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentServices.map(service => (
                                        <ServiceCard key={service.id} service={service} />
                                    ))}
                                </div>
                            ) : (
                                renderNoResults()
                            )}
                        </div>
                    </div>
                )}

                {/* Pagination */}
                {renderPagination()}
            </div>

            <Footer />
        </div>
    );
};

export default CustomerHome;
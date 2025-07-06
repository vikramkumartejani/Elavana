"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FilterSidebar from '../CustomerHome/FilterSidebar';
import SearchBar from '../CustomerHome/SearchBar';
import CategoryNavigation from '../CustomerHome/CategoryNavigation';
import ServicesHeader from '../CustomerHome/ServicesHeader';
import Pagination from '../CustomerHome/Pagination';
import NoResults from '../CustomerHome/NoResults';
import { serviceProvidersData, categories } from '../CustomerHome/data';
import { Service, SortOption, PriceRange, DateFilter } from '../CustomerHome/types';
import { filterByPriceRange, filterByDate, sortServices } from '../CustomerHome/utils';
import ServiceProviderCard from './ServiceProviderCard';

interface ServiceProvider {
    id: number;
    name: string;
    title: string;
    rating: number;
    image: string;
    description: string;
    tags: string[];
    category: string;
}

const ServiceProviders: React.FC = () => {
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
    const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>('anytime');
    const [sortBy, setSortBy] = useState<SortOption>('popular');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>(serviceProvidersData);
    const [loading, setLoading] = useState<boolean>(false);

    const itemsPerPage = 8;

    const clearAllFilters = (): void => {
        setSearchTerm('');
        setSelectedCategory('all');
        setSelectedPriceRange('all');
        setSelectedDateFilter('anytime');
        setSortBy('popular');
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            let filtered = serviceProvidersData;

            // Filter by search term
            if (searchTerm) {
                filtered = filtered.filter(provider =>
                    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    provider.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    provider.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                );
            }

            // Filter by category
            if (selectedCategory !== 'all') {
                filtered = filtered.filter(provider =>
                    provider.category.toLowerCase() === selectedCategory.toLowerCase()
                );
            }

            // For service providers, we'll skip price and date filtering since they don't have those fields
            // But we can implement custom sorting
            if (sortBy === 'popular') {
                filtered = filtered.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === 'rating') {
                filtered = filtered.sort((a, b) => b.rating - a.rating);
            } else if (sortBy === 'price-low') {
                // Since service providers don't have price, we'll sort by name
                filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortBy === 'price-high') {
                // Since service providers don't have price, we'll sort by name reverse
                filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
            }

            setFilteredProviders(filtered);
            setCurrentPage(1);
            setLoading(false);
        }, 800); // Simulate loading delay
        return () => clearTimeout(timer);
    }, [searchTerm, selectedCategory, selectedPriceRange, selectedDateFilter, sortBy]);

    const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProviders = filteredProviders.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber: number): void => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousPage = (): void => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = (): void => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className='w-full md:px-8 px-5'>
                <div className="max-w-[1280px] mx-auto pt-8 pb-20 md:pb-[150px]">
                    {!showFilters ? (
                        <div className="">
                            {/* Search Bar */}
                            <div className="max-w-[810px] mx-auto mb-8">
                                <SearchBar
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    showFilters={showFilters}
                                    setShowFilters={setShowFilters}
                                />
                            </div>

                            {/* Category Navigation */}
                            <CategoryNavigation
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />

                            {/* Available Service Providers Header */}
                            <ServicesHeader
                                sortBy={sortBy}
                                setSortBy={(sort) => setSortBy(sort as SortOption)}
                                title="Available Service Providers"
                            />

                            {/* Providers Grid */}
                            {loading ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                                    {Array.from({ length: itemsPerPage }).map((_, i) => (
                                        <ServiceProviderCard key={i} provider={serviceProvidersData[0]} loading={true} />
                                    ))}
                                </div>
                            ) : currentProviders.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                                    {currentProviders.map(provider => (
                                        <ServiceProviderCard key={provider.id} provider={provider} />
                                    ))}
                                </div>
                            ) : (
                                <NoResults onClearFilters={clearAllFilters} />
                            )}
                        </div>
                    ) : (
                        <div className="flex items-start gap-[20px] xl:gap-[30px]">
                            {/* Filter Sidebar */}
                            <FilterSidebar
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                selectedPriceRange={selectedPriceRange}
                                setSelectedPriceRange={setSelectedPriceRange}
                                selectedDateFilter={selectedDateFilter}
                                setSelectedDateFilter={setSelectedDateFilter}
                                onClearFilters={clearAllFilters}
                                showFilters={showFilters}
                                setShowFilters={setShowFilters}
                            />

                            {/* Main Content */}
                            <div className="flex-1 space-y-8">
                                {/* Search Bar */}
                                <SearchBar
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    showFilters={showFilters}
                                    setShowFilters={setShowFilters}
                                />

                                {/* Providers Grid */}
                                {loading ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {Array.from({ length: itemsPerPage }).map((_, i) => (
                                            <ServiceProviderCard key={i} provider={serviceProvidersData[0]} loading={true} />
                                        ))}
                                    </div>
                                ) : currentProviders.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {currentProviders.map(provider => (
                                            <ServiceProviderCard key={provider.id} provider={provider} />
                                        ))}
                                    </div>
                                ) : (
                                    <NoResults onClearFilters={clearAllFilters} />
                                )}
                            </div>
                        </div>
                    )}

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        onPreviousPage={handlePreviousPage}
                        onNextPage={handleNextPage}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServiceProviders;
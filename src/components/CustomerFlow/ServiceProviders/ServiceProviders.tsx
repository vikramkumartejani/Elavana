"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FilterSidebar from '../FilterSidebar';
import SearchBar from '../SearchBar';
import CategoryNavigation from '../CategoryNavigation';
import ServicesHeader from '../ServicesHeader';
import Pagination from '../Pagination';
import { serviceProvidersData } from '../data';
import { SortOption, PriceRange, DateFilter } from '../types';
import ServiceProviderCard from './ServiceProviderCard';
import NoResults from '../NoResults';

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
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>('all');
  const [selectedDateFilter, setSelectedDateFilter] = useState<DateFilter>('anytime');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredProviders, setFilteredProviders] = useState<ServiceProvider[]>(serviceProvidersData);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 8;

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const clearAllFilters = (): void => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedDateFilter('anytime');
    setSortBy('popular');
  };

  const handleCloseFilters = () => {
    if (!isDesktop) {
      setShowFilters(false);
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      setShowFilters(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = serviceProvidersData;

      if (searchTerm) {
        filtered = filtered.filter(provider =>
          provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(provider =>
          provider.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      if (sortBy === 'popular') {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'rating') {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'price-low') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'price-high') {
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
      }

      setFilteredProviders(filtered);
      setCurrentPage(1);
      setLoading(false);
    }, 800);
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

      <div className="w-full md:px-8 px-5">
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
                    <ServiceProviderCard
                      key={i}
                      provider={serviceProvidersData[0]}
                      loading={true}
                    />
                  ))}
                </div>
              ) : currentProviders.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                  {currentProviders.map((provider) => (
                    <ServiceProviderCard
                      key={provider.id}
                      provider={provider}
                    />
                  ))}
                </div>
              ) : (
                <NoResults
                  description="We couldn't find any experts matching your search criteria. Try adjusting your filters or search terms."
                  onClearFilters={clearAllFilters}
                />
              )}
            </div>
          ) : (
            <div
              className="flex items-start gap-[20px] xl:gap-[30px] transition-all duration-500 ease-in-out"
              style={{
                animation: isDesktop
                  ? isClosing
                    ? "slideOutToLeft 0.3s ease-in"
                    : "slideInFromLeft 0.5s ease-out"
                  : "none",
              }}
            >
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
                  setShowFilters={handleCloseFilters}
                />

                {/* Providers Grid */}
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: itemsPerPage }).map((_, i) => (
                      <ServiceProviderCard
                        key={i}
                        provider={serviceProvidersData[0]}
                        loading={true}
                      />
                    ))}
                  </div>
                ) : currentProviders.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProviders.map((provider) => (
                      <ServiceProviderCard
                        key={provider.id}
                        provider={provider}
                      />
                    ))}
                  </div>
                ) : (
                  <NoResults
                    description="We couldn't find any experts matching your search criteria. Try adjusting your filters or search terms."
                    onClearFilters={clearAllFilters}
                  />
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
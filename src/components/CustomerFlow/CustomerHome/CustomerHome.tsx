"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ServiceCard from "./ServiceCard";
import FilterSidebar from "../FilterSidebar";
import SearchBar from "../SearchBar";
import CategoryNavigation from "../CategoryNavigation";
import ServicesHeader from "../ServicesHeader";
import Pagination from "../Pagination";
import NoResults from "../NoResults";
import { servicesData } from "../data";
import { Service, SortOption, PriceRange, DateFilter } from "../types";
import { filterByPriceRange, filterByDate, sortServices } from "../utils";
import { useSearchParams } from "next/navigation";

const CustomerHome: React.FC = () => {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<PriceRange>("all");
  const [selectedDateFilter, setSelectedDateFilter] =
    useState<DateFilter>("anytime");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredServices, setFilteredServices] =
    useState<Service[]>(servicesData);
  const [loading, setLoading] = useState<boolean>(false);

  const itemsPerPage = 8;

  // Get search query from URL parameters
  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const clearAllFilters = (): void => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedPriceRange("all");
    setSelectedDateFilter("anytime");
    setSortBy("popular");
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
      let filtered = servicesData;

      if (searchTerm) {
        filtered = filtered.filter(
          (service) =>
            service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.instructor
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            service.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (service) =>
            service.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }

      filtered = filtered.filter((service) =>
        filterByPriceRange(service, selectedPriceRange)
      );

      filtered = filtered.filter((service) =>
        filterByDate(service, selectedDateFilter)
      );

      filtered = sortServices(filtered, sortBy);

      setFilteredServices(filtered);
      setCurrentPage(1);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    selectedDateFilter,
    sortBy,
  ]);

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = filteredServices.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = (): void => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="px-5 md:px-8 w-full">
        <div className="max-w-[1280px] mx-auto pt-8 pb-20 md:pb-[150px]">
          {!showFilters ? (
            <div className="">
              {/* Search Bar */}
              <div className="max-w-[810px] mx-auto mb-6 md:mb-8">
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

              {/* Available Services Header */}
              <ServicesHeader
                sortBy={sortBy}
                setSortBy={(sort) => setSortBy(sort as SortOption)}
                title="Available Services"
              />

              {/* Services Grid */}
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: itemsPerPage }).map((_, i) => (
                    <ServiceCard
                      key={i}
                      service={{} as Service}
                      loading={true}
                    />
                  ))}
                </div>
              ) : currentServices.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      loading={false}
                    />
                  ))}
                </div>
              ) : (
                <NoResults onClearFilters={clearAllFilters} />
              )}
            </div>
          ) : (
            // Layout with filters
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

                {/* Services Grid */}
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: itemsPerPage }).map((_, i) => (
                      <ServiceCard
                        key={i}
                        service={{} as Service}
                        loading={true}
                      />
                    ))}
                  </div>
                ) : currentServices.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        loading={false}
                      />
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

export default CustomerHome;

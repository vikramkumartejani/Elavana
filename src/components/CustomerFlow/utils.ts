import { Service, PriceRange, DateFilter, SortOption } from './types';

export const filterByPriceRange = (service: Service, priceRange: PriceRange): boolean => {
    switch (priceRange) {
        case 'under-100':
            return service.price < 100;
        case '100-200':
            return service.price >= 100 && service.price <= 200;
        case '250-30000':
            return service.price >= 250 && service.price <= 30000;
        case 'all':
        default:
            return true;
    }
};

export const filterByDate = (service: Service, dateFilter: DateFilter): boolean => {
    const today = new Date('2025-07-06');  
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

export const sortServices = (services: Service[], sortBy: SortOption): Service[] => {
    const sortedServices = [...services];
    
    switch (sortBy) {
        case 'price-low':
            return sortedServices.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sortedServices.sort((a, b) => b.price - a.price);
        case 'rating':
            return sortedServices.sort((a, b) => b.rating - a.rating);
        case 'popular':
        default:
            return sortedServices.sort((a, b) => b.students - a.students);
    }
}; 
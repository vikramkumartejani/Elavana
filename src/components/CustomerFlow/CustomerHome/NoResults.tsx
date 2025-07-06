import RippleButton from '@/components/ui/Button';
import React from 'react';

interface NoResultsProps {
    onClearFilters: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onClearFilters }) => (
    <div className="flex flex-col items-center justify-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
        <p className="text-gray-600 text-center max-w-md">
            We couldn't find any services matching your search criteria. Try adjusting your filters or search terms.
        </p>
        <RippleButton
            onClick={onClearFilters}
            className="mt-4 bg-[#2A6676] text-white px-5 py-2 rounded-md cursor-pointer"
        >
            Clear All Filters
        </RippleButton>
    </div>
);

export default NoResults; 
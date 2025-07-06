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
        <button
            onClick={onClearFilters}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
            Clear All Filters
        </button>
    </div>
);

export default NoResults; 
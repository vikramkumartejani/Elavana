import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onPreviousPage: () => void;
    onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    onPreviousPage,
    onNextPage
}) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center space-x-2 mt-12">
            <button
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Show first page */}
            {currentPage > 3 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
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
                        onClick={() => onPageChange(pageNumber)}
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
                        onClick={() => onPageChange(totalPages)}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={onNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination; 
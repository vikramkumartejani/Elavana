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
        <div className="flex items-center justify-center space-x-4 mt-6">
            <button
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className="rounded w-10 h-10 flex items-center justify-center border border-[#E8ECF4] disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Show first page */}
            {currentPage > 3 && (
                <>
                    <button
                        onClick={() => onPageChange(1)}
                        className="h-10 w-10 rounded border border-[#E8ECF4] rounded border border-[#E8ECF4]"
                    >
                        1
                    </button>
                    {currentPage > 4 && (
                        <span className="w-10 h-10 text-[#252525] text-[16px] font-semibold flex items-center justify-center">...</span>
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
                        className={`h-10 w-10 flex items-center justify-center rounded text-[16px] leading-[21px] font-semibold transition-colors ${currentPage === pageNumber
                            ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]'
                            : 'border border-[#E8ECF4] hover:bg-gray-50 text-[#252525]'
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
                        <span className="w-10 h-10 text-[#252525] text-[16px] font-semibold  flex items-center justify-center">...</span>
                    )}
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className="h-10 w-10 rounded border border-[#E8ECF4] "
                    >
                        {totalPages}
                    </button>
                </>
            )}

            <button
                onClick={onNextPage}
                disabled={currentPage === totalPages}
                className="rounded w-10 h-10 flex items-center justify-center border border-[#E8ECF4] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination; 
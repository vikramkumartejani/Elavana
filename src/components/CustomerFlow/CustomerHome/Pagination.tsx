import React, { useEffect, useState } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (totalPages <= 1) return null;

    // Calculate page range
    const range = isMobile ? 1 : 2;
    const startPage = Math.max(2, currentPage - range);
    const endPage = Math.min(totalPages - 1, currentPage + range);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mt-6 flex-wrap">
            <button
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className="rounded w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer border border-[#E8ECF4] disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* First page */}
            <button
                onClick={() => onPageChange(1)}
                className={`h-8 w-8 md:h-10 md:w-10 rounded border border-[#E8ECF4] cursor-pointer ${currentPage === 1 ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]' : ''}`}
            >
                1
            </button>

            {/* Ellipsis after first page */}
            {startPage > 2 && (
                <span className="w-8 h-8 md:w-10 md:h-10 flex text-[#252525] text-[16px] font-semibold items-center justify-center">...</span>
            )}

            {/* Page range */}
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded cursor-pointer text-[16px] leading-[21px] font-semibold transition-colors ${currentPage === pageNumber
                        ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]'
                        : 'border border-[#E8ECF4] hover:bg-gray-50 text-[#252525]'
                        }`}
                >
                    {pageNumber}
                </button>
            ))}

            {/* Ellipsis before last page */}
            {endPage < totalPages - 1 && (
                <span className="w-8 h-8 md:w-10 md:h-10 text-[#252525] text-[16px] font-semibold flex items-center justify-center">...</span>
            )}

            {/* Last page */}
            {totalPages > 1 && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    className={`h-8 w-8 md:h-10 md:w-10 rounded border border-[#E8ECF4] cursor-pointer ${currentPage === totalPages ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]' : ''}`}
                >
                    {totalPages}
                </button>
            )}

            <button
                onClick={onNextPage}
                disabled={currentPage === totalPages}
                className="rounded w-8 h-8 md:w-10 md:h-10 flex items-center cursor-pointer justify-center border border-[#E8ECF4] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination; 
import RippleButton from "@/components/ui/Button";
import React from "react";

interface NoResultsProps {
  onClearFilters: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onClearFilters }) => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="text-6xl mb-4">🔍</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      No Results Found
    </h3>
    <p className="text-gray-600 text-center max-w-md">
      We couldn't find any services matching your search criteria. Try adjusting
      your filters or search terms.
    </p>
    <button
      onClick={onClearFilters}
      className={`border mt-4 rounded-md cursor-pointer py-3 px-4 text-[14px] leading-[18px] font-semibold tracking-[0.5px] transition-colors border-[#E8ECF4] bg-white text-[#252525] hover:border-[#D97E59]`}
    >
      Clear All Filters
    </button>
  </div>
);

export default NoResults;

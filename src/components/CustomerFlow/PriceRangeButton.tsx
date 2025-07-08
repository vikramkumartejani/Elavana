import React from 'react';
import { PriceRangeButtonProps } from './types';

const PriceRangeButton: React.FC<PriceRangeButtonProps> = ({ label, selected, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        disabled={!onClick}
        className={`border rounded-md py-3 px-4 text-[14px] leading-[18px] font-semibold tracking-[0.5px] transition-colors
            ${selected ? 'border-[#D97E59] bg-[#D97E591F] text-[#D97E59]' : 'border-[#E8ECF4] bg-white text-[#252525] hover:border-[#D97E59]'}
            ${!onClick ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
    >
        {label}
    </button>
);

export default PriceRangeButton; 
import React from 'react';
import { Star } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ServiceProviderCardProps {
    provider: any; // Replace 'any' with a proper type if you have one
    loading?: boolean;
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({ provider, loading = false }) => {
    if (loading) {
        return (
            <div className="bg-white border border-[#E8ECF4] rounded-xl p-4 overflow-hidden flex flex-col">
                <Skeleton height={180} className="rounded-xl mb-4" />
                <div className="flex items-center justify-between mb-1">
                    <Skeleton width={120} height={24} />
                    <div className="flex items-center gap-1">
                        <Skeleton width={18} height={18} circle />
                        <Skeleton width={30} height={18} />
                    </div>
                </div>
                <div className="mb-1">
                    <Skeleton width={100} height={18} />
                </div>
                <Skeleton count={2} height={14} className="mb-3" />
                <div className="flex flex-wrap gap-2 mt-auto">
                    {Array.from({ length: 2 }).map((_, idx) => (
                        <Skeleton key={idx} width={60} height={24} borderRadius={9999} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-[#E8ECF4] rounded-xl p-4 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Provider Image */}
            {provider.image ? (
                <img
                    src={provider.image}
                    alt={provider.title || provider.instructor || ''}
                    className="rounded-xl w-full h-[180px] object-cover mb-4"
                />
            ) : (
                <Skeleton height={180} className="rounded-xl mb-4" />
            )}
            {/* Name and Rating */}
            <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-[18px] leading-[28px] tracking-[0.5px] text-[#252525] line-clamp-1">
                    {provider.instructor || provider.title ? (
                        provider.instructor || provider.title
                    ) : (
                        <Skeleton width={120} height={24} />
                    )}
                </h3>
                {provider.rating ? (
                    <div className="flex items-center gap-1">
                        <Star size={18} className="text-[#FFA500] fill-[#FFA500]" />
                        <span className="text-[#FFA500] text-[15px] font-medium">{provider.rating.toFixed(1)}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <Skeleton width={18} height={18} circle />
                        <Skeleton width={30} height={18} />
                    </div>
                )}
            </div>
            {/* Title/Role */}
            <div className="mb-1">
                {provider.title ? (
                    <span className="text-[15px] text-[#3A96AF] font-medium leading-tight cursor-pointer hover:underline">
                        {provider.title}
                    </span>
                ) : (
                    <Skeleton width={100} height={18} />
                )}
            </div>
            {/* Description */}
            <div className="mb-3">
                {provider.description ? (
                    <p className="text-[#676D75] text-[13px] leading-[18px] tracking-[0.5px] line-clamp-2">
                        {provider.description}
                    </p>
                ) : (
                    <Skeleton count={2} height={14} />
                )}
            </div>
            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {provider.tags && provider.tags.length > 0 ? (
                    provider.tags.map((tag: string, idx: number) => (
                        <span
                            key={idx}
                            className="bg-[#F8E6E0] text-[#D97E59] px-3 py-1 rounded-full text-[12px] font-medium"
                        >
                            {tag}
                        </span>
                    ))
                ) : (
                    Array.from({ length: 2 }).map((_, idx) => (
                        <Skeleton key={idx} width={60} height={24} borderRadius={9999} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ServiceProviderCard; 
import React from 'react';
import { Star } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceProviderCardProps {
    provider: {
        id: number;
        name: string;
        title: string;
        rating: number;
        image: string;
        description: string;
        tags: string[];
        category: string;
    };
    loading?: boolean;
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({ provider, loading = false }) => {
    if (loading) {
        return (
            <div className="bg-white border border-[#E8ECF4] rounded-xl p-4 overflow-hidden flex flex-col">
                <Skeleton height={210} className="rounded-xl mb-4" />
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
        <Link href='/service-provider-profile' className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Provider Image */}
            {provider.image ? (
                <img
                    src={provider.image}
                    alt={provider.name || ''}
                    className="rounded-xl w-full h-[210px] object-cover mb-4"
                />
            ) : (
                <Skeleton height={210} className="rounded-xl mb-4" />
            )}
            {/* Name and Rating */}
            <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-[18px] leading-[28px] tracking-[0.5px] text-[#252525] line-clamp-1">
                    {provider.name ? (
                        provider.name
                    ) : (
                        <Skeleton width={120} height={24} />
                    )}
                </h3>
                {provider.rating ? (
                    <div className="flex items-center gap-1">
                        <Image src='/assets/icons/star.svg' alt='star' width={14} height={14} />
                        <span className="text-[#F99D26] text-[14px] leading-[18px] font-medium">{provider.rating.toFixed(1)}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-1">
                        <Skeleton width={18} height={18} circle />
                        <Skeleton width={30} height={18} />
                    </div>
                )}
            </div>
            {/* Title/Role */}
            <div className="mb-2 h-[18px]">
                {provider.title ? (
                    <span className="text-[14px] leading-[18px] text-[#3A96AF] font-medium cursor-pointer hover:underline">
                        {provider.title}
                    </span>
                ) : (
                    <Skeleton width={100} height={18} />
                )}
            </div>
            {/* Description */}
            <div className="mb-2">
                {provider.description ? (
                    <p className="text-[#252525] text-[12px] leading-[20px] font-normal tracking-[0.5px] line-clamp-2">
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
                            className="bg-[#D97E591F] text-[#D97E59] px-3 py-2 rounded-md text-[12px] leading-[16px] font-semibold"
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
        </Link>
    );
};

export default ServiceProviderCard; 
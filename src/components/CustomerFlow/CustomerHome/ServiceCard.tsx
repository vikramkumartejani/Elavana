import React from 'react';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ServiceCardProps } from './types';

interface ServiceCardPropsWithLoading extends ServiceCardProps {
    loading?: boolean;
}

const ServiceCard: React.FC<ServiceCardPropsWithLoading> = ({ service, loading = false }) => {
    if (loading) {
        return (
            <div className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden">
                <Skeleton height={210} className="rounded-xl mb-4 h-[210px] w-full" />
                
                <div className='flex items-center justify-between gap-3 mb-2'>
                    <Skeleton width="60%" height={28} />
                    <Skeleton width={60} height={20} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                    <Skeleton circle width={24} height={24} />
                    <Skeleton width={100} height={20} />
                </div>

                <div className="mb-4">
                    <Skeleton count={2} height={16} />
                </div>

                <div className="flex items-end justify-end w-full">
                    <Skeleton width={60} height={24} />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image src='/assets/card-placeholder.png' alt='image' width={281} height={210} className='rounded-xl mb-4 w-full h-[210px] object-cover' />

            <div className='flex items-center justify-between gap-3'>
                <h3 className="font-semibold text-[18px] leading-[28px] tracking-[0.5px] mb-2 text-[#252525] line-clamp-1">{service.title}</h3>
                <span className="bg-[#D97E591F] px-3 py-1 rounded-md text-[12px] leading-[16px] tracking-[0.5px] font-semibold text-[#D97E59]">
                    {service.category}
                </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
                <Image src='/assets/profile.svg' alt='profile' width={24} height={24} />
                <span className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">{service.instructor}</span>
            </div>

            <p className="text-[#676D75] text-[12px] leading-[16px] tracking-[0.5px] mb-4 line-clamp-3">{service.description}</p>

            <div className="flex items-end justify-end w-full">
                <span className="text-[20px] leading-[24px] tracking-[0.5px] font-bold text-[#D97E59]">${service.price}</span>
            </div>
        </div>
    );
};

export default ServiceCard; 
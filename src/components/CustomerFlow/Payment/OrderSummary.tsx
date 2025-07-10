import React from "react";
import Image from "next/image";

interface ServiceProvider {
    name: string;
    role: string;
    avatar: string;
}

interface OrderBy {
    name: string;
    role: string;
    avatar: string;
}

interface MockOrder {
    serviceProvider: ServiceProvider;
    orderBy: OrderBy;
    reviews: number;
    image: string;
}

interface OrderSummaryProps {
    title: string;
    mockOrder: MockOrder;
    price: number;
    quantity: number;
    total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ title, mockOrder, price, quantity, total }) => (
    <div className="w-full max-w-[400px] border border-[#E8ECF4] rounded-[24px] flex flex-col py-[34px] px-6">
        <h3 className="text-center text-[#252525] text-[24px] leading-[28px] font-semibold tracking-[0.5px] mb-6">
            Order Summary
        </h3>
        <div className="flex items-center gap-3 mb-6">
            <Image
                src={mockOrder.image}
                alt="Service"
                width={60}
                height={60}
                className="rounded-xl h-[60px] w-[60px] object-cover"
            />
            <div>
                <h1 className="font-semibold text-[20px] leading-[24px] tracking-[0.5px] text-[#252525]">
                    {title}
                </h1>
                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        <Image src="/assets/icons/star.svg" alt="star" width={14} height={14} />
                        <Image src="/assets/icons/star.svg" alt="star" width={14} height={14} />
                        <Image src="/assets/icons/star.svg" alt="star" width={14} height={14} />
                        <Image src="/assets/icons/star.svg" alt="star" width={14} height={14} />
                        <Image src="/assets/icons/star.svg" alt="star" width={14} height={14} />
                    </div>
                    <h3 className="text-[#676D75] text-[12px] leading-[18px] font-medium">
                        {mockOrder.reviews} reviews
                    </h3>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <h2 className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                Service Provider
            </h2>
            <div className="flex items-center gap-2 mt-3">
                <Image
                    src={mockOrder.serviceProvider.avatar}
                    alt="Provider"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <h3 className="text-[#252525] text-[14px] leading-[18px] font-semibold">
                        {mockOrder.serviceProvider.name}
                    </h3>
                    <h4 className="mt-1 text-[12px] leading-[16px] font-medium text-[#252525]">
                        {mockOrder.serviceProvider.role}
                    </h4>
                </div>
            </div>
        </div>
        <div>
            <h2 className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                Order By
            </h2>
            <div className="flex items-center gap-2 mt-3">
                <Image
                    src={mockOrder.orderBy.avatar}
                    alt="Order By"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <h3 className="text-[#252525] text-[14px] leading-[18px] font-semibold">
                        {mockOrder.orderBy.name}
                    </h3>
                    <h4 className="mt-1 text-[12px] leading-[16px] font-medium text-[#252525]">
                        {mockOrder.orderBy.role}
                    </h4>
                </div>
            </div>
        </div>
        <div className="my-6 bg-[#E8ECF4] h-[2px] w-full" />
        <div className="flex justify-between">
            <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-normal">
                Ticket
            </h3>
            <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-medium">
                {quantity}
            </h3>
        </div>
        <div className="mt-3 flex justify-between">
            <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-normal">
                Subtotal
            </h3>
            <h3 className="text-[#252525] text-[16px] leading-[20px] tracking-[0.5px] font-medium">
                $ {price}
            </h3>
        </div>
        <div className="w-full h-[2px] bg-[#E8ECF4] mt-3 mb-6" />
        <div className="flex justify-between text-base font-semibold">
            <h3 className="text-[#252525] text-[18px] leading-[20px] tracking-[0.5px] font-semibold">
                Total Price
            </h3>
            <h3 className="text-[#252525] text-[20px] leading-[20px] tracking-[0.5px] font-bold">
                $ {total}
            </h3>
        </div>
    </div>
);

export default OrderSummary;

import React from 'react';

interface RatingData {
    label: string;
    value: number;
    color: string;
}

const RatingBarChart: React.FC = () => {
    const data: RatingData[] = [
        { label: 'Excellent', value: 100, color: 'bg-[#F99D26]' },
        { label: 'Good', value: 47, color: 'bg-[#F99D26]' },
        { label: 'Average', value: 12, color: 'bg-[#F99D26]' },
        { label: 'Poor', value: 6, color: 'bg-[#F99D26]' },
        { label: 'Terrible', value: 7, color: 'bg-[#F99D26]' },
    ];

    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div className="border border-[#E8ECF4] bg-white rounded-xl py-4 px-4 sm:px-6 w-full">
            <div className="space-y-2">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between gap-3">
                        <div className="w-[62px] text-left">
                            <span className="text-[#252525] text-[14px] leading-[21px] font-medium">
                                {item.label}
                            </span>
                        </div>

                        {/* Bar container */}
                        <div className="flex-1">
                            <div className="relative h-[15px] bg-[#EEEEEE] rounded-lg overflow-hidden">
                                <div
                                    className={`h-full ${item.color} rounded-l-full`}
                                    style={{
                                        width: `${(item.value / maxValue) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Value */}
                        <div className="w-8 text-left">
                            <span className="text-[#252525] text-[10px] leading-[15px] font-medium poppins">
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingBarChart;
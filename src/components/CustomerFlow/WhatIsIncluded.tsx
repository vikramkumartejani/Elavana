import CheckBox from '@/SvgIcons/CheckBox'
import React from 'react'

export interface WhatIsIncludedProps {
    title?: string
    items: string[]
    className?: string
}

const WhatIsIncluded: React.FC<WhatIsIncludedProps> = ({
    title = "What’s Included",
    items,
    className = '',
}) => {
    return (
        <div className={`mt-4 sm:mt-6 ${className}`}>
            <h1 className='text-[#252525] text-[18px] sm:text-[20px] leading-[20px] sm:leading-[24px] tracking-[0.5px] font-semibold mb-3'>{title}</h1>
            <ul className='space-y-2 sm:space-y-3'>
                {items.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-1.5 sm:gap-2'>
                        <CheckBox />
                        <h3 className='text-[#676D75] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] font-normal'>{item}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WhatIsIncluded
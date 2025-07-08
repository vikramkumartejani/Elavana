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
        <div className={`mt-6 ${className}`}>
            <h1 className='text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-semibold mb-3'>{title}</h1>
            <ul className='space-y-3'>
                {items.map((item, idx) => (
                    <li key={idx} className='flex items-center gap-2'>
                        <CheckBox />
                        <h3 className='text-[#676D75] text-[16px] leading-[20px] tracking-[0.5px] font-normal'>{item}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WhatIsIncluded
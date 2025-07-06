import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-full px-5 md:px-8'>
            <div className='w-full max-w-[1280px] mx-auto py-6'>
                <div>
                    <Image src='/assets/for-coaches-hero.png' alt='hero' width={640} height={648} />
                </div>
            </div>
        </div>
    )
}

export default Hero
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialLinks = () => {
    return (
        <div className='flex items-center gap-3'>
            <Link href='/'>
                <Image src='/assets/icons/share-icon.svg' alt='share' width={40} height={40} />
            </Link>
            <Link href='/'>
                <Image src='/assets/icons/facebook-icon.svg' alt='facebook' width={40} height={40} />
            </Link>
            <Link href='/'>
                <Image src='/assets/icons/linkedIn-icon.svg' alt='linkedIn' width={40} height={40} />
            </Link>
            <Link href='/'>
                <Image src='/assets/icons/instagram-icon.svg' alt='instagram' width={40} height={40} />
            </Link>
            <Link href='/'>
                <Image src='/assets/icons/twitter-icon.svg' alt='twitter' width={40} height={40} />
            </Link>
            <Link href='/'>
                <Image src='/assets/icons/youtube-icon.svg' alt='youtube' width={40} height={40} />
            </Link>
        </div>
    )
}

export default SocialLinks
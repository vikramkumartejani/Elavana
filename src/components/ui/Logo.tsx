import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/assets/logo.svg' alt='logo' width={125} height={32.83} />
        </Link>
    )
}

export default Logo
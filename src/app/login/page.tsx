import Login from '@/components/LoginComponents/Login'
import Logo from '@/components/ui/Logo'
import React from 'react'

const Page = () => {
    return (
        <>
            <div className='w-full px-5 md:px-8 border-b border-[#DEE5ED]'>
                <div className='py-[18px] flex items-center max-w-[1280px] mx-auto'>
                    <Logo />
                </div>
            </div>
            <div className="w-full min-h-[calc(100vh-71px)] flex items-center justify-center px-5 md:px-8 py-10">
                <Login />
            </div>
        </>
    )
}

export default Page
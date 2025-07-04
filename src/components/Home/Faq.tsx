"use client"
import React, { useState, useRef, useEffect } from 'react'

const faqData = [
    {
        question: 'Who can join Elevana as a coach or expert?',
        answer:
            'Anyone with proven experience in coaching, mentoring, training, or providing professional guidance — including career coaches, wellness mentors, business advisors, and more. We vet each profile to ensure quality.',
    },
    {
        question: 'How do I get paid on Elevana?',
        answer:
            'Coaches and experts are paid directly through the Elevana platform. After you complete a session or service, your earnings are processed securely and transferred to your linked bank account or payment method. Payment schedules and details can be managed in your account settings.',
    },
    {
        question: 'Can I host events or group sessions?',
        answer:
            'Yes! Elevana allows coaches and experts to host both one-on-one and group sessions, including workshops, webinars, and events. You can set up and manage these sessions from your dashboard, and clients can register directly through the platform.',
    },
    {
        question: 'Is there a cost to join as a coach?',
        answer:
            'There is no upfront cost to join Elevana as a coach or expert. We operate on a commission-based model, where a small percentage is deducted from each successful booking to cover platform and payment processing fees.',
    },
    {
        question: 'How do I attract more clients?',
        answer:
            'To attract more clients, make sure your profile is complete and highlights your expertise, experience, and unique value. Collect positive reviews, offer introductory sessions, and actively engage with the Elevana community. Our platform also promotes top-rated coaches to help you reach a wider audience.',
    },
]

const MinusIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12.7529H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const PlusIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12.7627H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18.7627V6.7627" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return (
        <div className='my-14 md:mt-[74px] md:mb-[66.8px] md:px-8 px-5 w-full'>
            <div className='max-w-[676px] mx-auto w-full'>
                <h1 className='text-[#12142A] text-[24px] sm:text-[40px] sm:leading-[56.6px] font-bold text-center'>Have Any Questions?</h1>
                <div className='mt-8 flex flex-col gap-4'>
                    {faqData.map((item, idx) => {
                        const isOpen = openIndex === idx
                        const style = isOpen
                            ? !hasMounted && idx === 0
                                ? { maxHeight: 'none', opacity: 1, paddingBottom: 18 }
                                : {
                                    maxHeight: contentRefs.current[idx]?.scrollHeight
                                        ? contentRefs.current[idx]!.scrollHeight + 32
                                        : 0,
                                    opacity: 1,
                                    paddingBottom: 18,
                                    transition:
                                        'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, padding 0.3s',
                                }
                            : {
                                maxHeight: 0,
                                opacity: 0,
                                paddingBottom: 0,
                                transition:
                                    'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, padding 0.3s',
                            }
                        return (
                            <div
                                key={idx}
                                className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden`}
                                style={{ boxShadow: '0px 4px 24px 0px #4E4C4C14' }}
                            >
                                <button
                                    className={`w-full flex items-center cursor-pointer justify-between text-left px-4 sm:px-[25px] font-bold text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20.6px] transition-colors duration-200 ${isOpen ? 'pt-5 pb-[15px]' : 'py-5'} ${isOpen ? 'text-[#3A96AF]' : 'text-[#12142A]'} focus:outline-none`}
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                >
                                    <span className={isOpen ? 'text-[#3A96AF]' : ''}>{`${idx + 1}. ${item.question}`}</span>
                                    <span className="ml-4 flex items-center">
                                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                                    </span>
                                </button>
                                <div
                                    ref={el => { contentRefs.current[idx] = el }}
                                    style={style}
                                    className="px-4 sm:px-[25px] text-[#747474] text-[14px] sm:text-[16px] sm:leading-[25.6px] font-normal"
                                    aria-hidden={!isOpen}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Faq
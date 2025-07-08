import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { Star, StarHalf, X } from 'lucide-react'

interface ReviewModalProps {
    open: boolean
    onClose: () => void
}

const reviews = [
    {
        name: 'Samarth Asthana',
        location: 'Gainesville',
        contributions: 274,
        rating: 5,
        title: 'Excellent',
        text: 'Alice helped me gain clarity during a very uncertain period of my life. Her sessions were empowering and calming.',
    },
    {
        name: 'Samarth Asthana',
        location: 'Gainesville',
        contributions: 274,
        rating: 4,
        title: 'Good',
        text: 'Alice helped me gain clarity during a very uncertain period of my life. Her sessions were empowering and calming.',
    },
    {
        name: 'Samarth Asthana',
        location: 'Gainesville',
        contributions: 274,
        rating: 5,
        title: 'Amazing',
        text: 'Alice helped me gain clarity during a very uncertain period of my life. Her sessions were empowering and calming.',
    },
]

const ReviewModal: React.FC<ReviewModalProps> = ({ open, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open, onClose])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#25252533] p-4" style={{ backdropFilter: "blur(8px)" }}>
            <div ref={modalRef} className="bg-white border border-[#E8ECF4] rounded-[16px] sm:rounded-[24px] w-full max-w-[700px] px-6 py-8 sm:p-[50px] relative hide-scrollbar" style={{ maxHeight: '95vh', overflowY: 'auto' }}>
                <button
                    className="absolute top-4 right-4 text-[#676D75] hover:text-black"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={28} />
                </button>
                <h2 className="text-center text-[#252525] text-[22px] sm:text-[28px] leading-[22px] sm:leading-[28px] font-semibold mb-4 sm:mb-6">Customer’s Reviews</h2>

                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    <span className="text-[20px] sm:text-[24px] leading-[28px] sm:leading-[36px] font-semibold text-[#252525] poppins">4.5</span>
                    <div className="flex items-center gap-1 -mt-0.5 sm:-mt-2">
                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5' />
                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5'/>
                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5'/>
                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5'/>
                        <Image src='/assets/icons/star-icons.svg' alt='star' width={32} height={32} className='sm:w-8 w-5'/>
                    </div>
                    <span className="text-[#676D75] leading-[24px] text-[16px] font-normal poppins">(15)</span>
                </div>

                <div className='bg-[#E8ECF4] h-[2px] w-full mb-4 sm:mb-6' />

                <div className="space-y-6 poppins">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="border-b pb-4 sm:pb-6 border-[#E8ECF4]">
                            <div className="flex items-center gap-2 mb-4">
                                <Image src="/assets/profile.svg" alt="profile" width={50} height={50} className="rounded-full sm:w-[50px] w-[40px]" />
                                <div>
                                    <h1 className="text-[#252525] text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-medium">{review.name}</h1>
                                    <div className="mt-1 flex items-center gap-2">
                                        <h3 className='text-[#676D75] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] font-normal'>{review.location}</h3>
                                        <span className='bg-[#3A96AF] h-3 w-3 rounded-full'></span>
                                        <h3 className='text-[#676D75] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[18px] font-normal'>{review.contributions} Contributions</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start flex-col gap-2 mb-2">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                                        <Image key={i} src='/assets/icons/star-icons.svg' alt='star' width={16} height={16} />
                                    ))}
                                </div>

                                <h3 className='text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24px] font-semibold text-[#3A96AF]'>
                                    {review.title}
                                </h3>
                            </div>

                            <p className="text-[#676D75] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[28px] font-normal">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReviewModal
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Service {
    id: number
    title: string
    instructor: string
    description: string
    image: string
    tags: string[]
}

const servicesData: Service[] = [
    {
        id: 1,
        title: "UI/UX Design Bootcamp",
        instructor: "Alice Mwende",
        description: "Comprehensive program covering user research, wireframing, UI design, and proto....",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Bootcamp"]
    },
    {
        id: 2,
        title: "Figma Masterclass",
        instructor: "Alice Mwende",
        description: "Advanced Figma course focusing on design systems, auto layout, and collaboration.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Educations"]
    },
    {
        id: 3,
        title: "Design Thinking Workshop",
        instructor: "Alice Mwende",
        description: "Problem-solving sessions that promote empathy, ideation, and rapid prototyping.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Event", "Live Workshop"]
    },
    {
        id: 4,
        title: "1-on-1 Portfolio Review",
        instructor: "Alice Mwende",
        description: "A personal consultation to improve your case studies, storytelling, and layout.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Consultations", "Online Session"]
    },
    {
        id: 5,
        title: "UI/UX Design Bootcamp",
        instructor: "Alice Mwende",
        description: "Comprehensive program covering user research, wireframing, UI design, and proto....",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Bootcamp"]
    },
    {
        id: 6,
        title: "Figma Masterclass",
        instructor: "Alice Mwende",
        description: "Advanced Figma course focusing on design systems, auto layout, and collaboration.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Educations"]
    },
    {
        id: 7,
        title: "Design Thinking Workshop",
        instructor: "Alice Mwende",
        description: "Problem-solving sessions that promote empathy, ideation, and rapid prototyping.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Event", "Live Workshop"]
    },
    {
        id: 8,
        title: "1-on-1 Portfolio Review",
        instructor: "Alice Mwende",
        description: "A personal consultation to improve your case studies, storytelling, and layout.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Consultations", "Online Session"]
    }
]

// Component for individual service card
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image
                src={service.image}
                alt={service.title}
                width={281}
                height={161}
                className='rounded-xl mb-4 w-full h-[161px] object-cover'
            />

            <div className='flex items-center justify-between gap-3'>
                <h3 className="font-semibold text-[16px] leading-[30px] tracking-[0.5px] mb-1 text-[#252525] line-clamp-1">
                    {service.title}
                </h3>
            </div>

            <div className="flex items-center gap-2 mb-1">
                <Image src='/assets/profile.svg' alt='profile' width={24} height={24} />
                <span className="text-[16px] leading-[20px] tracking-[0.5px] font-semibold text-[#252525]">
                    {service.instructor}
                </span>
            </div>

            <p className="text-[#676D75] text-[12px] leading-[20px] tracking-[0.5px] mb-2 line-clamp-2">
                {service.description}
            </p>

            <div className='flex items-center gap-2'>
                {service.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-[#D97E591F] px-3 py-1 rounded-md text-[12px] leading-[20px] tracking-[0.5px] font-semibold text-[#D97E59]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

// Main component
const ServicesOffered: React.FC = () => {
    return (
        <div>
            <h1 className='text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-bold mb-6'>
                Services Offered
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5'>
                {servicesData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}

export default ServicesOffered
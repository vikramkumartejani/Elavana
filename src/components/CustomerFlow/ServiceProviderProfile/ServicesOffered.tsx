import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
        description: "Comprehensive program covering user research, wireframing, UI design, and prototyping.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Bootcamp"]
    },
    {
        id: 2,
        title: "Figma Masterclass",
        instructor: "Brian Kim",
        description: "Advanced Figma course focusing on design systems, auto layout, and collaboration.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Education"]
    },
    {
        id: 3,
        title: "Design Thinking Workshop",
        instructor: "Clara Thomas",
        description: "Problem-solving sessions promoting empathy, ideation, and rapid prototyping.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Event", "Workshop"]
    },
    {
        id: 4,
        title: "1-on-1 Portfolio Review",
        instructor: "Daniel Smith",
        description: "A personal consultation to improve your case studies, storytelling, and layout.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Consultation", "Online"]
    },
    {
        id: 5,
        title: "Intro to Web Accessibility",
        instructor: "Eva Green",
        description: "Learn to design inclusive interfaces for all users, including those with disabilities.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Accessibility"]
    },
    {
        id: 6,
        title: "Creative Coding with p5.js",
        instructor: "Frank Odeh",
        description: "Explore generative art and creative coding techniques using p5.js.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Coding"]
    },
    {
        id: 7,
        title: "Product Design Case Studies",
        instructor: "Grace Lee",
        description: "Dive into real-world product design processes and outcomes.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Case Study", "Product Design"]
    },
    {
        id: 8,
        title: "UX Research Fundamentals",
        instructor: "Hassan Ali",
        description: "Master user interviews, surveys, and usability testing basics.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Research", "Workshop"]
    },
    {
        id: 9,
        title: "Responsive Design Essentials",
        instructor: "Isabella Gomez",
        description: "Learn techniques for building mobile-friendly and responsive interfaces.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Course", "Frontend"]
    },
    {
        id: 10,
        title: "UI Animation in After Effects",
        instructor: "Jack Walters",
        description: "Bring your UI designs to life with micro-interactions using After Effects.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Animation", "UI"]
    },
    {
        id: 11,
        title: "Freelance Design Business",
        instructor: "Karen Zhou",
        description: "Learn how to build, price, and scale your freelance design business.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Business", "Freelance"]
    },
    {
        id: 12,
        title: "Design for Developers",
        instructor: "Leo Martinez",
        description: "Learn how developers can apply design principles without formal training.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Developer", "Design"]
    },
    {
        id: 13,
        title: "Webflow for Designers",
        instructor: "Mia Patterson",
        description: "Learn to convert Figma designs into fully functional Webflow sites.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Webflow", "No Code"]
    },
    {
        id: 14,
        title: "Psychology of Design",
        instructor: "Nathan Brooks",
        description: "Explore how human behavior affects design decisions and interactions.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Psychology", "UX"]
    },
    {
        id: 15,
        title: "Brand Identity Workshop",
        instructor: "Olivia Kim",
        description: "Create logos, typography, and visual guidelines for effective branding.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Branding", "Workshop"]
    },
    {
        id: 16,
        title: "Advanced Typography",
        instructor: "Paul Richardson",
        description: "Understand hierarchy, rhythm, and readability in digital design.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Typography", "UI"]
    },
    {
        id: 17,
        title: "UX Writing 101",
        instructor: "Queenie Ngo",
        description: "Learn how to craft user-friendly microcopy and interface texts.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["UX Writing", "Microcopy"]
    },
    {
        id: 18,
        title: "Intro to HTML/CSS for Designers",
        instructor: "Rahul Singh",
        description: "Designers learn to write clean HTML and CSS for better collaboration.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["HTML", "CSS"]
    },
    {
        id: 19,
        title: "Figma Prototyping Secrets",
        instructor: "Sarah Iqbal",
        description: "Speed up your Figma workflow with component-driven prototyping.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Figma", "Prototyping"]
    },
    {
        id: 20,
        title: "Design System Implementation",
        instructor: "Tariq Malik",
        description: "Create scalable design systems for enterprise-level applications.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["System", "Enterprise"]
    },
    {
        id: 21,
        title: "UX Audit Bootcamp",
        instructor: "Umaima Rizvi",
        description: "Evaluate and improve digital products through structured audits.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["UX", "Audit"]
    },
    {
        id: 22,
        title: "Notion for Designers",
        instructor: "Victor Lin",
        description: "Use Notion to manage portfolios, clients, and design systems.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Notion", "Productivity"]
    },
    {
        id: 23,
        title: "Color Theory Deep Dive",
        instructor: "Wendy Olsen",
        description: "Master color harmony, contrast, and accessibility in digital products.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Color", "Theory"]
    },
    {
        id: 24,
        title: "Voice UI Design",
        instructor: "Xavier Bello",
        description: "Design conversational interfaces for voice assistants and chatbots.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Voice", "AI"]
    },
    {
        id: 25,
        title: "UX Portfolio Website",
        instructor: "Yasmin Noor",
        description: "Build your UX portfolio using real-world examples and storytelling.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Portfolio", "Website"]
    },
    {
        id: 26,
        title: "UI Design with Tailwind CSS",
        instructor: "Zahid Khan",
        description: "Design modern UIs using utility-first Tailwind CSS framework.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Tailwind", "Frontend"]
    },
    {
        id: 27,
        title: "Design for Augmented Reality",
        instructor: "Alicia Tran",
        description: "Explore the principles of AR interface design and 3D user flows.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["AR", "Futuristic"]
    },
    {
        id: 28,
        title: "UX Career Coaching",
        instructor: "Brandon Lee",
        description: "1-on-1 coaching sessions for aspiring UX professionals.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Career", "Coaching"]
    },
    {
        id: 29,
        title: "Design Handoff Best Practices",
        instructor: "Chloe Foster",
        description: "Smooth designer-developer handoffs with design documentation tips.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Handoff", "Collaboration"]
    },
    {
        id: 30,
        title: "Human-Centered Design Sprint",
        instructor: "David Ochieng",
        description: "Solve real user problems with a week-long sprint methodology.",
        image: "/assets/services-offered-placeholder.png",
        tags: ["Sprint", "Human-Centered"]
    }
];


const ServiceCard: React.FC<{ service: Service; loading?: boolean }> = ({ service, loading }) => {
    if (loading) {
        return (
            <div className="bg-white border border-[#E8ECF4] rounded-xl p-3 overflow-hidden animate-pulse">
                <div className="rounded-xl mb-4 w-full h-[161px] bg-gray-200" />
                <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                </div>
                <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                <div className="flex items-center gap-2">
                    <div className="h-5 w-12 bg-gray-200 rounded" />
                    <div className="h-5 w-12 bg-gray-200 rounded" />
                </div>
            </div>
        )
    }
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

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onPreviousPage: () => void;
    onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    onPreviousPage,
    onNextPage
}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    if (totalPages <= 1) return null;
    const range = isMobile ? 1 : 2;
    const startPage = Math.max(2, currentPage - range);
    const endPage = Math.min(totalPages - 1, currentPage + range);
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mt-6 flex-wrap">
            <button
                onClick={onPreviousPage}
                disabled={currentPage === 1}
                className="rounded w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer border border-[#E8ECF4] disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => onPageChange(1)}
                className={`h-8 w-8 md:h-10 md:w-10 rounded border border-[#E8ECF4] cursor-pointer ${currentPage === 1 ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]' : ''}`}
            >
                1
            </button>
            {startPage > 2 && (
                <span className="w-8 h-8 md:w-10 md:h-10 flex text-[#252525] text-[16px] font-semibold items-center justify-center">...</span>
            )}
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded cursor-pointer text-[16px] leading-[21px] font-semibold transition-colors ${currentPage === pageNumber
                        ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]'
                        : 'border border-[#E8ECF4] hover:bg-gray-50 text-[#252525]'
                        }`}
                >
                    {pageNumber}
                </button>
            ))}
            {endPage < totalPages - 1 && (
                <span className="w-8 h-8 md:w-10 md:h-10 text-[#252525] text-[16px] font-semibold flex items-center justify-center">...</span>
            )}
            {totalPages > 1 && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    className={`h-8 w-8 md:h-10 md:w-10 rounded border border-[#E8ECF4] cursor-pointer ${currentPage === totalPages ? 'bg-[#3A96AF1F] border border-[#3A96AF] text-[#3A96AF]' : ''}`}
                >
                    {totalPages}
                </button>
            )}
            <button
                onClick={onNextPage}
                disabled={currentPage === totalPages}
                className="rounded w-8 h-8 md:w-10 md:h-10 flex items-center cursor-pointer justify-center border border-[#E8ECF4] disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

const ServicesOffered: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 8;

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, [currentPage]);

    const totalPages = Math.ceil(servicesData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentServices = servicesData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h1 className='text-[#252525] text-[20px] leading-[24px] tracking-[0.5px] font-bold mb-6'>
                Services Offered
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5'>
                {loading
                    ? Array.from({ length: itemsPerPage }).map((_, idx) => (
                        <ServiceCard key={idx} service={{ id: 0, title: '', instructor: '', description: '', image: '', tags: ['', ''] }} loading />
                    ))
                    : currentServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onPreviousPage={handlePreviousPage}
                onNextPage={handleNextPage}
            />
        </div>
    )
}

export default ServicesOffered
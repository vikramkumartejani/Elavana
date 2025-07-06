import { Service, Category } from './types';

function generateServices(count: number): Service[] {
    const baseTitles = [
        'KESSRA Training', 'UI/UX MasterClass', 'Career Strategy Session', 'UX Conference',
        'Food Festival', 'Web Development', 'Career Coaching', 'Content Writing'
    ];
    const baseCategories = [
        'Coaching', 'Design', 'Event', 'Conference', 'Event', 'Course', 'Coaching', 'Writing'
    ];
    const baseDescriptions = [
        'Complete training program with expert instructors to support your development.',
        'Master UI/UX design principles with hands-on projects and expert guidance.',
        'Strategic planning session to advance your career with expert advice.',
        'Premium UX conference with industry experts and networking opportunities.',
        'Culinary experience with expert chefs and food enthusiasts.',
        'Complete web development bootcamp with modern technologies.',
        'Personal career coaching to help you achieve your professional goals.',
        'Master content writing techniques with practical exercises.'
    ];
    const baseTags = [
        ['Professional', 'Certification'], ['Design', 'UI/UX'], ['Career', 'Strategy'], ['Conference', 'UX'],
        ['Food', 'Festival'], ['Programming', 'Web'], ['Career', 'Coaching'], ['Writing', 'Content']
    ];
    const baseDurations = [
        '8 weeks', '6 weeks', '2 hours', '3 days', '1 day', '12 weeks', '4 weeks', '6 weeks'
    ];
    const basePrices = [50, 150, 75, 300, 25, 450, 120, 85];
    const baseRatings = [4.8, 4.9, 4.7, 4.8, 4.6, 4.9, 4.8, 4.7];
    const baseStudents = [245, 189, 156, 324, 289, 412, 178, 234];
    const baseDates = [
        '2025-07-01', '2025-07-02', '2025-06-30', '2025-07-05',
        '2025-07-03', '2025-07-04', '2025-07-06', '2025-07-01'
    ];
    const instructor = 'Andre Muniz';
    const image = '/assets/card-placeholder.png';

    const services: Service[] = [];
    for (let i = 0; i < count; i++) {
        const idx = i % 8;
        services.push({
            id: i + 1,
            title: `${baseTitles[idx]} ${i + 1}`,
            instructor,
            category: baseCategories[idx],
            price: basePrices[idx] + (i % 10) * 5,
            rating: baseRatings[idx] - ((i % 5) * 0.1),
            students: baseStudents[idx] + (i * 3) % 50,
            duration: baseDurations[idx],
            image,
            description: baseDescriptions[idx],
            tags: baseTags[idx],
            datePosted: baseDates[idx % 8],
        });
    }
    return services;
}

export const servicesData: Service[] = generateServices(100);

export const categories: Category[] = [
    { id: 'all', name: 'All', icon: '/assets/icons/all-filters.svg' },
    { id: 'consultation', name: 'Consultation', icon: '/assets/icons/all-filters.svg' },
    { id: 'event', name: 'Event / Workshops', icon: '/assets/icons/all-filters.svg' },
    { id: 'masterclass', name: 'Masterclass', icon: '/assets/icons/all-filters.svg' },
    { id: 'conference', name: 'Conference / Events', icon: '/assets/icons/all-filters.svg' },
    { id: 'products', name: 'Products', icon: '/assets/icons/all-filters.svg' },
    { id: 'courses', name: 'Self-Paced Courses', icon: '/assets/icons/all-filters.svg' },
    { id: 'coaching', name: 'Coaching', icon: '/assets/icons/all-filters.svg' },
    { id: 'design', name: 'Design', icon: '/assets/icons/all-filters.svg' },
    { id: 'writing', name: 'Writing', icon: '/assets/icons/all-filters.svg' }
];

export const dateFilters = [
    { id: 'anytime', name: 'Anytime' },
    { id: 'today', name: 'Today' },
    { id: 'this-week', name: 'This Week' },
    { id: 'this-month', name: 'This Month' }
]; 
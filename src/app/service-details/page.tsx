import { servicesData } from '@/components/CustomerFlow/CustomerHome/data';
import ServiceDetails from '@/components/CustomerFlow/ServiceDetails/ServiceDetails';
import { notFound } from 'next/navigation';
import { Service } from '@/components/CustomerFlow/CustomerHome/types';

interface ServiceDetailsPageProps {
    searchParams: { id?: string };
}

export default function ServiceDetailsPage({ searchParams }: ServiceDetailsPageProps) {
    const { id } = searchParams;
    const service = servicesData.find((s: Service) => String(s.id) === String(id));
    if (!service) return notFound();
    return <ServiceDetails service={service} />;
} 
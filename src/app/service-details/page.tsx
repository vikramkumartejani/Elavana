import { servicesData } from '@/components/CustomerFlow/data';
import ServiceDetails from '@/components/CustomerFlow/ServiceDetails/ServiceDetails';
import { notFound } from 'next/navigation';
import { Service } from '@/components/CustomerFlow/types';

export default async function ServiceDetailsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const { id } = params;
    const service = servicesData.find((s: Service) => String(s.id) === String(id));
    if (!service) return notFound();
    return <ServiceDetails service={service} />;
} 
'use client';

import { useQuery } from '@tanstack/react-query';
import { ScientificMed } from '@/types/types';
import Loading from '@/app/components/loading';
import Image from 'next/image';

export default function Page({ params }: { params: { id: string } }) {
	async function getMed() {
		const res = await fetch(`https://methlab.vercel.app/api/obat/${params.id}`);
		const medicine = await res.json();
		return medicine;
	}

	const { data, isLoading, error } = useQuery<ScientificMed>(
		['medicine'],
		getMed
	);
	if (isLoading) return <Loading />;
	if (data === undefined || data === null) return <>Data Not Found</>;

	return (
		<>
			<div className='m-10'>
				<div className='text-4xl font-bold'>🟨{data?.name}</div>
				<div className='md:flex gap-4 p-5 items-center'>
					<Image
						className='flex-initial '
						src={data?.image}
						alt='medicine picture'
						width={500}
						height={500}
					></Image>
					<div>
						<div>
							<div className='text-xl font-bold '>🟨Manufacturer</div>
							<p className='font-bold text-l'>{data.manufacturer}</p>
						</div>
						<div>
							<div className='text-xl font-bold mt-3'>🟨Description</div>
							<p>{data.desc}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

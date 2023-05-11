'use client';

import { useQuery } from '@tanstack/react-query';
import MedCard from '@/components/MedCard';
import { ScientificMed } from '@/types/types';

export default function Scientific() {
	async function getMed() {
		const res = await fetch('https://methlab.vercel.app/api/obat');
		const med = await res.json();
		console.log(med);
		return med;
	}

	const { data, isLoading, error } = useQuery(['medicines'], getMed);
	if (isLoading) return <div className='text-8xl'>LOADING</div>;
	const { data: medicine }: { data: ScientificMed[] } = data;
	return (
		<>
			<div className='flex flex-wrap justify-evenly gap-2'>
				{medicine.map((element: ScientificMed, index: any) => {
					return <MedCard title={element.name} img={element.image} />;
				})}
			</div>
		</>
	);
}

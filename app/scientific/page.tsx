'use client';

import { useQuery } from '@tanstack/react-query';
import { ScientificMed } from '@/types/types';
import { useState } from 'react';
import MedCard from '@/app/components/MedCard';
import Loading from '../components/loading';

export default function Page() {
	async function getMed() {
		const res = await fetch('https://methlab.vercel.app/api/obat');
		const med = await res.json();
		return med;
	}

	const [query, setQuery] = useState<string>('');
	const { data, isLoading, error } = useQuery(['medicines'], getMed);
	if (isLoading) return <Loading />;
	const { data: medicine }: { data: ScientificMed[] } = data;
	return (
		<>
			<div className='flex items-center justify-center m-5'>
				<label htmlFor='search' className='mr-4'>
					<img src='svg/search.svg' alt='' />
				</label>
				<input
					onChange={(e) => setQuery(e.currentTarget.value)}
					type='text'
					placeholder='Search...'
					className='shadow appearance-none rounded-xl w-fit py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline'
				/>
			</div>
			<div className='flex flex-wrap justify-evenly gap-2'>
				{medicine
					.filter((element) => {
						if (query === '') {
							return element;
						}
						return element.name.toLowerCase().includes(query.toLowerCase());
					})
					.map((element: ScientificMed, index: any) => {
						return (
							<MedCard
								key={element.id}
								id={element.id}
								title={element.name}
								img={element.image}
							/>
						);
					})}
			</div>
		</>
	);
}

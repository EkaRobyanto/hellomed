'use client';

import React from 'react';
import Card from '@/app/Card';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='min-h-screen'>
			<div className='max-w-screen-xl mx-auto'>
				<section className='flex flex-col px-20 items-center py-2 '>
					<Image
						src={'/images/amico.png'}
						alt='logo'
						width={400}
						height={400}
						draggable={false}
						className='py-10'
					/>
					<div className=' text-white text-[12px] lg:text-lg font-normal text-center'>
						Kami adalah sumber informasi terpercaya yang didedikasikan untuk
						membantu Anda menemukan informasi lengkap mengenai obat-obatan.
						Tujuan kami adalah memberikan pengetahuan yang akurat, terkini, dan
						mudah dipahami tentang berbagai jenis obat yang tersedia di pasaran.
					</div>
				</section>
				<div className='flex flex-col px-20 mt-10 '>
					<h1 className='text-white font-bold text-2xl'>
						<span className='text-cYellow text-[30px] font-light'>| </span>
						Temukan Obat Berdasarkan Jenis
					</h1>
					<div className='py-5 flex flex-col gap-5 2xl:flex-row'>
						<Card
							title='Obat Tradisional'
							img='/images/tradisional.png'
							href='#'
						/>
						<Card title='Obat Medis' img='/images/medis.png' href='#' />
					</div>
				</div>
			</div>
		</div>
	);
}

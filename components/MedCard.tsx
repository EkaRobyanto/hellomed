import Image from 'next/image';

export default function MedCard({
	title,
	img,
}: {
	title: string;
	img?: string;
}) {
	return (
		<div className='card w-96 bg-base-100 shadow-xl'>
			<figure>
				<Image
					src={img ?? '/kekg'}
					alt={title}
					width={300}
					height={300}
				></Image>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
}

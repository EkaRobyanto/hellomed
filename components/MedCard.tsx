import Image from 'next/image';

export default function MedCard({
	title,
	img,
}: {
	title: string;
	img?: string;
}) {
	return (
		<div className='card w-96 max-h-96 bg-base-100 shadow-xl'>
			<figure>
				<Image
					src={img ?? '/kekg'}
					alt={title}
					height={250}
					width={250}
				></Image>
			</figure>
			<div className='card-body justify-end'>
				<h2 className='card-title'>{title}</h2>
				<div className='card-actions'>
					<button className='btn btn-primary '>Buy Now</button>
				</div>
			</div>
		</div>
	);
}

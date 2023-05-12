import Image from 'next/image';
import Link from 'next/link';

export default function MedCard({
	title,
	img,
	id,
}: {
	title: string;
	img?: string;
	id: number;
}) {
	return (
		<div className='card w-96 max-h-96 bg-base-100 shadow-xl'>
			<figure className='mt-4'>
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
					<Link href={`scientific/${id}`}>
						<button className='btn btn-primary '>Buy Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

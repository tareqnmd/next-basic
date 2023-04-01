import large from '@/assets/images/large.jpg';
import random from '@/assets/images/random.jpg';
import Image from 'next/image';
const NextImage = () => {
	return (
		<>
			<Image
				src={large}
				alt="Large Image"
				placeholder="blur"
				quality={100}
			/>
			<Image
				src={random}
				alt="Random Image"
				// priority
			/>
			<Image
				src="https://images.unsplash.com/photo-1680007889201-114ac772447d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
				alt="Src Image"
				width={500}
				height={500}
			/>
		</>
	);
};

export default NextImage;

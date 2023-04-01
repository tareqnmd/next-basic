import random from '@/assets/images/random.jpg';
import Image from 'next/image';
const NextImage = () => {
	return (
		<>
			<Image
				src={random}
				alt="Picture of the author"
				// priority
			/>
			<Image
				src="https://images.unsplash.com/photo-1680007889201-114ac772447d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
				alt="Picture of the author"
				width={500}
				height={500}
			/>
		</>
	);
};

export default NextImage;

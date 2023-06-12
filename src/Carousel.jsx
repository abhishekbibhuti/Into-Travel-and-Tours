import Images from './Images';

import React, { useState } from 'react';

const Carousel = () => {
	const [counter, setCounter] = useState(1);
	const [size, setSize] = useState(0);

	const carouselSlideRef = React.useRef(null);
	const carouselImageRefs = React.useRef([]);

	React.useEffect(() => {
		setSize(carouselImageRefs.current[0].clientWidth);
	}, []);

	const nextBtn = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const prevBtn = () => {
		setCounter((prevCounter) => prevCounter - 1);
	};

	React.useEffect(() => {
		carouselSlideRef.current.style.transition = 'transform 500ms ease-in-out';
		carouselSlideRef.current.style.transform = `translateX(${
			-size * counter
		}px)`;
	}, [counter, size]);

	return (
		<div
			style={{
				display: 'flex',
				width: '300px',
				overflow: 'hidden',
			}}
			id="carousel-slide"
			ref={carouselSlideRef}
		>
			<img
				ref={(el) => (carouselImageRefs.current[0] = el)}
				src={Images.bohol1}
				alt="Image 1"
				style={{
					width: 'inherit',
				}}
			/>
			<img
				ref={(el) => (carouselImageRefs.current[1] = el)}
				src={Images.cebu1}
				alt="Image 2"
			/>
			<img
				ref={(el) => (carouselImageRefs.current[2] = el)}
				src={Images.palawanCoron}
				alt="Image 3"
			/>

			<button onClick={prevBtn}>Previous</button>
			<button onClick={nextBtn}>Next</button>
		</div>
	);
};

export default Carousel;

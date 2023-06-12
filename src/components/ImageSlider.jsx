import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import the CSS file for animation styles

const ImageSlider = ({ images, interval }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, interval);

		return () => {
			clearInterval(timer);
		};
	}, [images, interval]);

	return (
		<div className="slider">
			{images.map((image, index) => (
				<img
					key={index}
					src={image}
					alt="Slider"
					className={`slider-image ${
						index === currentImageIndex ? 'active' : ''
					}`}
				/>
			))}
		</div>
	);
};

export default ImageSlider;

import React from 'react';
import ImageSlider from './components/ImageSlider';

const Reserved = () => {
	const Images = [
		'./img/philippines.jpg',
		'./img/india.jpg',
		'./img/japann.jpg',
		'./img/uae.jpg',
	];
	return (
		<div>
			<h1>Automatic Image Slider</h1>
			<ImageSlider images={Images} interval={3000} />
		</div>
	);
};

export default Reserved;

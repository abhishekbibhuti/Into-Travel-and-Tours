import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		animateScroll.scrollToTop({
			duration: 300, // Adjust the scroll duration as needed
			smooth: 'easeInOutExpo', // Adjust the scroll animation as needed
		});
	}, [pathname]);

	return null;
};

export default ScrollToTop;

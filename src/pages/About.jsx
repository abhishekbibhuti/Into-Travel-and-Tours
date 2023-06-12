import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Images from '../components/Images';
import AnimationOnScroll from '../components/AnimationOnScroll';

export default function About() {
	const [showContents, setShowContents] = useState(true);

	return (
		<main>
			{/* <AnimationOnScroll /> */}
			{/* About Page */}
			<div className="bg-about">
				<h1>Learn More About Our Journey</h1>
				{/* <a href="#about">|</a> */}
			</div>

			<section id="about" className="container about">
				<div className="row gy-lg-5 justify-content-center" id="about">
					<div className="col-12 about-section">
						<h2 className="mb-lg-4 mb-3 text-center">About Us</h2>

						<p className="text-center">
							We are an <i>accredited travel agency</i> based in the
							Philippines. <br /> Are you ready for an unforgettable adventure
							that will transport you to a tropical wonderland? Look no further
							than our premier travel agency, your gateway to the captivating
							beauty of the Philippines! Get ready to immerse yourself in a
							paradise unlike any other, where pristine beaches, lush
							rainforests, and vibrant cultural experiences await.
						</p>
					</div>

					{/* What we do */}
					<div className="col-12 what-we-do" id="what-we-do">
						<div className="row gx-5">
							<div className="col-lg-6 col-12">
								<h2 className="mb-lg-4 mb-3">What We Do?</h2>
								<div className="what-we-do-texts">
									{showContents && (
										<div className="mobile-texts">
											<p>
												At our travel agency, we understand that every traveler
												seeks a unique journey. Whether you're a sun-worshipper
												yearning for secluded beaches, an adrenaline junkie in
												search of thrilling water sports, or a history buff
												eager to delve into the rich cultural heritage, we have
												the perfect itinerary tailored...
												<button
													className="show-contents"
													onClick={() => setShowContents(false)}
												>
													Show more
												</button>
											</p>
										</div>
									)}

									{!showContents && (
										<div className="mobile-texts">
											<p>
												At our travel agency, we understand that every traveler
												seeks a unique journey. Whether you're a sun-worshipper
												yearning for secluded beaches, an adrenaline junkie in
												search of thrilling water sports, or a history buff
												eager to delve into the rich cultural heritage, we have
												the perfect itinerary tailored just for you.
											</p>

											<p>
												Picture yourself lounging on powdery white sands,
												surrounded by crystal-clear turquoise waters that
												stretch as far as the eye can see. Experience the
												breathtaking beauty of destinations like Boracay,
												Palawan, or Siargao, renowned for their postcard-perfect
												beaches. Dive into the vibrant underwater world and
												explore magnificent coral reefs, teeming with colorful
												marine life. Or embark on an island-hopping adventure,
												discovering hidden coves and secluded lagoons that will
												leave you in awe.
											</p>

											<p>
												For nature enthusiasts, our travel agency offers the
												chance to discover the lush wonders of the Philippines.
												Trek through the majestic Banaue Rice Terraces,
												marveling at the incredible engineering feat of ancient
												civilizations. Immerse yourself in the mystical
												landscapes of Bohol, where you'll encounter the famous
												Chocolate Hills and adorable tarsiers. Explore the
												enchanting underground river in Palawan, a UNESCO World
												Heritage Site, and be captivated by its mystical beauty.
											</p>

											<p>
												Culture and history buffs will find themselves immersed
												in a world of fascinating traditions and captivating
												stories. Explore the UNESCO-listed city of Vigan, where
												Spanish colonial architecture still stands proud. Visit
												the historic walled city of Intramuros in Manila and
												step back in time to the Spanish era. Immerse yourself
												in the vibrant festivals that celebrate the country's
												diverse heritage, from the colorful Ati-Atihan festival
												to the grand Sinulog festival in Cebu.
											</p>

											<p>
												When you choose our travel agency, you're not just
												booking a vacation; you're embarking on a journey of a
												lifetime. Our team of experienced travel experts will
												take care of every detail, from flights and
												accommodations to guided tours and local experiences,
												ensuring a seamless and unforgettable adventure.
											</p>

											<p>
												So why wait? Unlock the magic of the Philippines with
												our travel agency and create memories that will last a
												lifetime. Let the warmth of Filipino hospitality embrace
												you as you discover the hidden gems and unparalleled
												beauty of this tropical paradise. Book your dream
												getaway today and let us whisk you away to a world of
												awe-inspiring wonders. The Philippines is calling – are
												you ready to answer?
												<button
													className="show-contents"
													onClick={() => setShowContents(true)}
												>
													Show less
												</button>
											</p>
										</div>
									)}
								</div>

								<div className="what-we-do-texts">
									<div className="desktop-texts">
										<p>
											At our travel agency, we understand that every traveler
											seeks a unique journey. Whether you're a sun-worshipper
											yearning for secluded beaches, an adrenaline junkie in
											search of thrilling water sports, or a history buff eager
											to delve into the rich cultural heritage, we have the
											perfect itinerary tailored just for you.
										</p>

										<p>
											Picture yourself lounging on powdery white sands,
											surrounded by crystal-clear turquoise waters that stretch
											as far as the eye can see. Experience the breathtaking
											beauty of destinations like Boracay, Palawan, or Siargao,
											renowned for their postcard-perfect beaches. Dive into the
											vibrant underwater world and explore magnificent coral
											reefs, teeming with colorful marine life. Or embark on an
											island-hopping adventure, discovering hidden coves and
											secluded lagoons that will leave you in awe.
										</p>

										<p>
											For nature enthusiasts, our travel agency offers the
											chance to discover the lush wonders of the Philippines.
											Trek through the majestic Banaue Rice Terraces, marveling
											at the incredible engineering feat of ancient
											civilizations. Immerse yourself in the mystical landscapes
											of Bohol, where you'll encounter the famous Chocolate
											Hills and adorable tarsiers. Explore the enchanting
											underground river in Palawan, a UNESCO World Heritage
											Site, and be captivated by its mystical beauty.
										</p>

										<p>
											Culture and history buffs will find themselves immersed in
											a world of fascinating traditions and captivating stories.
											Explore the UNESCO-listed city of Vigan, where Spanish
											colonial architecture still stands proud. Visit the
											historic walled city of Intramuros in Manila and step back
											in time to the Spanish era. Immerse yourself in the
											vibrant festivals that celebrate the country's diverse
											heritage, from the colorful Ati-Atihan festival to the
											grand Sinulog festival in Cebu.
										</p>

										<p>
											When you choose our travel agency, you're not just booking
											a vacation; you're embarking on a journey of a lifetime.
											Our team of experienced travel experts will take care of
											every detail, from flights and accommodations to guided
											tours and local experiences, ensuring a seamless and
											unforgettable adventure.
										</p>

										<p>
											So why wait? Unlock the magic of the Philippines with our
											travel agency and create memories that will last a
											lifetime. Let the warmth of Filipino hospitality embrace
											you as you discover the hidden gems and unparalleled
											beauty of this tropical paradise. Book your dream getaway
											today and let us whisk you away to a world of
											awe-inspiring wonders. The Philippines is calling – are
											you ready to answer?
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-12">
								<img
									src={Images.whatWeDoImg}
									alt=""
									className="what-we-do img"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

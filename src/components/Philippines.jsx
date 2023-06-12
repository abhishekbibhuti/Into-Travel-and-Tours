import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from './Images';

export default function Philippines() {
	return (
		<main>
			<section className="country-section">
				<div className="container">
					<h1>Philippines</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
						voluptatum debitis aut non numquam distinctio nam nostrum molestiae
						ratione corporis ad architecto ut placeat id sapiente ullam sed
						dolorum laudantium accusantium illo atque hic, asperiores nemo quae?
						Accusantium id asperiores nesciunt dicta et, deleniti distinctio
						quidem odit, excepturi placeat laudantium!
					</p>
					<a href="#country-places">
						<span>
							Discover more places in <i>Philippines</i>{' '}
						</span>
					</a>
				</div>
			</section>

			<section className="main-container">
				<div className="container country-places" id="country-places">
					<h2 className="mt-4 text-center">
						Here are some popular tourist spots in the <i>Philippines</i>
					</h2>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.bohol1}
											alt="Bohol"
											className="col-lg-6 col-12 main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>Bohol</h1>
									<p>
										Bohol, located in the Philippines, is a captivating tourist
										destination known for its stunning natural beauty,
										historical sites, and unique attractions. This province
										offers a perfect blend of tropical landscapes, pristine
										beaches, lush countryside, and fascinating cultural
										heritage.{' '}
										<i>
											Here's a description of Bohol as a tourist destination:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">
											Breathtaking Natural Wonders:
										</h4>
										<p>
											{' '}
											Bohol is famous for its iconic attraction, the Chocolate
											Hills. These are a series of more than 1,200 uniformly
											shaped cone-like hills that turn chocolate brown during
											the dry season, creating a mesmerizing sight. Visitors can
											climb one of the hills to enjoy a panoramic view of the
											surrounding countryside. Another natural wonder is the
											Hinagdanan Cave, a mesmerizing underground cave with a
											crystal-clear natural pool that's perfect for swimming and
											exploration.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Pristine Beaches and Islands:
										</h4>
										<p>
											Bohol is home to pristine white sandy beaches and
											crystal-clear waters that are perfect for swimming,
											snorkeling, and diving. Alona Beach in Panglao Island is
											one of the most popular beach destinations, offering a
											vibrant atmosphere with a wide range of resorts,
											restaurants, and water sports activities. Other beautiful
											islands to explore include Balicasag Island and Pamilacan
											Island, which offer rich marine biodiversity and
											opportunities for diving and dolphin watching.
										</p>
										<h4 className="mt-lg-5 mt-4">Tarsier Conservation Area:</h4>
										<p>
											Bohol is renowned for being the habitat of the adorable
											and endangered Philippine Tarsier. Visitors can visit the
											Tarsier Conservation Area in Corella to observe these
											small primates in their natural environment. These
											nocturnal creatures are known for their unique features,
											such as their large round eyes and long fingers, making it
											a must-visit attraction for animal lovers.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Historical and Cultural Sites:
										</h4>
										<p>
											Bohol has a rich history and is dotted with historical
											landmarks and cultural sites. One of the most prominent is
											the Blood Compact Shrine in Tagbilaran City, which
											commemorates the first international treaty of friendship
											between the Spanish explorer Miguel Lopez de Legazpi and
											Datu Sikatuna, a local chieftain. The Baclayon Church, one
											of the oldest stone churches in the Philippines, is
											another significant historical site worth visiting.
										</p>
										<h4 className="mt-lg-5 mt-4">
											River Cruises and Adventure Activities:
										</h4>
										<p>
											A popular activity in Bohol is taking a scenic river
											cruise along the Loboc River. Visitors can enjoy a
											relaxing cruise while being entertained by local musicians
											and dancers. For adventure enthusiasts, there are options
											for zip-lining, ATV rides, and paddleboarding in different
											parts of the province, providing thrilling experiences
											amidst the lush countryside.
										</p>
										<h4 className="mt-lg-5 mt-4">Delicious Cuisine:</h4>
										<p>
											Bohol offers a delectable array of local dishes that
											reflect the province's culinary heritage. One must-try
											specialty is the "sikwate" (chocolate drink) paired with
											"puto maya" (sticky rice cooked in coconut milk) for a
											traditional Boholano breakfast. Seafood lovers will
											delight in the fresh and mouthwatering seafood dishes
											available in the coastal areas.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2">
							<h2 className="mb-3">
								Bohol, with its captivating landscapes, cultural richness, and
								adventurous activities, offers a unique and memorable experience
								for tourists. Whether you seek relaxation on pristine beaches,
								exploration of natural wonders, immersion in history and
								culture, or thrilling adventures, Bohol has something to offer
								every traveler.
							</h2>
						</div>
					</div>

					<hr className="hr"></hr>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.elnido1}
											alt="Bohol"
											className="col-lg-6 col-12 main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>El Nido</h1>
									<p>
										El Nido, located in the province of Palawan in the
										Philippines, is a breathtakingly beautiful tourist
										destination renowned for its pristine beaches, turquoise
										waters, towering limestone cliffs, and vibrant marine life.
										This tropical paradise offers a perfect blend of natural
										wonders, thrilling activities, and a tranquil atmosphere.{' '}
										<i>
											Here's a description of El Nido as a tourist destination:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">
											Stunning Island-Hopping Tours:
										</h4>
										<p>
											El Nido is famous for its island-hopping tours, which take
											visitors to the enchanting Bacuit Archipelago. These tours
											allow you to explore a series of picturesque islands,
											hidden lagoons, and secluded beaches. Some must-visit
											spots include the Big Lagoon, Small Lagoon, Secret Lagoon,
											and Seven Commandos Beach. Each destination offers unique
											landscapes, crystal-clear waters, and opportunities for
											swimming, snorkeling, and sunbathing.
										</p>
										<h4 className="mt-lg-5 mt-4">Towering Limestone Cliffs:</h4>
										<p>
											El Nido is surrounded by towering limestone cliffs that
											create a dramatic backdrop against the turquoise waters.
											These limestone formations are a sight to behold, rising
											majestically from the sea. The most iconic of these cliffs
											is the Karst Formation, commonly known as the "Taraw
											Cliff," which offers a challenging yet rewarding climb,
											providing panoramic views of El Nido town and the
											surrounding islands.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Pristine Beaches and Hidden Coves:
										</h4>
										<p>
											El Nido boasts some of the most pristine and breathtaking
											beaches in the world. Nacpan Beach, known for its long
											stretch of powdery white sand and crystal-clear waters, is
											a popular spot for sunbathing and swimming. Las Cabanas
											Beach is another picturesque beach offering stunning
											sunset views. Hidden Beach, as the name suggests, is a
											secluded cove accessible only by swimming through a small
											crevice, rewarding visitors with an untouched and tranquil
											paradise.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Diverse Marine Life and Snorkeling:
										</h4>
										<p>
											El Nido is a haven for marine biodiversity. The waters
											surrounding the islands are teeming with vibrant coral
											reefs and an abundance of marine life. Snorkeling
											enthusiasts can explore the underwater world and witness
											colorful coral gardens, tropical fish, and even sea
											turtles. Popular snorkeling spots include Shimizu Island,
											Dilumacad Island, and Matinloc Island.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Scenic Hiking and Eco-Tourism:
										</h4>
										<p>
											Beyond its stunning beaches and islands, El Nido offers
											opportunities for scenic hikes and eco-tourism activities.
											Taraw Peak, as mentioned earlier, provides a challenging
											but rewarding climb with panoramic views. Inland, you can
											explore the lush forests, waterfalls, and caves, such as
											the Nagkalit-Kalit Falls and the fascinating Cathedral
											Cave.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Tranquil and Relaxing Atmosphere:
										</h4>
										<p>
											El Nido has managed to maintain a laid-back and tranquil
											atmosphere despite its popularity among tourists. The town
											itself offers a range of accommodations, from
											budget-friendly guesthouses to luxury resorts, ensuring a
											comfortable and relaxing stay. Enjoy the slow pace,
											friendly locals, and the opportunity to disconnect from
											the hustle and bustle of everyday life.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2">
							<h2 className="mb-3">
								El Nido, with its stunning landscapes, rich marine life, and
								tranquil ambiance, is truly a tropical paradise that captivates
								the hearts of travelers. Whether you're seeking adventure,
								relaxation, or simply a connection with nature, El Nido offers a
								memorable and awe-inspiring experience that will stay with you
								long after you leave.
							</h2>
						</div>
					</div>

					<hr className="hr"></hr>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.batangas1}
											alt="Bohol"
											className="col-lg-6 col-12 main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>Batangas</h1>
									<p>
										Batangas, located in the Philippines, is a diverse and
										captivating tourist destination known for its beautiful
										beaches, picturesque landscapes, historical sites, and
										vibrant marine life. This province offers a perfect blend of
										natural wonders, cultural heritage, and recreational
										activities.{' '}
										<i>
											Here's a description of Batangas as a tourist destination:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">
											Stunning Beaches and Dive Sites:
										</h4>
										<p>
											Batangas is home to a plethora of stunning beaches along
											its coastline. The most famous beach destinations include
											Nasugbu, Laiya, and Mabini. These beaches boast powdery
											white sand, crystal-clear waters, and excellent diving and
											snorkeling opportunities. The coastal waters are teeming
											with vibrant coral reefs and marine life, making it a
											paradise for underwater enthusiasts.
										</p>
										<h4 className="mt-lg-5 mt-4">Anilao:</h4>
										<p>
											Anilao, located in Mabini, is a popular diving and
											snorkeling hub in Batangas. It is renowned for its rich
											marine biodiversity and colorful coral gardens. Divers can
											explore numerous dive sites and encounter an array of
											marine species, including tropical fish, sea turtles, and
											even occasional sightings of sharks. Anilao also offers a
											range of dive resorts and facilities for enthusiasts of
											all levels.
										</p>
										<h4 className="mt-lg-5 mt-4">Taal Volcano:</h4>
										<p>
											Batangas is home to the iconic Taal Volcano, one of the
											world's smallest active volcanoes. The volcano sits within
											Taal Lake and offers a dramatic and picturesque sight.
											Visitors can take a boat ride to the volcano island and
											hike up to the rim to enjoy breathtaking views of the
											crater lake. Taal Volcano is a must-visit attraction for
											nature lovers and adventure seekers.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Historical and Cultural Sites:
										</h4>
										<p>
											Batangas has a rich historical and cultural heritage. The
											province is dotted with centuries-old churches, ancestral
											houses, and heritage sites. One notable example is the
											Basilica de San Martin de Tours in Taal, a well-preserved
											Spanish colonial church known for its intricate design and
											Baroque architecture. The Taal Heritage Town is also worth
											exploring, offering a glimpse into the province's colonial
											past.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Trekking and Nature Exploration:
										</h4>
										<p>
											Batangas is blessed with lush mountains and scenic
											landscapes, making it a great destination for trekking and
											nature exploration. Mt. Maculot, Mt. Batulao, and Mt.
											Talamitam are popular hiking destinations that offer
											panoramic views from their summits. The Caleruega Church
											and Retreat Center, nestled in the mountains of Nasugbu,
											provides a serene and picturesque setting for spiritual
											retreats and nature walks.
										</p>
										<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
										<p>
											Batangas is known for its delectable local cuisine.
											Visitors can indulge in the famous Batangas beef bulalo, a
											savory soup made with beef shanks and bone marrow, which
											is a comfort food favorite. Other must-try dishes include
											lomi (thick egg noodles in a flavorful broth), tawilis
											(freshwater sardines), and suman (sticky rice cakes).
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2">
							<h2 className="mb-3">
								Batangas, with its diverse attractions and natural beauty,
								offers a memorable experience for tourists. Whether you seek
								beachside relaxation, underwater adventures, cultural immersion,
								or outdoor activities, Batangas has something to offer everyone.
								Its proximity to Metro Manila makes it an accessible and ideal
								destination for a quick getaway or an extended vacation.
							</h2>
						</div>
					</div>

					<hr className="hr"></hr>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.palawanElnido}
											alt="Bohol"
											className="col-lg-6 col-12 main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>Palawan</h1>
									<p>
										Palawan, located in the western part of the Philippines, is
										an enchanting and widely acclaimed tourist destination known
										for its pristine beaches, turquoise waters, lush
										rainforests, and extraordinary biodiversity. This province
										is often referred to as the "Last Frontier" due to its
										untouched natural beauty and is recognized as one of the
										world's best islands.{' '}
										<i>
											Here's a description of Palawan as a tourist destination:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">El Nido:</h4>
										<p>
											El Nido, located in northern Palawan, is a breathtaking
											paradise renowned for its stunning limestone cliffs,
											crystal-clear waters, and hidden lagoons. It offers
											incredible island-hopping tours that take visitors to
											picturesque destinations like the Big Lagoon, Small
											Lagoon, Secret Lagoon, and Seven Commandos Beach. The
											beauty of El Nido's landscapes, both above and below the
											water, makes it a dream destination for snorkeling,
											diving, and beach lovers.
										</p>
										<h4 className="mt-lg-5 mt-4">Puerto Princesa:</h4>
										<p>
											Puerto Princesa, the capital city of Palawan, is a vibrant
											and eco-friendly city that serves as the gateway to the
											province. It is home to the world-famous Puerto Princesa
											Subterranean River National Park, a UNESCO World Heritage
											Site and one of the New Seven Wonders of Nature. Visitors
											can embark on a mesmerizing boat tour through an
											underground river surrounded by breathtaking limestone
											formations and diverse wildlife.
										</p>
										<h4 className="mt-lg-5 mt-4">Coron:</h4>
										<p>
											Coron, located in the Calamian Islands in northern
											Palawan, is renowned for its dramatic landscapes and
											pristine beaches. It is known for its crystal-clear lakes,
											including the iconic Kayangan Lake, which is often hailed
											as one of the cleanest lakes in Asia. Coron is also a
											haven for divers and snorkelers, with numerous Japanese
											shipwrecks from World War II that have become vibrant
											coral reefs, attracting a variety of marine life.
										</p>
										<h4 className="mt-lg-5 mt-4">Calamian Islands:</h4>
										<p>
											Apart from Coron, the Calamian Islands offer other
											tropical gems like Busuanga, Culion, and Linapacan. These
											islands feature secluded beaches, vibrant coral reefs, and
											opportunities for island-hopping and water sports. The
											unspoiled beauty and tranquility of these islands make
											them a perfect escape for those seeking relaxation and
											solitude.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Underground Rivers and Caves:
										</h4>
										<p>
											Palawan is home to several captivating underground rivers
											and cave systems. In addition to the Puerto Princesa
											Subterranean River, there are other notable caves to
											explore, such as the Ugong Rock Cave in Puerto Princesa,
											where visitors can climb and crawl through rock formations
											and marvel at stalactites and stalagmites.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Wildlife and Nature Reserves:
										</h4>
										<p>
											Palawan is renowned for its exceptional biodiversity and
											is home to several protected areas and nature reserves.
											The Tubbataha Reefs Natural Park, a UNESCO World Heritage
											Site, is a haven for divers and snorkelers, offering some
											of the best-preserved coral reefs in the world. The
											Calauit Safari Park in Busuanga is home to various African
											and endemic animal species, providing a unique wildlife
											experience.
										</p>
										<h4 className="mt-lg-5 mt-4">Cultural Immersion:</h4>
										<p>
											Palawan is also rich in cultural heritage. The indigenous
											tribes of Palawan, such as the Batak and Tagbanua, have
											preserved their traditions and craftsmanship. Visitors can
											learn about their way of life, witness traditional
											rituals, and purchase locally made handicrafts and
											products.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2">
							<h2 className="mb-3">
								Palawan, with its breathtaking natural beauty, rich
								biodiversity, and a wide range of activities and attractions,
								offers an unforgettable experience for travelers. Whether you're
								seeking stunning beaches, exploring underwater wonders,
								immersing in nature, or embracing local culture, Palawan has it
								all. It is a destination that promises to leave you in awe and
								create lasting memories
							</h2>
						</div>
					</div>

					<hr className="hr"></hr>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.zambalesSubic}
											alt="Bohol"
											className="col-lg-6 col-12 main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>Zambales</h1>
									<p>
										Zambales, located on the western coast of Luzon in the
										Philippines, is a picturesque and diverse tourist
										destination known for its stunning beaches, majestic
										mountains, vibrant marine life, and historical sites. This
										province offers a mix of natural beauty, outdoor adventures,
										and cultural experiences.{' '}
										<i>
											Here's a description of Zambales as a tourist destination:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">Pristine Beaches:</h4>
										<p>
											Zambales boasts a stretch of beautiful beaches along its
											coastline, making it a haven for beach lovers. Crystal
											Beach in San Narciso is a popular destination known for
											its clear waters and excellent surfing conditions.
											Anawangin Cove and Nagsasa Cove in Pundaquit are renowned
											for their picturesque landscapes, with pristine beaches
											nestled amidst lush forests and surrounded by towering
											mountains. Visitors can enjoy sunbathing, swimming,
											snorkeling, and camping in these serene coastal areas.
										</p>
										<h4 className="mt-lg-5 mt-4">Mountaineering and Hiking:</h4>
										<p>
											Zambales is blessed with majestic mountains that offer
											exhilarating trekking and hiking opportunities. Mount
											Pinatubo, known for its dramatic crater lake, attracts
											adventurers from around the world. Trekking to its summit
											rewards hikers with breathtaking views of the turquoise
											lake. Other notable mountains include Mount Tapulao,
											renowned for its challenging trails and panoramic vistas,
											and Mount Balingkilat, which offers a picturesque coastal
											view.
										</p>
										<h4 className="mt-lg-5 mt-4">Subic Bay:</h4>
										<p>
											Subic Bay, a former American naval base, has transformed
											into a thriving tourist destination. It offers a range of
											activities, including water sports, yachting, and
											island-hopping tours. Subic Bay is also home to the Ocean
											Adventure, an interactive marine park where visitors can
											witness dolphin and sea lion shows, swim with dolphins,
											and learn about marine conservation.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Ancestral Houses and Historical Sites:
										</h4>
										<p>
											Zambales has a rich historical and cultural heritage. The
											province is home to ancestral houses that showcase Spanish
											colonial architecture, such as Casa San Miguel in San
											Antonio and Casa San Miguel in Botolan. Visitors can
											explore these houses and gain insights into the local
											history and heritage. The San Salvador del Mundo Church,
											also known as Botolan Church, is a notable religious site
											that dates back to the 17th century.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Beachside Resorts and Water Activities:
										</h4>
										<p>
											Zambales offers a variety of beachside resorts and
											accommodations that cater to different budgets and
											preferences. Visitors can indulge in various water
											activities, such as jet skiing, kayaking, paddleboarding,
											and banana boating. The warm waters and favorable wind
											conditions in Zambales also make it a popular spot for
											kiteboarding and windsurfing.
										</p>
										<h4 className="mt-lg-5 mt-4">Local Cuisine:</h4>
										<p>
											Zambales delights food enthusiasts with its unique local
											cuisine. The province is known for its delicious seafood
											dishes, particularly the mouthwatering "bagnet" (crispy
											pork belly) and "buro" (fermented rice with fish or
											shrimp). Don't miss the chance to sample these authentic
											local flavors during your visit.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2t-4">
							<h2 className="mb-3">
								Zambales, with its stunning beaches, scenic mountains,
								historical sites, and exciting water activities, offers a
								diverse range of experiences for travelers. Whether you're
								seeking relaxation, adventure, or a glimpse into local culture
								and history, Zambales is sure to captivate you with its natural
								beauty and warm hospitality
							</h2>
						</div>
					</div>

					<hr className="hr"></hr>

					<div className="row mt-lg-5 mt-4">
						<div className="col-12">
							<div className="row gx-5 country-place">
								<div className="carousel-container col-lg-6 col-12">
									<div className="carousel-slide" id="carouselSlide">
										<img
											src={Images.cebu2}
											alt="Boracay"
											className="main-img"
										/>
									</div>
								</div>
								<div className="col-lg-6 col-12 country-places__side">
									<h1>Cebu</h1>
									<p>
										Cebu, located in the central part of the Philippines, is a
										vibrant and captivating tourist destination known for its
										rich history, stunning white sand beaches, and remarkable
										marine biodiversity. This province offers a perfect
										combination of cultural attractions, natural wonders, and
										thrilling adventures.{' '}
										<i>
											Here's a description of Cebu as a tourist destination,
											highlighting the Oslo whale sharks and white sand beaches:
										</i>
									</p>

									<div
										className="country-places__decrip"
										style={{
											paddingRight: '20px',
											borderRight: '1px solid grey',
										}}
									>
										<h4 className="mt-lg-5 mt-4">Oslob Whale Sharks:</h4>
										<p>
											Cebu is famous for its extraordinary interaction with
											whale sharks in the town of Oslob. Visitors have the
											opportunity to swim and snorkel alongside these gentle
											giants, creating unforgettable memories. The whale sharks,
											known as "butanding" in the local language, are the
											largest fish species in the world and encountering them up
											close is a truly awe-inspiring experience. Responsible
											tourism practices ensure the well-being and conservation
											of these magnificent creatures.
										</p>
										<h4 className="mt-lg-5 mt-4">White Sand Beaches:</h4>
										<p>
											Cebu is blessed with pristine white sand beaches that are
											a paradise for sun-seekers and water enthusiasts. Mactan
											Island, just off the coast of Cebu City, offers a range of
											beach resorts with crystal-clear waters and powdery white
											sand. Visitors can relax, swim, snorkel, and engage in
											various water sports activities such as jet skiing,
											parasailing, and island-hopping. Badian, Moalboal, and
											Malapascua Island are other popular destinations with
											beautiful beaches and vibrant marine life.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Historic and Cultural Sites:
										</h4>
										<p>
											Cebu has a rich history dating back to the arrival of
											Spanish colonizers in the 16th century. The city of Cebu
											is known as the "Cradle of Christianity" in the
											Philippines as it was the first Spanish settlement in the
											country. The Basilica Minore del Santo Niño, located in
											Cebu City, houses the oldest religious relic in the
											Philippines and is a significant pilgrimage site. Fort San
											Pedro, built by the Spanish in the 17th century, is
											another historical landmark worth exploring.
										</p>
										<h4 className="mt-lg-5 mt-4">Sinulog Festival:</h4>
										<p>
											Cebu is renowned for its vibrant festivals, with the
											Sinulog Festival being the most celebrated. Held every
											January, the festival pays homage to the Santo Niño, the
											child Jesus. It features colorful street parades, cultural
											dances, and a grand procession showcasing the rich
											cultural heritage of Cebu. The Sinulog Festival attracts
											both local and international visitors who immerse
											themselves in the lively festivities.
										</p>
										<h4 className="mt-lg-5 mt-4">
											Scenic Natural Attractions:
										</h4>
										<p>
											Beyond its stunning beaches, Cebu offers scenic natural
											attractions that are a treat for nature lovers. Kawasan
											Falls in Badian is a multi-tiered waterfall surrounded by
											lush greenery, offering a refreshing swimming experience.
											Osmeña Peak, the highest point in Cebu, rewards hikers
											with panoramic views of the surrounding mountains and
											islands. Sumilon Island, located off the southeastern
											coast, is known for its crystal-clear waters, pristine
											beaches, and vibrant coral gardens, making it a popular
											spot for snorkeling and diving.
										</p>
										<h4 className="mt-lg-5 mt-4">Culinary Delights:</h4>
										<p>
											Cebu is a food lover's paradise, renowned for its
											flavorful and unique dishes. The lechon (roasted pig) of
											Cebu is considered one of the best in the country, with
											its crispy skin and succulent meat. Other local delicacies
											include "puso" (rice wrapped in coconut leaves), "sutukil"
											(grilled, stewed, and raw seafood), and "danggit" (dried
											fish). Exploring the local food scene in Cebu is a
											delightful culinary adventure.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mt-lg-4 mt-2">
							<h2 className="mb-3">
								Cebu, with its rich cultural heritage, breathtaking natural
								attractions, and captivating marine life, offers a diverse range
								of experiences for tourists. Whether you're seeking close
								encounters with whale sharks, relaxing on pristine beaches,
								immersing in history and culture, or indulging in mouthwatering
								cuisine, Cebu has something to offer everyone. It is a
								destination that promises an unforgettable and fulfilling
								journey
							</h2>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

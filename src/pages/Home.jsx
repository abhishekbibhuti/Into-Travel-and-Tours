import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from '../components/Images';
// import Reserved from '../Reserved';

export default function Home() {
	return (
		<main>
			{/* <Reserved /> */}
			<section className="container-fluid hero">
				<div className="hero-elements">
					<h1>Into Travel and Tours</h1>
					<h2
						style={{
							letterSpacing: '2px',
						}}
					>
						"ALWAYS AT ITS BEST!!!"
					</h2>
					<a href="mailto: Into.travel01@gmail.com" target="_blank">
						Send us an Email
					</a>
					<div className="scroll-down">
						{/* <a
							href="#countriesHome"
							style={{
								background: 'none',
								padding: 0,
							}}
						>
							Scoll
						</a> */}
					</div>
				</div>
			</section>

			<div className="container countries-home" id="countriesHome">
				<h1 className="text-center mt-5 mb-5 fw-light">
					Discover Inclusive City Attractions and Tours
				</h1>
				<div className="flex-container">
					<div className="row mb-4 g-4">
						<div className="col-lg-3 col">
							<Link to="/philippines">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.philippines}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Philippines</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/india">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.india}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>India</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.japan}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Japan</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.uae}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>UAE</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/philippines">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.hongkong}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Hongkong</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.singapore}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Singapore</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.indo}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Indonesia</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.china}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>China</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>

					<div className="row g-4">
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.thailand}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Thailand</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.cambodia}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Cambodia</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.vietnam}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Vietnam</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.malaysia}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Malaysia</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.korea}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>South Korea</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.australia}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Australia</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.macau}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Macau</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.maldives}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Maldives</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

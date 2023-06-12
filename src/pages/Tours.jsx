import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from '../components/Images';
import { Link } from 'react-router-dom';

export default function Tours() {
	return (
		<main>
			{/* Hero of Tour Packages */}
			<section>
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li
							data-target="#myCarousel"
							data-slide-to="0"
							className="active"
						></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div
								className="overlay-img"
								style={{ backgroundImage: 'url(../img/philippines.jpg)' }}
							></div>
							<div className="container">
								<h1>Philippines</h1>
							</div>
						</div>
						<div className="carousel-item">
							<div
								className="overlay-img"
								style={{ backgroundImage: 'url(../img/taiwan.jpg)' }}
								href="#about"
							></div>
							<div className="container">
								<h1>Taiwan</h1>
							</div>
						</div>
						<div className="carousel-item">
							<div
								className="overlay-img"
								style={{ backgroundImage: 'url(../img/japan.jpg)' }}
							></div>
							<div className="container">
								<h1>Japan</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End of Hero Tour Packages */}

			<section className="tour-package">
				<div className="container-fluid my-5">
					<h1 className="mt-5 mb-4 text-center fw-light">
						Discover Inclusive City Attractions and Tours
					</h1>
					<div className="container-fluid mt-4">
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
							<Link to="/">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
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
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.newzealand}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Newzealand</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.laos}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Laos</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.iceland}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Iceland</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.myanmmar}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Myanmmar</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.brunie}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Brunie</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<div className="row">
							<Link to="/">
								<div className="card">
									<div className="img-container">
										<img
											src={Images.taiwan}
											alt="Philippines"
											className="card-img-top"
										/>
									</div>
									<div className="card-body">
										<div className="card-title">
											<h3>Taiwan</h3>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

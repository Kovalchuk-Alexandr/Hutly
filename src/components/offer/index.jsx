import "./style.css";
import Button from "../button";
import offerImg from "/img/offer/offer-img.jpg";
import offerImg2x from "/img/offer/offer-img@2x.jpg";
import BgDecoration from "../bg-decor";

const Offer = () => {
	return (
		<section className="offer">
			<div className="container">
				<div className="offer__content">
					{/* Background Frame */}
					<div className="offer__bg-decoration offer__bg-decoration--1">
						<BgDecoration />
					</div>
					<div className="offer__bg-decoration offer__bg-decoration--2">
						<BgDecoration />
					</div>

					{/* <div className="offer__bg-shape"> */}
					<img
						className="offer__img"
						src={offerImg}
						srcSet={`${offerImg2x} 2x`}
						alt="Offer Image"
					/>
					{/* </div> */}

					{/* Main Content */}
					<div className="offer__main">
						<div className="offer__main-wrapper">
							{/* Statistics */}
							<div className="offer__stats">
								<span className="offer__stats-label">
									Satisfied Clients
								</span>
								<span className="offer__stats-value">
									8.4M+
								</span>
							</div>

							<div className="offer__text">
								<h2 className="offer__heading">
									We can bring to life everything you've ever
									envisioned and dreamed of – your ideals and
									desires are our creations.
								</h2>
								<p className="offer__description">
									Our purpose is to transform your wildest
									dreams into reality. Regardless of how
									unconventional your vision may be, we
									possess the capability to craft your dream
									home, fulfilling your every desire.
								</p>
								<Button className="offer__btn">See More</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;

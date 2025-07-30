import "./style.css";
import CapitalInfo from "./capital";
import VisionSection from "./vision";

const HeroBackground = () => {
	return (
		<div className="hero-bg">
			{/* <div className="hero-bg-shape hero-bg-shape-1"></div>
			<div className="hero-bg-shape hero-bg-shape-2"></div>
			<div className="hero-bg-image"></div> */}
		</div>
	);
};


const MainHeading = () => {
	return (
		<div className="main-heading">
			<h1>We craft the<br />future dwelling.</h1>
		</div>
	);
};


const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<HeroBackground />
				<div className="hero-content">
					<div className="hero-left">
						<CapitalInfo />
						<VisionSection />
					</div>
					<div className="hero-right">
						{/* <MainHeading /> */}
						<div className="main-heading">
							<h1>
								We craft the
								<br />
								future dwelling.
							</h1>
						</div>

						<img src="/img/hero/hero-img.jpg" alt="hero-img" className="hero-img" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

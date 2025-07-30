import "./style.css";
import CapitalInfo from "./capital";
import VisionSection from "./vision";
import Craft from "./craft";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-content">
					<CapitalInfo />
					<VisionSection />
					<Craft />
				</div>
			</div>
		</section>
	);
};

export default Hero;

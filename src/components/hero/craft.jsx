const Craft = () => {
    return (
		<div className="hero-right">
			<div className="main-heading">
				<h1>We craft the future dwelling.</h1>
			</div>

			<picture className="hero-img">
				<source srcset="./img/hero/hero-img.webp" type="image/webp" />
				<source srcset="./img/hero/hero-img.jpg" type="image/jpeg" />
				<img src="./img/hero/hero-img.jpg" alt="hero img" />
			</picture>
		</div>
	);
};

export default Craft;

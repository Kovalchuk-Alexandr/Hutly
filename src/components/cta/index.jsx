import React from "react";
import "./style.css";
import Logo from "../logo";
import LogoCta from "../logo-cta";

const Cta = () => {
	const menuItems = [
		{ name: "About Us", href: "#!" },
		{ name: "Management", href: "#!" },
		{ name: "Project", href: "#!" },
		{ name: "FAQ's", href: "#!" },
	];

	return (
		<section className="cta">
			<div className="container">
				<div className="cta__wrapper">
					<div className="cta__content">
						<div className="cta__text-section">
							<h2 className="cta__heading">
								Start Your Project Now!
							</h2>
							<p className="cta__description">
								Made for you convenience for a more beautiful future for you and your family
							</p>
						</div>
						<a href="#!" className="cta__button">
							Contact Us
						</a>
					</div>
					<div className="cta__footer">
						<div className="cta__footer-content">
							<div className="cta__logo-section">
								<div className="cta__logo">
									<LogoCta width={97} height={40} fill="#fff" />
								</div>
								{/* <span className="cta__registered">®</span> */}
							</div>
							<nav className="cta__nav">
								<ul className="cta__nav-list">
									{menuItems.map((item) => (
										<li key={item.name} className="cta__nav-item">
											<a href={item.href} className="cta__nav-link">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;

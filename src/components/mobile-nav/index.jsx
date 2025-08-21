import "./style.css";
import menuItems from "../../data/menu-items";
import LogoCta from "../logo-cta";
import { useTheme } from "../../hooks/useTheme";

const MobileNav = ({ className = "", onClick }) => {
	// console.log("in MobileNav className:");
	// console.log({ className });
	const { getLogoFillColor } = useTheme();

	return (
		<>
			<div className={`mobile-nav ${className}`.trim()}>
				{/* <div className="nav__btn-set"> */}
				<button className="mobile-nav__btn">
					<a href="#!" className="btn">
						Contac Us
					</a>
				</button>
				{/* </div> */}

				<ul className="mobile-nav-list">
					{menuItems.map((item) => (
						<li key={item.name} className="mobile-nav-item">
							<a
								href={item.href}
								className="mobile-nav-link"
								// onClick={(e) => {
								// 	e.preventDefault();
								// 	handleItemClick(item.name);
								// }}
							>
								{item.name}
							</a>
						</li>
					))}
					{/* <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Home</a></li>
                    <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">About</a></li>
                    <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Services</a></li>
                    <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Contact</a></li> */}
				</ul>

				<a href="#!" className="nav__logo">
					<LogoCta width={97} height={40} fill={getLogoFillColor()} />
					{/* <img src="./img/logo.svg" alt="Logo Powfections" /> */}
				</a>
			</div>

			<div
				className={`mobile-nav-fade ${className}`.trim()}
				onClick={onClick}
			></div>
		</>
	);
};

export default MobileNav;

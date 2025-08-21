import React, { useState } from "react";
import "./style.css";
// import logo from "/logo-dark-full.svg";
import Logo from "../logo";
import MobileNavBtn from "../mobile-nav-btn";
import MobileNav from "../mobile-nav";
import { useTheme } from "../../hooks/useTheme";

const Nav = () => {
	const [activeItem, setActiveItem] = useState("Home"); // Храним название активного пункта
	const [isMobileActive, setMobileActive] = useState(""); // Является ли мобильная навигация активной
	const { getLogoFillColor } = useTheme();

	// console.log("Logo Fill color: ");
	// console.log(getLogoFillColor());

	const menuItems = [
		{ name: "Home", href: "#!" },
		{ name: "Project", href: "#!" },
		{ name: "About Us", href: "#!" },
		{ name: "FAQ's", href: "#!" },
	];

	const handleItemClick = (itemName) => {
		setActiveItem(itemName);
	};

	const handleMobileBtnClick = () => {
		setMobileActive(isMobileActive === "" ? "active" : "");
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<nav className="nav">
						<a href="#!" className="nav__logo">
							{/* <img src={logo} alt="logo" className="nav__logo-img" /> */}
							{/* <Logo /> */}
							<Logo
								width={136}
								height={61}
								fill={getLogoFillColor()}
							/>
						</a>
						<ul className="nav__list ">
							{menuItems.map((item) => (
								<li
									key={item.name}
									className={`nav__item ${
										activeItem === item.name
											? "nav__item--active"
											: ""
									}`}
								>
									<a
										href={item.href}
										className="nav__link"
										onClick={(e) => {
											e.preventDefault();
											handleItemClick(item.name);
										}}
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>

						<MobileNavBtn
							className={isMobileActive}
							onClick={handleMobileBtnClick}
						/>

						<a href="#!" className="nav__btn">
							Contact Us
						</a>
					</nav>
				</div>
			</header>

			<MobileNav
				className={isMobileActive}
				onClick={handleMobileBtnClick}
			/>
		</>
	);
};

export default Nav;

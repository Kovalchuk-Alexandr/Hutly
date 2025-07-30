import React, { useState } from "react";
import "./style.css";
// import logo from "/logo-dark-full.svg";
import Logo from "../logo";

const Nav = () => {
	const [activeItem, setActiveItem] = useState("Home"); // Храним название активного пункта

	const menuItems = [
		{ name: "Home", href: "#" },
		{ name: "Project", href: "#" },
		{ name: "About Us", href: "#" },
		{ name: "FAQ's", href: "#" },
	];

	const handleItemClick = (itemName) => {
		setActiveItem(itemName);
	};

	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					<a href="#!" className="nav__logo">
						{/* <img src={logo} alt="logo" className="nav__logo-img" /> */}
						<Logo />
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
					<a href="#!" className="nav__btn">
						Contact Us
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Nav;

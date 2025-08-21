import React, { useEffect, useState } from "react";
import "./style.css";

const ThemeToggle = () => {
    const [activeItem, setActiveItem] = useState("Home"); // Храним название активного пункта

	const menuItems = [
		{ name: "Light"},
		{ name: "Medium"},
		{ name: "Dark"},
	];

	const handleItemClick = (itemName) => {
		setActiveItem(itemName);
	};
    return (
        <div className="themeToggle">
            <button className="themeToggle__button">
                <span className="themeToggle__button-icon"></span>
                Light
            </button>
            <button className="themeToggle__button">
                <span className="themeToggle__button-icon"></span>
                Medium
            </button>
            <button className="themeToggle__button">
                <span className="themeToggle__button-icon"></span>
                Dark
            </button>
        </div>
    );
}

export default ThemeToggle;

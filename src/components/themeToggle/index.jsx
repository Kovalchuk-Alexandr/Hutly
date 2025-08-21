import React, { useEffect, useState } from "react";
import "./style.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("Light"); // Храним название активного пункта

	const menuItems = [
		{ name: "Light"},
		{ name: "Medium"},
		{ name: "Dark"},
	];

	const handleItemClick = (itemName) => {
		setTheme(itemName);
		// Сохраняем выбор пользователя в localStorage
		localStorage.setItem("selectedTheme", itemName);
	};

    useEffect(() => {
		// При загрузке компонента проверяем сохраненную тему
		const savedTheme = localStorage.getItem("selectedTheme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	useEffect(() => {
		// console.log("theme: %s", theme);
		document.body.setAttribute("data-theme", theme.toLowerCase());
	}, [theme]);

    return (
        <nav className="themeToggle">
            <ul className="themeToggle__list">
            {menuItems.map((item) => (
							<li
								key={item.name}
								className={`themeToggle__item ${
									theme === item.name
										? "themeToggle__item--active"
										: ""
								}`}
							>
                                <button
                                        className="themeToggle__button"
                                        onClick={() => {
										handleItemClick(item.name);
									}}
                                    >
                                    <span className="themeToggle__button-icon"></span>
                                    {item.name}
                                </button>
							</li>
						))}
            </ul>
        </nav>
    );
}

export default ThemeToggle;

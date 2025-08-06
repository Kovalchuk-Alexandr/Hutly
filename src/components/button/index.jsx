import React from 'react';
import './style.css';

const Button = ({
	children,
	variant = "primary",
	className = "",
	onClick,
	...props
}) => {
	const buttonClasses = `btn ${
		variant === "outline" ? "btn-outline" : ""
	} ${className}`.trim();

	// console.log("children:");
	// console.log({children});
	// console.log("variant:");
	// console.log({variant});
	// console.log("className:");
	// console.log({className});
	// console.log("props:");
	// console.log({props});

	return (
		<button className={buttonClasses} onClick={onClick} {...props}>
			{children}
		</button>
	);
};

export default Button;

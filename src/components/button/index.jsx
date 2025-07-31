import React from 'react';
import './style.css';

const Button = ({ 
	children, 
	variant = 'primary', 
	className = '', 
	onClick,
	...props 
}) => {
	const buttonClasses = `btn ${variant === 'outline' ? 'btn-outline' : ''} ${className}`.trim();
	
	return (
		<button 
			className={buttonClasses}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button; 
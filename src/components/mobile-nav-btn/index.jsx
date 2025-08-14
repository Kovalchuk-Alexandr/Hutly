import "./style.css"

const MobileNavBtn = ({ className = "", onClick }) => {
	// console.log("in MobileNavBtn className:");
	// console.log({className});

	return (
		<button
			className={`mobile-nav-btn ${className}`.trim()}
			onClick={onClick}
		>
			<div className={`mobile-nav-btn__icon ${className}`.trim()}>
				{/* <!-- Если используются разные кнопки для откр/закр -->
                <!-- <img class="nav-img" src="./img/ui/menu_right.svg" alt="Menu button" > --> */}
			</div>
		</button>
	);
};

export default MobileNavBtn;

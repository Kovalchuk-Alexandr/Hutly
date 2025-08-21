import "./style.css";

const mobileNav = ({className="",}) => {
	return (
        <div className="mobile-nav ">
        {/* <!-- Если используются разные кнопки для откр/закр -->
        <!-- <button class="mobile-close-btn">
            <img src="./img/ui/close_round.svg" alt="Close button" width="24" height="24">
        </button> --> */}

         <div className="nav__btn-set">
            <button class="nav__btn">
                <a href="#!" class="btn">Book</a>
            </button>

            {/* <!-- Mobile button open -->
            <!-- <button class="mobile-nav-btn">
                <div class="mobile-nav-btn__icon"></div>
            </button> --> */}
        </div>

        <ul className="mobile-nav-list">
            <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Home</a></li>
            <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">About</a></li>
            <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Services</a></li>
            <li class="mobile-nav-item"><a href="#!" class="mobile-nav-link">Contact</a></li>
        </ul>

        <a href="#!" class="nav__logo">
            <img src="./img/logo.svg" alt="Logo Powfections" />
        </a>
    </div>

    {/* <!-- ======= Fade для мобильной навигации  =================== --> */}
	<div class="mobile-nav-fade"></div>
	);
}

export default mobileNav;

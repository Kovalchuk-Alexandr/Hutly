import './style.css';
import logo from '/logo-dark-full.svg';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    const items = document.querySelectorAll('.nav__item');

    useEffect(() => {
        items.forEach(item => {
            item.addEventListener('click', () => {
            setIsActive(!isActive);
        });
    }, [isActive]);

    return <div className="container">
        <nav className='nav'>
            <a href="#!" className="nav__logo">
                <img src={logo} alt="logo" className="nav__logo-img"/>
            </a>
            <ul className="nav__list ">
                {/* <li className="nav__item nav__item--active"> */}
                <li className=`nav__item ${isActive?nav__item--active:''}`>
                    <a href="#" className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        Project
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        About Us
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        FAQ`s
                    </a>
                </li>
            </ul>
            <div className="nav__btn-wrapper">
                <a href="#!" className="nav__btn-link">
                    Contact Us
                </a>
            </div>
        </nav>
    </div>
}

export default Nav;

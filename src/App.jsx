// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./components/hero"
import Nav from "./components/nav"
import Offer from "./components/offer";
import Testimonials from "./components/testimonials";
import Services from "./components/services";
import Cta from "./components/cta";
import ThemeToggle from "./components/themeToggle";

function App() {
	return (
		<>
			<ThemeToggle />
			<Nav />
			<main className="main">
				<Hero />
				<Offer />
				<Testimonials />
				<Services />
				<Cta />
			</main>
		</>
	);
}

export default App

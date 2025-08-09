// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./components/hero"
import Nav from "./components/nav"
import Offer from "./components/offer";
import Testimonials from "./components/testimonials";
import Services from "./components/services";

function App() {
	return (
		<>
			<Nav />
			<main className="main">
				<Hero />
				<Offer />
				<Testimonials />
				<Services />
			</main>
		</>
	);
}

export default App

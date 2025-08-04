// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Hero from "./components/hero"
import Nav from "./components/nav"
import Offer from "./components/offer";

function App() {


  return (
	  <>
		<Nav />
		<main className="main">
			<Hero />
			<Offer />
		</main>
		</>
  );
}

export default App

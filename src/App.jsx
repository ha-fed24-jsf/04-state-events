import './App.css'
import CountClicks from './components/CountClicks.jsx'
import Happy from './components/Happy.jsx'
import Counter from './components/Counter.jsx'
import ToggleVisibility from './components/ToggleVisibility.jsx'
import ViewProduct from './components/ViewProduct.jsx'
import FancySection from './components/fancy/FancySection.jsx'

const data = {
	name: 'Hammare',
	price: 125,
	img: 'http://clipart-library.com/images/rcLxeLe6i.jpg'
}
const data2 = {
	name: 'Såg',
	price: 140,
	img: 'https://t3.ftcdn.net/jpg/00/36/67/10/360_F_36671044_namcZVcszIqZYynU3KOMKPxnUYrc3ckg.jpg'
}

const App = () => (
	<>
	<header>
		<h1> Demo React </h1>
	</header>
	<main>
		<FancySection />
		<ViewProduct product={data} />
		<ViewProduct product={data2} />
		<ToggleVisibility />

		<CountClicks />
		<Happy />

		<Counter />
		<Counter />
		<Counter />
	</main>
	</>
)

export default App

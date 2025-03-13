import './App.css'
import CountClicks from './components/CountClicks.jsx'
import Happy from './components/Happy.jsx'
import Counter from './components/Counter.jsx'
import ToggleVisibility from './components/ToggleVisibility.jsx'

const App = () => (
	<>
	<header>
		<h1> Demo React </h1>
	</header>
	<main>
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

import './App.css'
import CountClicks from './components/CountClicks.jsx'
import Happy from './components/Happy.jsx'
import Counter from './components/Counter.jsx'

const App = () => (
	<>
	<header>
		<h1> Demo React </h1>
	</header>
	<main>
		<CountClicks />
		<Happy />
		<Counter />
	</main>
	</>
)

export default App

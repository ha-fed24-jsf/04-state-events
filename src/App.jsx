import './App.css'
import CountClicks from './components/CountClicks.jsx'
import Happy from './components/Happy.jsx'

const App = () => {

	return (
		<>
		<header>
			<h1> Demo React </h1>
		</header>
		<main>
			<CountClicks />
			<Happy />
		</main>
		</>
	)
}

export default App

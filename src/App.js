import Map from './components/Map'
import Results from './components/Results'
import Search from './components/Search'
import './scss/main.scss'

function App() {
	return (
		<main className='app'>
			<h1 className='app__header'>IP Address Tracker</h1>
			<Search />
			<Results />
			<Map />
		</main>
	)
}

export default App

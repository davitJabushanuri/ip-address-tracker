import React, { useState, useEffect } from 'react'

import Map from './components/Map'
import Results from './components/Results'
import Search from './components/Search'
import './scss/main.scss'

function App() {
	const [input, setInput] = useState('google.com')
	const [location, setLocation] = useState()
	console.log(input)
	console.log(location)
	const getLocation = async input => {
		const data = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=at_3x5v4lqAJPFWZrWDWVEQ259pT8HRu&domain=${input}`
		)
		const location = await data.json()
		setLocation(location)
	}

	useEffect(() => {
		getLocation(input)
	}, [input])

	return (
		<main className='app'>
			<button onClick={getLocation}>click</button>
			<h1 className='app__header'>IP Address Tracker</h1>
			<Search setInput={setInput} />
			<Results location={location} />
			<Map />
		</main>
	)
}

export default App

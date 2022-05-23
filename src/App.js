import React, { useState, useEffect } from 'react'

import Map from './components/Map'
import Results from './components/Results'
import Search from './components/Search'
import './scss/main.scss'

function App() {
	const [input, setInput] = useState('google.com')
	const [location, setLocation] = useState()
	const getLocation = async input => {
		const data = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=at_3x5v4lqAJPFWZrWDWVEQ259pT8HRu&domain=${input}`
		)
		const location = await data.json()

		if (location.code) return

		setLocation(location)
	}

	useEffect(() => {
		getLocation(input)
	}, [input])

	return (
		<main className='app'>
			<h1 className='app__header'>IP Address Tracker</h1>
			<Search setInput={setInput} />
			<Results location={location} />
			<Map lat={location?.location?.lat} lng={location?.location?.lng} />
		</main>
	)
}

export default App

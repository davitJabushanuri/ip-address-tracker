import React, { useState, useEffect } from 'react'

import Map from './components/Map'
import Results from './components/Results'
import Search from './components/Search'
import './scss/main.scss'

function App() {
	const [input, setInput] = useState('google.com')
	const [location, setLocation] = useState()
	const getLocation = async input => {
		let x = 'domain'
		if (
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
				input
			)
		) {
			x = 'ipAddress'
		}
		const data = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=at_3x5v4lqAJPFWZrWDWVEQ259pT8HRu&${x}=${input}`
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
			<Map
				lat={location?.location?.lat}
				lng={location?.location?.lng}
				location={location}
			/>
		</main>
	)
}

export default App

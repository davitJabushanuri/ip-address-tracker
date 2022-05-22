import React, { useState } from 'react'
import arrowIcon from '../images/icon-arrow.svg'

const Search = ({ setInput }) => {
	const [domain, setDomain] = useState('')

	const handleInput = e => {
		e.preventDefault()
		setInput(domain)
		setDomain('')
	}

	return (
		<form className='search'>
			<input
				value={domain}
				onChange={e => setDomain(e.target.value)}
				type='text'
				className='search__input'
			/>
			<button onClick={handleInput} className='search__button'>
				<img src={arrowIcon} alt='' />
			</button>
		</form>
	)
}

export default Search

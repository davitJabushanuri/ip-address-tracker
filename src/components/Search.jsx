import React from 'react'
import arrowIcon from '../images/icon-arrow.svg'

const Search = () => {
	return (
		<div className='search'>
			<input type='text' className='search__input' />
			<button className='search__button'>
				<img src={arrowIcon} alt='' />
			</button>
		</div>
	)
}

export default Search

import React from 'react'

const Results = () => {
	return (
		<div className='results'>
			<div className='results__container'>
				<p className='results__container__header'>IP ADDRESS</p>
				<h2 className='results__container__result'>192.212.174.101</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>LOCATION</p>
				<h2 className='results__container__result'>bROOKLYN NY</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>TIMEZONE</p>
				<h2 className='results__container__result'>UTC -5:00</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>ISP</p>
				<h2 className='results__container__result'>SpaceX Starlink</h2>
			</div>
		</div>
	)
}

export default Results

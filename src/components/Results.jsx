import React from 'react'

const Results = ({ location }) => {
	return (
		<div className='results'>
			<div className='results__container'>
				<p className='results__container__header'>IP ADDRESS</p>
				<h2 className='results__container__result'>{location?.ip}</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>LOCATION</p>
				<h2 className='results__container__result'>{`${location?.location?.city}, ${location?.location?.country} ${location?.location?.postalCode}`}</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>TIMEZONE</p>
				<h2 className='results__container__result'>
					UTC {location?.location?.timezone}
				</h2>
			</div>
			<div className='results__container'>
				<p className='results__container__header'>ISP</p>
				<h2 className='results__container__result'>{location?.isp}</h2>
			</div>
		</div>
	)
}

export default Results

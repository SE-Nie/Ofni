import React from 'react'
import './App.css'

export default function Maincities(props) {
	return (
		<>
			<div className='maincities'>
				{props.cities.map((city) => (
					<li>{city.name}</li>
				))}
			</div>
		</>
	)
}

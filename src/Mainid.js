import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card.js'
import './App.css'

export default function Mainid(props) {
	const { id } = useParams()
	console.log(id)
	console.log(typeof id)
	return (
		<>
			<div className='mainid'>
				{props.restaurants
					.filter((restaurant) => restaurant.id === parseInt(id, 10))
					.map((restaurant) => (
						<li key={restaurant.id}>{restaurant.name}</li>
					))}
				<Card />
			</div>
		</>
	)
}

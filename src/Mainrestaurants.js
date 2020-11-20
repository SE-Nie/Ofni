import { NavLink } from 'react-router-dom'
import React from 'react'
import './App.css'

export default function Mainrestaurant(props) {
	return (
		<>
			<div className='maincities'>
				{props.restaurants.map((restaurant) => (
					<NavLink to={`/restaurants/${restaurant.id}`}>
						<li>{restaurant.name}</li>
					</NavLink>
				))}
			</div>
		</>
	)
}

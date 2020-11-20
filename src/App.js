import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Mainid from './Mainid.js'
import Mainrestaurants from './Mainrestaurants.js'
import Maincities from './Maincities.js'
import Maintags from './Maintags.js'

import './App.css'

function App() {
	const [cities, setCities] = useState([])
	const [restaurants, setRestaurants] = useState([])
	const [tags, setTags] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	//Fetching the Data
	const fetchData = () => {
		console.log('fetch is being called')
		fetch('http://localhost:3000/cities')
			.then((response) => response.json())
			.then((json) => setCities(json))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:3000/restaurants')
			.then((response) => response.json())
			.then((json) => setRestaurants(json))
			//throw the error
			.catch((err) => console.log(err))
		fetch('http://localhost:3000/tags')
			.then((response) => response.json())
			.then((json) => setTags(json))
			//throw the error
			.catch((err) => console.log(err))
	}

	return (
		<div className='App'>
			<div className='Container'>
				<Header />
				<Switch>
					<Route path='/restaurants/:id'>
						<Mainid restaurants={restaurants} />
					</Route>
					<Route exact path='/'>
						<Main />
						{restaurants.map((restaurant) => (
							<li>{restaurant.name}</li>
						))}
						{tags.map((tag) => (
							<li>{tag.name}</li>
						))}
					</Route>
					<Route path='/restaurants'>
						<Mainrestaurants restaurants={restaurants} />
					</Route>
					<Route path='/cities'>
						<Maincities cities={cities} />
					</Route>
					<Route path='/tags'>
						<Maintags tags={tags} />
					</Route>
				</Switch>
				<Footer />
			</div>
		</div>
	)
}

export default App

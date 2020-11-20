import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import Restaurant from './restaurant.jpg'
import City from './city.jpg'
import Tag from './tag.jpg'

export default function Main() {
	return (
		<>
			<div className='main'>
				<div className='main-top'>BROWSE BY :</div>

				<div className='main-bot'>
					<div className='main-bot-left'>
						<div className='main-bot-left-img'>
							<img src={Restaurant}></img>
						</div>
						<div className='main-bot-left-text'>
							<h1>RESTAURANTS</h1>
							<NavLink to='/restaurants'>
								<button>BROWSE</button>
							</NavLink>
						</div>
					</div>

					<div className='main-bot-mid'>
						<div className='main-bot-mid-img'>
							<img src={City}></img>
						</div>
						<div className='main-bot-mid-text'>
							<h1>CITIES</h1>
							<NavLink to='/cities'>
								<button>BROWSE</button>
							</NavLink>
						</div>
					</div>

					<div className='main-bot-right'>
						<div className='main-bot-right-img'>
							<img src={Tag}></img>
						</div>
						<div className='main-bot-right-text'>
							<h1>TAGS</h1>
							<NavLink to='/tags'>
								<button>BROWSE</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

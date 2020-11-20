import React from 'react'
import './App.css'

export default function Maintags(props) {
	return (
		<>
			<div className='maintags'>
				{props.tags.map((tag) => (
					<li>{tag.name}</li>
				))}
			</div>
		</>
	)
}

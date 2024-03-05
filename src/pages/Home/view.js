import React from 'react';
import './style.css';

export default (props) => (
	<section className='main-container'>
		<div className='top-container'>
			<div className='top-left-container'>
				<h1 className='display-5 pt-5 title'>
					{props.name}{' '}
					<span className='wave-emoji'>
						<img
							alt='👋'
							draggable='false'
							src='https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png'
							className='moving-hand'
						/>
					</span>
				</h1>
				<p className='description'>{props.describe}</p>
				<button className='contact-button'>Contact Me</button>
			</div>
			<div className='top-right-container'>
				<img
					alt='👋'
					draggable='false'
					src='https://avatars.githubusercontent.com/u/41083456?v=4'
					className='profile-pic'
				/>
			</div>
		</div>
	</section>
);

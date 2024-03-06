import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';
import AboutLogo from '../../assets/images/about.png';

export default (props) => (
	<section className='about-main-container' id='about'>
		<div className='about-container'>
			<div className='about-top-container'>
				<h1 className='about-title'>ABOUT</h1>
			</div>
			<div className='about-bottom-container'>
				<div className='about-bottom-left-container'>
					<img
						alt='About Me'
						draggable='false'
						src={AboutLogo}
						className='about-pic'
					/>
				</div>
				<div className='about-bottom-right-container'>
					{props.aboutDetails.map((item) => (
						<div className='about-card-container'>
							<FontAwesomeIcon icon={item.icon} size='2x' />
							<div className=''>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

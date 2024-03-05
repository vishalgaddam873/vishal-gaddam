import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCode,
	faServer,
	faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import AboutLogo from '../../assets/images/about.png';

export default (props) => (
	<section className='about-main-container'>
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
					<div className='about-card-container'>
						<FontAwesomeIcon icon={faCode} size='2x' />
						<div className=''>
							<h4>Frontend Developer</h4>
							<p>
								I'm frontend developer with experince in building responsive and
								optimised site
							</p>
						</div>
					</div>

					<div className='about-card-container'>
						<FontAwesomeIcon icon={faServer} size='2x' />
						<div className=''>
							<h4>Backend Developer</h4>
							<p>
								I have experience developing fast and optimised back-end system and APIs
							</p>
						</div>
					</div>

					<div className='about-card-container'>
						<FontAwesomeIcon icon={faMobileAlt} size='2x' />
						<div>
							<h4>Mobile App Developer</h4>
							<p>
								I'm a mobile app developer with experience in building responsive and
								optimized applications for small screens.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

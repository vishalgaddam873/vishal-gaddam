import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default (props) => (
	<section className='contact-main-container' id='contact'>
		<div className='contact-sub-container'>
			<div className='contact-left-container'>
				<h1>Contact Me</h1>
				<h2>Feel free to reach out!</h2>
			</div>
			<div className='contact-right-container'>
				<div className='contact-details'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' />
					<h5 className='links'>vishalgaddam008@gmail.com</h5>
				</div>
				<div className='contact-details'>
					<FontAwesomeIcon icon={faLinkedin} size='2x' />
					<h5 className='links'>
						https://www.linkedin.com/in/vishal-gaddam-7a20b1178/
					</h5>
				</div>
				<div className='contact-details'>
					<FontAwesomeIcon icon={faGithub} size='2x' />
					<h5 className='links'>https://github.com/vishalgaddam873/</h5>
				</div>
			</div>
		</div>
	</section>
);

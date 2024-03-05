import React from 'react';
import './style.css';
import EmediskillLogo from '../../assets/images/emediskill.png';

export default (props) => (
	<section className='project-main-container'>
		<div className='project-top-container'>
			<h1 className='project-title'>PROJECTS</h1>
		</div>
		<div className='project-bottom-container'>
			<div className='project-card'>
				<div className='card-top-container'>
					<img
						alt='project-img'
						draggable='false'
						src={EmediskillLogo}
						className='project-pic'
					/>
				</div>
				<div className='project-content'>
					<h3>Emediskill</h3>
					<p>
						EmediSkill is a user-friendly web platform where doctors buy courses,
						watch videos, and earn certificates after exams—simplifying and enhancing
						their ongoing professional education.
					</p>
					<div className='tech-list'>
						<h5 className='tech-title'>React</h5>
						<h5 className='tech-title'>Redux</h5>
						<h5 className='tech-title'>Mongodb</h5>
					</div>
				</div>
				<div className='button-container'>
					<button className='button'>Demo</button>
					<button className='button'>Source Code</button>
				</div>
			</div>
		</div>
	</section>
);

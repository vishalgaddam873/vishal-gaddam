import React from 'react';
import './style.css';

export default (props) => (
	<section className='experience-main-container'>
		<div className='experience-top-container'>
			<h1 className='experience-title'>EXPERIENCE</h1>
		</div>
		<div className='experience-bottom-container'>
			<div className='experience-left-container'>
				{props.skills.map((skillLogo) => (
					<img
						alt='skill-img'
						draggable='false'
						src={skillLogo}
						className='skill-pic'
					/>
				))}
			</div>
			<div className='experience-right-container'>
				{props.workHistory.map((item) => (
					<div className='history-card'>
						<img
							alt='work-history-img'
							draggable='false'
							src={item.companyLogo}
							className='history-pic'
						/>
						<div>
							<h4>{item.companyName}</h4>
							<h6>{item.timeline}</h6>
							<p>{item.workDescription}</p>
							<ul>
								{item.workPointers.map((pointer) => (
									<li>{pointer}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

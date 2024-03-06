import React from 'react';
import './style.css';

export default (props) => (
	<section className='project-main-container'>
		<div className='project-top-container'>
			<h1 className='project-title'>PROJECTS</h1>
		</div>
		<div className='project-bottom-container'>
			{props.projects.map((item) => (
				<div className='project-card'>
					<div className='card-top-container'>
						<img
							alt='project-img'
							draggable='false'
							src={item.logo}
							className='project-pic'
						/>
					</div>
					<div className='project-content'>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<div className='tech-list'>
							{item.techList.map((tech) => (
								<h5 className='tech-title'>{tech}</h5>
							))}
						</div>
					</div>
					<div className='button-container'>
						<a href={item.demoLink} target='_blank'>
							<button className='button'>Demo</button>
						</a>
					</div>
				</div>
			))}
		</div>
	</section>
);

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
					<h1>ABOUT</h1>
				</div>
			</div>
		</div>
	</section>
);

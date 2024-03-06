import './style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => (
	<>
		<nav className='navbar navbar-expand-lg fixed-top'>
			<Link
				to='home'
				spy={true}
				smooth={true}
				offset={-70}
				duration={100}
				className='nav-link'>
				<FontAwesomeIcon icon={faCode} size='2x' />
				<a className='navbar-brand'> Vishal G.</a>
			</Link>
			{/* <button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button> */}
			<div className='nav-items collapse navbar-collapse' id='navbarNavAltMarkup'>
				<div className='navbar-nav'>
					<Link
						to='about'
						spy={true}
						smooth={true}
						offset={-70}
						duration={100}
						className='nav-link'>
						<a className='nav-item nav-link'>About</a>
					</Link>
					<Link
						to='experience'
						spy={true}
						smooth={true}
						offset={-70}
						duration={100}
						className='nav-link'>
						<a className='nav-item nav-link'>Experience</a>
					</Link>
					<Link
						to='projects'
						spy={true}
						smooth={true}
						offset={-70}
						duration={100}
						className='nav-link'>
						<a className='nav-item nav-link'>Projects</a>
					</Link>
					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={-70}
						duration={100}
						className='nav-link'>
						<a className='nav-item nav-link'>Contact</a>
					</Link>
					{/* <Link
						to='hireme'
						spy={true}
						smooth={true}
						offset={-70}
						duration={100}
						className='nav-link'>
						<a className='nav-item nav-link'>Hire Me</a>
					</Link> */}
				</div>
			</div>
		</nav>
	</>
);

export default NavBar;

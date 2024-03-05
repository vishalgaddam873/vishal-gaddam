import './style.css';
import logoImage from '../../assets/images/logo.png';

const NavBar = (prop) => (
	<>
		<nav className='navbar navbar-expand-lg fixed-top'>
			<a className='navbar-brand' href='#'>
				{/* <img
					src={logoImage}
					alt='Portfolio'
					width='200'
					class='d-inline-block align-text-top'
				/> */}
				Portfolio
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavAltMarkup'
				aria-controls='navbarNavAltMarkup'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='nav-items collapse navbar-collapse' id='navbarNavAltMarkup'>
				<div className='navbar-nav'>
					<a className='nav-item nav-link' href='#'>
						About
					</a>
					<a className='nav-item nav-link' href='#'>
						Experience
					</a>
					<a className='nav-item nav-link' href='#'>
						Projects
					</a>
					<a className='nav-item nav-link' href='#'>
						Contact
					</a>
					<a className='nav-item nav-link' href='#'>
						Hire Me
					</a>
				</div>
			</div>
		</nav>
	</>
);

export default NavBar;

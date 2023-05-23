import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	return (
		<header>
			<div className='cover-nav'>
				<div className='cover-logo'>
					<a href='#'>
						<img src='../../../assets/logo-estudio.png' alt='logo' />
					</a>
				</div>

				<nav>
					<ul>
						<li>
							<a href='#nosotros'>Nosotros</a>
						</li>
						<li className='dropdown'>
							<a href='#áreas-de-práctica'>
								Áreas de práctica
								<img src='../../../assets/arrow-down.png' alt='arrow' />
							</a>

							<div className='dropdown-content'>
								<Link to='/penal'>Penal</Link>
								<Link className='link' to='/laboral'>
									Laboral
								</Link>
								<Link className='link' to='/familia'>
									Familia
								</Link>
							</div>
						</li>
						<li>
							<a href='#contacto'>Contacto</a>
						</li>
						<li className='user-icon'>
							<Link to='/login'>
								<img src='../../../assets/user-icon.png' alt='user' />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

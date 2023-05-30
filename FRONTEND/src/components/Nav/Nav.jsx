import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
	const [isScrolling, setIsScrolling] = useState(0);

	const handleScroll = () => {
		let scroll = window.scrollY;

		setIsScrolling(scroll);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolling]);

	return (
		<header className={isScrolling > 30 ? 'scroll-nav' : 'start'}>
			<div className='cover-nav'>
				<div className='cover-logo'>
					<a href='#'>
						<img src='../../../assets/logo-estudio-light.png' alt='logo' />
					</a>
				</div>

				<nav>
					<ul>
						<li>
							<a href='#nosotros'>Nosotros</a>
						</li>
						<li className='dropdown'>
							<a href='#áreas-de-práctica'>Áreas de práctica</a>

							<div className='dropdown-content'>
								<Link className='link-top' to='/penal'>
									<p>Penal</p>
								</Link>
								<Link className='link link-medium' to='/laboral'>
									<p>Laboral</p>
								</Link>
								<Link className='link link-down' to='/familia'>
									<p>Familia</p>
								</Link>
							</div>
						</li>
						<li>
							<a href='#servicios'>Servicios</a>
						</li>
						<li className='contacto-li'>
							<a href='#contacto'>Contacto</a>
						</li>
						<li className='user-icon'>
							<Link to='/login'>
								<img src='../../../assets/user-icon-light.png' alt='user' />
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

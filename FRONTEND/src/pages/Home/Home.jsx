import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import './Home.css';

export default function Home() {
	return (
		<div className='container_home'>
			<Nav />

			<main>
				<Banner />

				{/* <div className='wave-1'>
					<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
						<path d='M-7.05,115.95 C194.41,55.75 304.45,53.77 506.49,115.95 L500.00,150.00 L0.00,150.00 Z'></path>
					</svg>
				</div> */}

				{/* NOSOTROS  */}

				<section id='nosotros'>
					<div className='container-nosotros'>
						<h2>Sobre nosotros</h2>

						<div className='cover-nosotros'>
							<div className='cover-texto'>
								<p>
									Somos un equipo de trabajo que brinda asesoramiento y
									patrocinio jurídico desde el año 2001 en Asuntos de familia
									(divorcios, alimentos, filiaciones, tenencias, régimen de
									visitas, etc.), Sucesiones, Laboral (despido, accidentes y
									enfermedades laborales), Jubilaciones y pensiones, Daños y
									perjuicios, accidentes de tránsito, Desalojos, Contratos,
									Comercial, Asuntos penales (defensas penales, excarcelaciones,
									juicios orales, denuncias).
								</p>
								<p>
									En la Provincia de Bs. As. en nuestro estudio se encuentran la
									Dra. Estrella Martínez, la Dra. Olga Ojeda y el Dr. Carlos
									Gómez Ibarlucea. Ubicados en Arieta 2809 primer piso, San
									Justo.
								</p>
								<p>
									Desde el año 2016 nos acompaña desde La Pampa la Dra. Gabriela
									Forte con oficinas en, General Pico y Quemú-Quemú.
								</p>
							</div>

							<img src='../../../assets/team-work.svg' alt='team-work' />
						</div>
					</div>
				</section>

				{/* AREAS DE PRACTICA  */}

				<section id='áreas-de-práctica'>
					<div className='container-areas'>
						<h2>Áreas de práctica</h2>

						<div className='cards-areas'>
							<div className='card-area laboral'>
								<div className='icono'>
									<img src='../../../assets/balanza.png' alt='balanza' />
								</div>
								<h3>Derecho Laboral</h3>

								<ul>
									<li>Despidos</li>
									<li>Accidentes</li>
									<li>Enfermedades laborales</li>
								</ul>

								<div className='mas-info'>
									<Link to='/laboral'>Más info.</Link>
									<hr />
								</div>
							</div>

							<div className='card-area penal'>
								<div className='icono'>
									<img src='../../../assets/martillo.png' alt='martillo' />
								</div>

								<h3>Derecho Penal</h3>

								<ul>
									<li>Delitos contra personas</li>
									<li>Delitos contra la propiedad</li>
									<li>Delitos contra la seguridad y el orden público</li>
								</ul>

								<div className='mas-info'>
									<Link to='/penal'>Más info.</Link>
									<hr />
								</div>
							</div>

							<div className='card-area familia'>
								<div className='icono'>
									<img
										src='../../../assets/anillos-de-boda.png'
										alt='anillos'
									/>
								</div>

								<h3>Familia y sucesiones</h3>

								<ul>
									<li>Declaratoria de herederos</li>
									<li>Divorcios</li>
									<li>Cuotas alimentarias</li>
								</ul>
								<div className='mas-info'>
									<Link to='/familia'>Más info.</Link>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* SERVICIOS  */}

				<section id='servicios'>
					<div className='container-servicios'>
						<h2>Nuestros servicios</h2>

						<div className='cards-servicios'>
							<div className='card-servicios disponibilidad'>
								<span className='disponibilidad-img'></span>
								<h3>Disponibilidad</h3>

								<ul>
									<li>Whatsapp</li>
									<li>Correo electrónico</li>
								</ul>
							</div>

							<div className='card-servicios expedientes'>
								<span className='expedientes-img'></span>
								<h3>Expediente virtual</h3>

								<ul>
									<li>Información de estado</li>
									<li>Documentos adjuntos</li>
								</ul>
							</div>

							<div className='card-servicios pagos'>
								<span className='pagos-img'></span>
								<h3>Formas de pago</h3>

								<ul>
									<li>Efectivo o transferencia</li>
									<li>Mercado Pago</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<Contact />
			</main>

			<div className='wave_2'>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
					<path d='M-11.00,46.87 C244.64,191.93 306.71,-41.93 512.69,82.40 L500.00,150.00 L0.00,150.00 Z'></path>
				</svg>
			</div>

			<Footer />

			<div className='last_line'>
				<p>Estudio Jurídico Martinez • Ojeda • Gómez Ibarlucea © 2023</p>
			</div>
		</div>
	);
}

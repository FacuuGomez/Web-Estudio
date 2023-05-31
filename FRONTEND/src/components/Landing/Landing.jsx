import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav.jsx';

import './Landing.css';

export default function Landing() {
	return (
		<div className='container-landing'>
			<Nav />

			<main>
				<section id='Home'>
					<div className='container-home'>
						<img src='../../../assets/balanza-justicia2.jpg' alt='balanza' />

						<div className='cover-home'>
							<img
								src='../../../assets/logo-estudio-apellidos-light.png'
								alt='apellidos'
							/>
							<div className='contactanos'>
								<ul>
									<li>
										<img src='../../../assets/email-icon.png' alt='email' />
										martinezojedayasoc@gmail.com
									</li>
									<li>
										<img src='../../../assets/phone-icon.png' alt='telefono' />
										4441-8678
									</li>
									<li>
										<img
											src='../../../assets/whatsapp-icon.png'
											alt='whatsapp'
										/>
										whatsapp
									</li>
								</ul>

								<button>Agendar turno</button>
							</div>
						</div>
					</div>

					<div className='wave-1'>
						<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
							<path d='M-7.05,115.95 C194.41,55.75 304.45,53.77 506.49,115.95 L500.00,150.00 L0.00,150.00 Z'></path>
						</svg>
					</div>
				</section>

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

				<section id='servicios'>
					<div className='container-servicios'>
						<h2>Nuestros servicios</h2>

						<div className='cards-servicios'>
							<div className='card-servicios disponibilidad'>
								<h3>Disponibilidad</h3>

								<ul>
									<li>Whatsapp</li>
									<li>Correo electrónico</li>
								</ul>
							</div>

							<div className='card-servicios expedientes'>
								<h3>Expediente virtual</h3>

								<ul>
									<li>Información de estado</li>
									<li>Documentos adjuntos</li>
								</ul>
							</div>

							<div className='card-servicios pagos'>
								<h3>Formas de pago</h3>

								<ul>
									<li>Efectivo o transferencia</li>
									<li>Mercado Pago</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section id='contacto'>
					<div className='container-contacto'>
						<h2>Contacto</h2>

						<div class='cover-info'>
							<div className='cover-datos'>
								<div className='contactos'>
									<div className='title-img'>
										<img src='../../../assets/contactos.png' alt='contactos' />
										<h3>Medios de contacto</h3>
									</div>

									<ul>
										<li>
											<img
												src='../../../assets/phone-icon-green.png'
												alt='phone-green'
											/>
											Telefono
										</li>
										<li>
											<img
												src='../../../assets/email-icon-green.png'
												alt='email-green'
											/>
											Email
										</li>
										<li>
											<img
												src='../../../assets/whatsapp-icon-green.png'
												alt='whatsapp-green'
											/>
											Whatsapp
										</li>
									</ul>
								</div>
								<div className='horarios'>
									<div className='title-img'>
										<img src='../../../assets/reloj.png' alt='reloj' />

										<h3>Nuestro horario</h3>
									</div>
									<ul>
										<li>Lunes a Viernes 13:00 a 17:00 hs</li>
										{/* <li>Sabado</li> */}
									</ul>
								</div>
								<div className='redes'>
									<div className='title-img'>
										<img src='../../../assets/seguir.png' alt='redes' />

										<h3>Seguinos</h3>
									</div>
									<ul>
										<li>
											<img
												src='../../../assets/facebook-icono.png'
												alt='facebook'
											/>
											Facebook
										</li>
										<li>
											<img
												src='../../../assets/instagram-icono.png'
												alt='instagram'
											/>
											Instagram
										</li>
									</ul>
								</div>
							</div>

							<form id='form' name='contact' method='POST' data-netlify='true'>
								<label htmlFor='name' for='name'>
									Nombre
								</label>
								<input type='text' name='name' autoComplete='off' />

								<label htmlFor='email' for='email'>
									Correo electronico
								</label>
								<input type='email' name='email' />

								<label htmlFor='subject' for='subject' autoComplete='off'>
									Asunto
								</label>
								<input type='text' name='subject' />

								<label htmlFor='text' for='message'>
									Mensaje
								</label>
								<textarea name='message'></textarea>

								<div className='cover-submit'>
									<button type='submit'>Enviar</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className='container-footer'>
					<p>Estudio Jurídico</p>
					<p>Martinez • Ojeda • Gómez Ibarlucea</p>
				</div>
			</footer>
		</div>
	);
}

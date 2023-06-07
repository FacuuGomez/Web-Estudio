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
										<img
											src='../../../assets/phone-icon-light.png'
											alt='telefono'
										/>
										4441-8678
									</li>
									<li>
										<a
											href='mailto:martinezojedayasoc@gmail.com'
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												src='../../../assets/email-icon-light.png'
												alt='email'
											/>
											martinezojedayasoc@gmail.com
										</a>
									</li>

									<li>
										<a
											href='https://api.whatsapp.com/send?phone=1154935036'
											target='_blank'
											title='Whatsapp'
										>
											<img
												src='../../../assets/whatsapp-icon-light.png'
												alt='whatsapp'
											/>
											whatsapp
										</a>
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

				<section id='contacto'>
					<div className='container-contacto'>
						<h2>Contacto</h2>

						<div className='cover-info'>
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
												alt='phone'
											/>
											4441 - 8678
										</li>
										<li>
											<a
												href='mailto:martinezojedayasoc@gmail.com'
												target='_blank'
												rel='noopener noreferrer'
											>
												<img
													src='../../../assets/email-icon-green.png'
													alt='email'
												/>
												martinezojedayasoc@gmail.com
											</a>
										</li>
										<li>
											<a
												href='https://api.whatsapp.com/send?phone=1154935036'
												target='_blank'
												title='Whatsapp'
											>
												<img
													src='../../../assets/whatsapp-icon-green.png'
													alt='whatsapp-green'
												/>
												whatsapp
											</a>
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
									</ul>
								</div>
								<div className='redes'>
									<div className='title-img'>
										<img src='../../../assets/seguir.png' alt='redes' />

										<h3>Seguinos</h3>
									</div>
									<ul>
										<li>
											<a
												href='https://www.facebook.com/martinez.ojeda.gomezibarlucea.y.asoc'
												target='_blank'
												title='Facebook'
											>
												<img
													src='../../../assets/facebook-icono.png'
													alt='Facebook'
												/>
												Facebook
											</a>
										</li>
										<li>
											<a
												href='https://www.instagram.com/martinez_ojeda_gomezibarlucea/'
												target='_blank'
												title='Instagram'
											>
												<img
													src='../../../assets/instagram-icono.png'
													alt='instagram'
												/>
												Instagram
											</a>
										</li>
									</ul>
								</div>
							</div>

							<form id='form' name='contact' method='POST' data-netlify='true'>
								<label htmlFor='name'>Nombre</label>
								<input type='text' name='name' autoComplete='off' />

								<label htmlFor='email'>Correo electronico</label>
								<input type='email' name='email' />

								<label htmlFor='subject' autoComplete='off'>
									Asunto
								</label>
								<input type='text' name='subject' />

								<label htmlFor='text'>Mensaje</label>
								<textarea name='message'></textarea>

								<div className='cover-submit'>
									<button type='submit'>Enviar</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>

			<div className='wave_2'>
				<svg viewBox='0 0 500 150' preserveAspectRatio='none'>
					<path d='M-11.00,46.87 C244.64,191.93 306.71,-41.93 512.69,82.40 L500.00,150.00 L0.00,150.00 Z'></path>
				</svg>
			</div>

			<footer>
				<div className='container_footer'>
					<div className='cards'>
						<div className='card img_card'>
							<img
								src='../../../assets/logo-final-light.png'
								alt='estudio jurídico'
							/>
						</div>

						<div className='card areas_card'>
							<h3>Áreas de práctica</h3>

							<ul>
								<li>
									<Link to='/penal'>
										<p>▸ Penal</p>
									</Link>
								</li>
								<li>
									<Link to='/laboral'>
										<p>▸ Laboral</p>
									</Link>
								</li>
								<li>
									<Link to='/familia'>
										<p>▸ Familia</p>
									</Link>
								</li>
							</ul>
						</div>

						<div className='card contact_card'>
							<h3>Contactos</h3>

							<ul>
								<li>
									<img src='../../../assets/phone-icon-light.png' alt='phone' />
									<span></span>
									4441 - 8678
								</li>
								<li>
									<a
										href='mailto:martinezojedayasoc@gmail.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<img
											src='../../../assets/email-icon-light.png'
											alt='email'
										/>
										martinezojedayasoc@gmail.com
									</a>
								</li>
							</ul>

							<div className='social_medias'>
								<ul>
									<li>
										<a
											href='https://api.whatsapp.com/send?phone=1154935036'
											target='_blank'
											title='Whatsapp'
										>
											<img
												src='../../../assets/whatsapp-icon-light.png'
												alt='Whatsapp'
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.facebook.com/martinez.ojeda.gomezibarlucea.y.asoc'
											target='_blank'
											title='Facebook'
										>
											<img
												src='../../../assets/facebook-icon-light.png'
												alt='Facebook'
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/martinez_ojeda_gomezibarlucea/'
											target='_blank'
											title='Instagram'
										>
											<img
												src='../../../assets/instagram-icon-light.png'
												alt='Instagram'
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='ubi_card'>
						<h3>Nuestras oficinas</h3>

						<div className='cover_ubi'>
							<div className='ubi'>
								<p>Arieta 2809, San Justo, Buenos Aires</p>

								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1538133813438!2d-58.56659472549342!3d-34.67606726132062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc62e42276df5%3A0x4190efc310e17020!2sDr.%20Ignacio%20Arieta%202809%2C%20B1754APW%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1685508697776!5m2!1ses!2sar'
									loading='lazy'
								></iframe>
							</div>

							<div className='ubi'>
								<p>Calle 26 Nº545, Gral. Pico, La Pampa</p>

								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8436114703663!2d-63.75478882543033!3d-35.65622451384127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d592b74ec9d%3A0x46cf814609ecbfc3!2sC.%2026%20545%2C%20Gral.%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1685559563647!5m2!1ses!2sar'
									loading='lazy'
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className='last_line'>
				<p>Estudio Jurídico Martinez • Ojeda • Gómez Ibarlucea © 2023</p>
			</div>
		</div>
	);
}

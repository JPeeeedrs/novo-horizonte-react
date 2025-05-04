import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

function Footer() {
	return (
		<footer className='footer-custom text-white'>
			<div className='footer-left'>
				<img src={logo} alt='Logo' className='footer-img' />
				<span className='footer-nome-escola'>
					CENTRO EDUCACIONAL NOVO HORIZONTE
				</span>
			</div>

			<div className='footer-contact'>
				<strong>Contatos</strong>
				<div className='footer-phone'>Telefone: (21) 98506-7184</div>
				<div className='footer-icons'>
					<a href='https://www.facebook.com/novohorizontetere' target='_blank'>
						<i className='fab fa-facebook fa-2x'></i>
					</a>
					<a
						href='https://www.instagram.com/centroeducnovohorizonteoficial/'
						target='_blank'
					>
						<i className='fab fa-instagram fa-2x'></i>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

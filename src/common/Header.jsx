import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className='header'>
			<nav
				className='navbar bg-body-tertiary d-flex justify-content-center position-relative'
				id='nav-logo'
			>
				<div
					className='container-fluid d-flex justify-content-around'
					id='nav-container'
				>
					<Link className='navbar-brand' to='/'>
						<img
							src={logo}
							alt='Logo'
							width='75'
							height='75'
							className='d-inline-block align-text-top'
						/>
					</Link>
					<span>CENTRO EDUCACIONAL NOVO HORIZONTE</span>
				</div>
			</nav>
			<nav className='navbar' id='nav-elementos'>
				<Link to='/' className='text-white text-decoration-none'>
					INÍCIO
				</Link>
				<Link to='/formulario' className='text-white text-decoration-none'>
					FORMULÁRIO
				</Link>
				<Link to='/alunos' className='text-white text-decoration-none'>
					ALUNOS
				</Link>
				<Link to='/download' className='text-white text-decoration-none'>
					DOWNLOAD
				</Link>
			</nav>
		</header>
	);
}

export default Header;

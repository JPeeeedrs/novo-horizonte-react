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
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						<img
							src={logo}
							alt='Logo'
							width='75'
							height='75'
							className='d-inline-block align-text-top'
						/>
					</Link>
					<span className='position-absolute start-50 translate-middle-x'>
						CENTRO EDUCACIONAL NOVO HORIZONTE
					</span>
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
			</nav>
		</header>
	);
}

export default Header;

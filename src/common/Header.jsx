import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <nav
        className="navbar bg-body-tertiary d-flex justify-content-center position-relative"
        id="nav-logo"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img
              src={logo}
              alt="Logo"
              width="75"
              height="75"
              className="d-inline-block align-text-top"
            />
          </a>
          <span className="position-absolute start-50 translate-middle-x">
            Centro Educacional Novo Horizonte
          </span>
        </div>
      </nav>
      <nav className="navbar" id="nav-elementos">
        <a className="nav-link" href="index.html">
          Início
        </a>
        <a className="nav-link" href="formulario.html">
          Matrículas
        </a>
        <a className="nav-link" href="">
          Alunos
        </a>
      </nav>
    </header>
  );
}

export default Header;

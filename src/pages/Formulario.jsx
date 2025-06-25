import "../styles/forms.css";
import "../global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../common/Footer";
import Header from "../common/Header";
import Forms from "../components/Formulario/Forms";

function Formulario() {
  return (
    <div className="Formulario d-flex flex-column min-vh-100">
      <Header />
      <main>
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

export default Formulario;

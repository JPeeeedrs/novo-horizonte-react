// importar header e footer
import Footer from "../common/Footer";
import Header from "../common/Header";
import EscolaCarrossel from "../components/Cards/EscolaCarrossel";

// importar comoponentes
import ProfGen from "../components/Cards/ProfGen";
import Diretora from "../components/Cards/Diretora";
import Seguimentos from "../components/Cards/Segmentos";
import AtividadesCarrossel from "../components/Cards/AtividadesCarrossel";
import Map from "../components/Cards/Map";

// importar css
import "../global.css";
import "../styles/home.css";

// importar bootstrap js
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="container-fluid">
          <EscolaCarrossel />
          <ProfGen />
          <Diretora />
          <Seguimentos />
          <AtividadesCarrossel />
          <Map />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

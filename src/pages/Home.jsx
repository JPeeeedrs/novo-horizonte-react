import Footer from "../common/Footer";
import Header from "../common/Header";
import EscolaCarrossel from "../components/HomePage/EscolaCarrossel";
import ProfGen from "../components/HomePage/ProfGen";
import Diretora from "../components/HomePage/Diretora";
import Seguimentos from "../components/HomePage/Segmentos";
import AtividadesCarrossel from "../components/HomePage/AtividadesCarrossel";
import Map from "../components/HomePage/Map";
import "../global.css";
import "../styles/home.css";
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

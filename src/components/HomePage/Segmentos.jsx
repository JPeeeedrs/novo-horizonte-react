import ensinoInfantil from "../../assets/images/ensinoInfantil.jpg";
import fundamental from "../../assets/images/fundamental.jpg";
import fundamental2 from "../../assets/images/fundamental2.jpg";

function Seguimentos() {
  return (
    <section className="container-fluid my-5 slider">
      <h2 className="text-center mb-5">Segmentos</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="segmento-card text-center">
            <div className="segmento-image-container">
              <img src={ensinoInfantil} className="img-fluid" />
            </div>
            <h3 className="segmento-title mt-3">Educação Infantil</h3>
            <p className="segmento-description">
              Desenvolvimento inicial com foco em brincadeiras e aprendizado, em
              que estimulamos a criatividade, a liberdade de se expressar e
              socialização, sempre com cuidado e carinho.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="segmento-card text-center">
            <div className="segmento-image-container">
              <img src={fundamental} />
            </div>
            <h3 className="segmento-title mt-3">Ensino Fundamental I</h3>
            <p className="segmento-description">
              Nos anos iniciais do ensino fundamental (do 1º ao 5º
              ano),começamos a explorar com nossos alunos o universo das letras,
              nos aventuraramos nas histórias dos números e descobrimos as
              operações matemáticas.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="segmento-card text-center">
            <div className="segmento-image-container">
              <img src={fundamental2} />
            </div>
            <h3 className="segmento-title mt-3">Ensino Fundamental II</h3>
            <p className="segmento-description">
              Nos anos finais do ensino fundamental (do 6º ao 9º ano), nossa
              escola se dedica a estimular o crescimento intelectual e acadêmico
              dos estudantes, incentivando uma abordagem interdisciplinar e
              multidisciplinar no processo de aprendizagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seguimentos;

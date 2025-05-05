import diretora from "../../assets/images/diretora.png";

function Diretora() {
  return (
    <section className="container-fluid my-5">
      <div className="director-quote-section">
        <div className="row align-items-center">
          <div className="col-md-7 p-4">
            <blockquote className="director-quote">
              " A instituição planeja estrategicamente para o ano letivo,
              projetos inovadores e multidisciplinares a fim de estimular o
              ensino-aprendizado, além de promover relações interpessoais entre
              colegas, funcionários, fortalecendo o respeito às diferentes
              crenças e culturas da região e do país."
            </blockquote>
          </div>

          <div className="col-md-5 d-flex flex-column align-items-center p-4">
            <div className="director-image-container">
              <img
                src={diretora}
                alt="Diretora Vanessa Lima"
                className="director-image"
              />
            </div>
            <h3 className="director-name mt-3">Vanessa Lima</h3>
            <p className="director-title">Diretora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Diretora;

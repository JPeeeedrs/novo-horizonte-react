import ballet from "../../assets/images/ballet.png";
import computadores from "../../assets/images/computadores.png";
import capoeira from "../../assets/images/capoeira.png";
import jiujitsu from "../../assets/images/jiujitsu.png";
import EF from "../../assets/images/EF.png";

function AtividadesCarrossel() {
  return (
    <section id="atividades_carrossel">
      <div
        id="splitCarousel"
        className="carousel slide split-carousel-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="split-carousel-content">
              <div className="text-content">
                <h2>Ballet</h2>
                <p>
                  O ballet é mais do que uma dança — é uma forma de expressão,
                  disciplina e sensibilidade. Nas nossas aulas, os alunos
                  trabalham postura, equilíbrio, coordenação e autoestima, tudo
                  em um ambiente acolhedor e divertido. Através do movimento e
                  da música, as crianças aprendem a se conhecer melhor, a
                  respeitar o ritmo do outro e a se expressar com leveza e
                  confiança.
                </p>
              </div>
              <div className="image-content">
                <img src={ballet} alt="Ballet" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="split-carousel-content">
              <div className="text-content">
                <h2>Informática</h2>
                <p>
                  Aqui na Novo Horizonte reconhecemos que estamos na era
                  digital. Queremos preparar nossos alunos para os desafios e
                  oportunidades do mundo moderno. Por isso, oferecemos aulas de
                  Informática desde cedo, com foco no desenvolvimento do
                  pensamento lógico, criatividade e no uso responsável da
                  tecnologia.
                </p>
              </div>
              <div className="image-content">
                <img src={computadores} alt="Informática" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="split-carousel-content">
              <div className="text-content">
                <h2>Capoeira</h2>
                <p>
                  Por meio dessa arte brasileira que une luta, dança e música,
                  nossos alunos aprendem sobre disciplina, trabalho em equipe,
                  coordenação motora e a rica história cultural do nosso país.
                  As aulas são dinâmicas, inclusivas e despertam o interesse dos
                  pequenos de forma lúdica e envolvente.
                </p>
              </div>
              <div className="image-content">
                <img src={capoeira} alt="Capoeira" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="split-carousel-content">
              <div className="text-content">
                <h2>Jiu-Jítsu</h2>
                <p>
                  As aulas de Jiu-Jitsu ensinam muito mais do que técnicas de
                  defesa pessoal — elas trabalham o respeito, a disciplina, o
                  autocontrole e a confiança. De forma segura e orientada,
                  nossos alunos aprendem a se conhecer melhor, a lidar com
                  desafios e a desenvolver a concentração e a cooperação, sempre
                  em um ambiente de amizade e superação.
                </p>
              </div>
              <div className="image-content">
                <img src={jiujitsu} alt="Jiu-Jitsu" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="split-carousel-content">
              <div className="text-content">
                <h2>Educação Física</h2>
                <p>
                  O movimento faz parte do aprendizado! Nas aulas de Educação
                  Física, estimulamos hábitos saudáveis, o trabalho em equipe e
                  a superação de limites. Com atividades que vão desde jogos
                  cooperativos até esportes e circuitos motores, nossos alunos
                  se desenvolvem com energia, disciplina e alegria.
                </p>
              </div>
              <div className="image-content">
                <img src={EF} alt="Educação Física" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#splitCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#splitCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#splitCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#splitCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#splitCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#splitCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#splitCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
      </div>
    </section>
  );
}

export default AtividadesCarrossel;

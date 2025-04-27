import escola from "../../assets/images/fachadaEscola.png";
import alunos2 from "../../assets/images/alunos2.png";
import alunos3 from "../../assets/images/alunos3.png";
import alunos1 from "../../assets/images/alunos1.png";

function EscolaCarrossel() {
  return (
    <div
      id="schoolCarousel"
      className="carousel slide my-4 carousel-container"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={escola} className="d-block w-100" alt="Escola" />
        </div>
        <div className="carousel-item">
          <img src={alunos2} className="d-block w-100" alt="Alunos" />
        </div>
        <div className="carousel-item">
          <img src={alunos3} className="d-block w-100" alt="Biblioteca" />
        </div>
        <div className="carousel-item">
          <img src={alunos1} className="d-block w-100" alt="Laboratório" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#schoolCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#schoolCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default EscolaCarrossel;

import profgen from "../../assets/images/profGenerica.jpg";

function ProfGen() {
  return (
    <section className="container-fluid my-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-4">
          <h2 className="mb-4">Nossa Missão</h2>
          <p className="mission-text">
            A finalidade é proporcionar um ambiente motivador, para que as
            potencialidades de cada indivíduo sejam expressadas, adquirindo
            conhecimentos únicos e novas vivências de acordo com o dia a dia nas
            salas de aula.
          </p>
        </div>

        <div className="col-md-6 p-4">
          <div className="mission-image-container">
            <img src={profgen} className="img-fluid rounded" alt="Escola" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfGen;

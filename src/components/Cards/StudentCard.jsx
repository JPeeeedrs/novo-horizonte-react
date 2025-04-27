import alunos from "../../utils/bancoTemp";
function StudentCard() {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#902121",
        }}
      >
        {" "}
        <div className="row">
          {alunos.map((aluno, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#acacac" }}
              >
                <div className="card-body d-flex flex-column align-items-center ">
                  <h5 className="card-title">{aluno.nome}</h5>
                  <p className="card-text">Idade: {aluno.idade} anos</p>
                  <p className="card-text">Data Nasc.: {aluno.nascimento}</p>
                  <p>CPF: {aluno.cpf}</p>
                  <p className="card-text">RG: {aluno.rg}</p>
                  <p className="card-text">Tipo Sang.: {aluno.tipoSanguineo}</p>
                  <p className="card-text">Reside com: {aluno.resideCom}</p>
                  <p className="card-text">Telefone pai: {aluno.telefonePai}</p>
                  <p className="card-text">Telefone mãe: {aluno.telefoneMae}</p>
                  <p className="card-text">
                    Responsável financeiro: {aluno.responsavelFinanceiro}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentCard;

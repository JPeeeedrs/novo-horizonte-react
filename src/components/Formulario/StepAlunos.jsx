function StepAluno({ onNext }) {
  return (
    <div className="step active" id="aluno">
      <div className="row g-3">
        <h3 className="mt-4">Dados do Aluno</h3>
        <div className="col-md-4">
          <label htmlFor="inputName" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="nome"
            placeholder="João da Silva"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputAge" className="form-label">
            Idade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAge"
            name="idade"
            placeholder="00"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputBirthDate"
            name="data_nascimento"
            placeholder="00/00/0000"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputNaturalidade" className="form-label">
            Naturalidade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNaturalidade"
            name="naturalidade"
            placeholder="Teresopolitano"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputNacionalidade" className="form-label">
            Nacionalidade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNacionalidade"
            name="nacionalidade"
            placeholder="Brasileira"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            Sexo
          </label>
          <select id="inputSexo" className="form-select" name="sexo" required>
            <option disabled hidden>
              Selecione
            </option>
            <option>Feminino</option>
            <option>Masculino</option>
            <option>Não Binário</option>
            <option>Outro</option>
            <option>Prefiro não informar</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputCPFAluno" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCPFAluno"
            name="cpf_aluno"
            placeholder="000.000.000-00"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputRGAluno" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputRGAluno"
            name="rg_aluno"
            placeholder="00.000.000-0"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputYear" className="form-label">
            Ano Letivo
          </label>
          <input
            type="text"
            className="form-control"
            id="inputYear"
            name="ano_letivo"
            placeholder="2025"
            required
          />
        </div>

        <div className="col-12">
          <div className="row">
            <h6>Certidão de Nascimento</h6>
            <div className="col-md-4">
              <label htmlFor="inputTermo" className="form-label">
                Termo
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTermo"
                name="termo"
                placeholder="00000"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputFolha" className="form-label">
                Folha
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFolha"
                name="folha"
                placeholder="000"
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputLivro" className="form-label">
                Livro
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLivro"
                name="livro"
                placeholder="000"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="inputMatricula" className="form-label">
                Matrícula
              </label>
              <input
                type="text"
                className="form-control"
                id="inputMatricula"
                name="matricula"
                placeholder="0000000"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputShift" className="form-label">
            Turno
          </label>
          <select id="inputShift" className="form-select" name="turno" required>
            <option disabled hidden>
              Selecione
            </option>
            <option>Manhã</option>
            <option>Tarde</option>
            <option>Integral</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputBlood" className="form-label">
            Tipo Sanguíneo
          </label>
          <select id="inputBlood" className="form-select" name="tipo_sanguineo">
            <option disabled hidden>
              Selecione
            </option>
            <option>-O</option>
            <option>+O</option>
            <option>-A</option>
            <option>+A</option>
            <option>-B</option>
            <option>+B</option>
            <option>-AB</option>
            <option>+AB</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputRace" className="form-label">
            Raça
          </label>
          <select id="inputRace" className="form-select" name="raca">
            <option disabled hidden>
              Selecione
            </option>
            <option>Parda</option>
            <option>Branca</option>
            <option>Pretos</option>
            <option>Indígenas</option>
            <option>Amarela</option>
          </select>
        </div>
      </div>
      <button type="button" className="btn btn-nav" onClick={onNext}>
        Próximo
      </button>
    </div>
  );
}

export default StepAluno;

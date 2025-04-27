function StepAluno({ onNext, formData, onChange }) {
  return (
    <div className="step" id="aluno">
      <div className="row g-3">
        <h3 className="mt-4">Dados do Aluno</h3>

        {/* Nome */}
        <div className="col-md-4">
          <label htmlFor="inputName" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="nome"
            value={formData.aluno.nome || ""}
            onChange={onChange}
            placeholder="João da Silva"
          />
        </div>

        {/* Idade */}
        <div className="col-md-4">
          <label htmlFor="inputAge" className="form-label">
            Idade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAge"
            name="idade"
            value={formData.aluno.idade || ""}
            onChange={onChange}
            placeholder="00"
          />
        </div>

        {/* Data de Nascimento */}
        <div className="col-md-4">
          <label htmlFor="inputBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputBirthDate"
            name="data_nascimento"
            value={formData.aluno.data_nascimento || ""}
            onChange={onChange}
          />
        </div>

        {/* Naturalidade */}
        <div className="col-md-4">
          <label htmlFor="inputNaturalidade" className="form-label">
            Naturalidade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNaturalidade"
            name="naturalidade"
            value={formData.aluno.naturalidade || ""}
            onChange={onChange}
            placeholder="Teresopolitano"
          />
        </div>

        {/* Nacionalidade */}
        <div className="col-md-4">
          <label htmlFor="inputNacionalidade" className="form-label">
            Nacionalidade
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNacionalidade"
            name="nacionalidade"
            value={formData.aluno.nacionalidade || ""}
            onChange={onChange}
            placeholder="Brasileira"
          />
        </div>

        {/* Sexo */}
        <div className="col-md-4">
          <label htmlFor="inputSexo" className="form-label">
            Sexo
          </label>
          <select
            id="inputSexo"
            className="form-select"
            name="sexo"
            value={formData.aluno.sexo || ""}
            onChange={onChange}
          >
            <option disabled hidden value="">
              Selecione
            </option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Não Binário">Não Binário</option>
            <option value="Outro">Outro</option>
            <option value="Prefiro não informar">Prefiro não informar</option>
          </select>
        </div>

        {/* CPF */}
        <div className="col-md-4">
          <label htmlFor="inputCPFAluno" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCPFAluno"
            name="cpf_aluno"
            value={formData.aluno.cpf_aluno || ""}
            onChange={onChange}
            placeholder="000.000.000-00"
          />
        </div>

        {/* RG */}
        <div className="col-md-4">
          <label htmlFor="inputRGAluno" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputRGAluno"
            name="rg_aluno"
            value={formData.aluno.rg_aluno || ""}
            onChange={onChange}
            placeholder="00.000.000-0"
          />
        </div>

        {/* Ano Letivo */}
        <div className="col-md-4">
          <label htmlFor="inputYear" className="form-label">
            Ano Letivo
          </label>
          <input
            type="text"
            className="form-control"
            id="inputYear"
            name="ano_letivo"
            value={formData.aluno.ano_letivo || ""}
            onChange={onChange}
            placeholder="2025"
          />
        </div>

        {/* Certidão de Nascimento */}
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
                value={formData.aluno.termo || ""}
                onChange={onChange}
                placeholder="00000"
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
                value={formData.aluno.folha || ""}
                onChange={onChange}
                placeholder="000"
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
                value={formData.aluno.livro || ""}
                onChange={onChange}
                placeholder="000"
              />
            </div>
          </div>
        </div>

        {/* Matrícula */}
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
                value={formData.aluno.matricula || ""}
                onChange={onChange}
                placeholder="0000000"
              />
            </div>
          </div>
        </div>

        {/* Turno */}
        <div className="col-md-4">
          <label htmlFor="inputShift" className="form-label">
            Turno
          </label>
          <select
            id="inputShift"
            className="form-select"
            name="turno"
            value={formData.aluno.turno || ""}
            onChange={onChange}
          >
            <option disabled hidden value="">
              Selecione
            </option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Integral">Integral</option>
          </select>
        </div>

        {/* Tipo Sanguíneo */}
        <div className="col-md-4">
          <label htmlFor="inputBlood" className="form-label">
            Tipo Sanguíneo
          </label>
          <select
            id="inputBlood"
            className="form-select"
            name="tipo_sanguineo"
            value={formData.aluno.tipo_sanguineo || ""}
            onChange={onChange}
          >
            <option disabled hidden value="">
              Selecione
            </option>
            <option value="-O">-O</option>
            <option value="+O">+O</option>
            <option value="-A">-A</option>
            <option value="+A">+A</option>
            <option value="-B">-B</option>
            <option value="+B">+B</option>
            <option value="-AB">-AB</option>
            <option value="+AB">+AB</option>
          </select>
        </div>

        {/* Raça */}
        <div className="col-md-4">
          <label htmlFor="inputRace" className="form-label">
            Raça
          </label>
          <select
            id="inputRace"
            className="form-select"
            name="raca"
            value={formData.aluno.raca || ""}
            onChange={onChange}
          >
            <option disabled hidden value="">
              Selecione
            </option>
            <option value="Parda">Parda</option>
            <option value="Branca">Branca</option>
            <option value="Pretos">Pretos</option>
            <option value="Indígenas">Indígenas</option>
            <option value="Amarela">Amarela</option>
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

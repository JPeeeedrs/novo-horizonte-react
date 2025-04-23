function StepPai({ onNext, onBack }) {
  return (
    <div className="step" id="pai">
      <div className="row g-3">
        <h3 className="mt-4">Dados dos Familiares</h3>
        <h5>Dados da Pai</h5>
        <div className="col-md-4">
          <label htmlFor="inputFatherName" className="form-label">
            Nome da Pai
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherName"
            name="nome_pai"
            placeholder="Julio da Silva"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputFatherBirthDate"
            name="nascimento_pai"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherAddress" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherAddress"
            name="endereco_pai"
            placeholder="Rua Manoel Gomes, 000"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherCEP" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherCEP"
            name="cep_pai"
            placeholder="00000-000"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherCPF" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherCPF"
            name="cpf_pai"
            placeholder="000.000.000-00"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherRG" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherRG"
            name="rg_pai"
            placeholder="00.000.000-0"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherFone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputFatherFone"
            name="fone_pai"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputFatherEmail"
            name="email_pai"
            placeholder="nome@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Digite um email válido (exemplo: usuario@provedor.com)"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherProfession" className="form-label">
            Profissão
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherProfession"
            name="profissao_pai"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherWorkplace" className="form-label">
            Local de Trabalho
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherWorkplace"
            name="trabalho_pai"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputFatherWorkFone" className="form-label">
            Telefone do Trabalho
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputFatherWorkFone"
            name="fone_trabalho_pai"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>
      <button type="button" className="btn btn-nav" onClick={onBack}>
        Anterior
      </button>
      <button type="button" className="btn btn-nav" onClick={onNext}>
        Próximo
      </button>
    </div>
  );
}

export default StepPai;

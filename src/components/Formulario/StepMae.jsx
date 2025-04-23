function StepMae({ onNext, onBack }) {
  return (
    <div className="step" id="mae">
      <div className="row g-3">
        <h3 className="mt-4">Dados dos Familiares</h3>
        <h5>Dados da Mãe</h5>
        <div className="col-md-4">
          <label htmlFor="inputMotherName" className="form-label">
            Nome da Mãe
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherName"
            name="nome_mae"
            placeholder="Maria da Silva"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputMotherBirthDate"
            name="nascimento_mae"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherAddress" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherAddress"
            name="endereco_mae"
            placeholder="Rua Manoel Gomes, 000"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherCEP" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherCEP"
            name="cep_mae"
            placeholder="00000-000"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherCPF" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherCPF"
            name="cpf_mae"
            placeholder="000.000.000-00"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherRG" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherRG"
            name="rg_mae"
            placeholder="00.000.000-0"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherFone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputMotherFone"
            name="fone_mae"
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputMotherEmail"
            name="email_mae"
            placeholder="nome@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Digite um email válido (exemplo: usuario@provedor.com)"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherProfession" className="form-label">
            Profissão
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherProfession"
            name="profissao_mae"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherWorkplace" className="form-label">
            Local de Trabalho
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherWorkplace"
            name="trabalho_mae"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputMotherWorkFone" className="form-label">
            Telefone do Trabalho
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputMotherWorkFone"
            name="fone_trabalho_mae"
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

export default StepMae;

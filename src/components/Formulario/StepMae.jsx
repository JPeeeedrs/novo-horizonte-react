function StepMae({ onNext, onBack, formData = {}, onChange }) {
  const safeFormData = {
    nome_mae: formData.nome_mae || "",
    nascimento_mae: formData.nascimento_mae || "",
    endereco_mae: formData.endereco_mae || "",
    cep_mae: formData.cep_mae || "",
    cpf_mae: formData.cpf_mae || "",
    rg_mae: formData.rg_mae || "",
    fone_mae: formData.fone_mae || "",
    email_mae: formData.email_mae || "",
    profissao_mae: formData.profissao_mae || "",
    trabalho_mae: formData.trabalho_mae || "",
    fone_trabalho_mae: formData.fone_trabalho_mae || "",
  };

  return (
    <div className="step" id="mae">
      <div className="row g-3">
        <h3 className="mt-4">Dados dos Familiares</h3>
        <h5>Dados da Mãe</h5>
        {/* Nome da Mãe */}
        <div className="col-md-4">
          <label htmlFor="inputMotherName" className="form-label">
            Nome da Mãe
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherName"
            name="nome_mae"
            value={safeFormData.nome_mae}
            onChange={onChange}
            placeholder="Maria da Silva"
          />
        </div>

        {/* Data de Nascimento */}
        <div className="col-md-4">
          <label htmlFor="inputMotherBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputMotherBirthDate"
            name="nascimento_mae"
            value={safeFormData.nascimento_mae}
            onChange={onChange}
          />
        </div>

        {/* Endereço */}
        <div className="col-md-4">
          <label htmlFor="inputMotherAddress" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherAddress"
            name="endereco_mae"
            value={safeFormData.endereco_mae}
            onChange={onChange}
            placeholder="Rua Manoel Gomes, 000"
          />
        </div>

        {/* CEP */}
        <div className="col-md-4">
          <label htmlFor="inputMotherCEP" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherCEP"
            name="cep_mae"
            value={safeFormData.cep_mae}
            onChange={onChange}
            placeholder="00000-000"
          />
        </div>

        {/* CPF */}
        <div className="col-md-4">
          <label htmlFor="inputMotherCPF" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherCPF"
            name="cpf_mae"
            value={safeFormData.cpf_mae}
            onChange={onChange}
            placeholder="000.000.000-00"
          />
        </div>

        {/* RG */}
        <div className="col-md-4">
          <label htmlFor="inputMotherRG" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherRG"
            name="rg_mae"
            value={safeFormData.rg_mae}
            onChange={onChange}
            placeholder="00.000.000-0"
          />
        </div>

        {/* Telefone */}
        <div className="col-md-4">
          <label htmlFor="inputMotherFone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputMotherFone"
            name="fone_mae"
            value={safeFormData.fone_mae}
            onChange={onChange}
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Email */}
        <div className="col-md-4">
          <label htmlFor="inputMotherEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputMotherEmail"
            name="email_mae"
            value={safeFormData.email_mae}
            onChange={onChange}
            placeholder="nome@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Digite um email válido (exemplo: usuario@provedor.com)"
          />
        </div>

        {/* Profissão */}
        <div className="col-md-4">
          <label htmlFor="inputMotherProfession" className="form-label">
            Profissão
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherProfession"
            name="profissao_mae"
            value={safeFormData.profissao_mae}
            onChange={onChange}
          />
        </div>

        {/* Local de Trabalho */}
        <div className="col-md-4">
          <label htmlFor="inputMotherWorkplace" className="form-label">
            Local de Trabalho
          </label>
          <input
            type="text"
            className="form-control"
            id="inputMotherWorkplace"
            name="trabalho_mae"
            value={safeFormData.trabalho_mae}
            onChange={onChange}
          />
        </div>

        {/* Telefone do Trabalho */}
        <div className="col-md-4">
          <label htmlFor="inputMotherWorkFone" className="form-label">
            Telefone do Trabalho
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputMotherWorkFone"
            name="fone_trabalho_mae"
            value={safeFormData.fone_trabalho_mae}
            onChange={onChange}
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

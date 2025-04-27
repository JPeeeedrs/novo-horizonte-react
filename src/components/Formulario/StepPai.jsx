function StepPai({ onNext, onBack, formData, onChange }) {
  return (
    <div className="step" id="pai">
      <div className="row g-3">
        <h3 className="mt-4">Dados dos Familiares</h3>
        <h5>Dados do Pai</h5> {/* Corrigido para "do Pai" */}
        {/* Nome do Pai */}
        <div className="col-md-4">
          <label htmlFor="inputFatherName" className="form-label">
            Nome do Pai
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherName"
            name="nomePai"
            value={formData.pai.nomePai || ""}
            onChange={onChange}
            placeholder="Julio da Silva"
          />
        </div>
        {/* Data de Nascimento */}
        <div className="col-md-4">
          <label htmlFor="inputFatherBirthDate" className="form-label">
            Data de Nascimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputFatherBirthDate"
            name="nascimentoPai"
            value={formData.pai.nascimentoPai || ""}
            onChange={onChange}
          />
        </div>
        {/* Endereço */}
        <div className="col-md-4">
          <label htmlFor="inputFatherAddress" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherAddress"
            name="enderecoPai"
            value={formData.pai.enderecoPai || ""}
            onChange={onChange}
            placeholder="Rua Manoel Gomes, 000"
          />
        </div>
        {/* CEP */}
        <div className="col-md-4">
          <label htmlFor="inputFatherCEP" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherCEP"
            name="cepPai"
            value={formData.pai.cepPai || ""}
            onChange={onChange}
            placeholder="00000-000"
          />
        </div>
        {/* CPF */}
        <div className="col-md-4">
          <label htmlFor="inputFatherCPF" className="form-label">
            CPF
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherCPF"
            name="cpfPai"
            value={formData.pai.cpfPai || ""}
            onChange={onChange}
            placeholder="000.000.000-00"
          />
        </div>
        {/* RG */}
        <div className="col-md-4">
          <label htmlFor="inputFatherRG" className="form-label">
            RG
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherRG"
            name="rgPai"
            value={formData.pai.rgPai || ""}
            onChange={onChange}
            placeholder="00.000.000-0"
          />
        </div>
        {/* Telefone */}
        <div className="col-md-4">
          <label htmlFor="inputFatherFone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputFatherFone"
            name="fonePai"
            value={formData.pai.fonePai || ""}
            onChange={onChange}
            placeholder="(00) 00000-0000"
          />
        </div>
        {/* Email */}
        <div className="col-md-4">
          <label htmlFor="inputFatherEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputFatherEmail"
            name="emailPai"
            value={formData.pai.emailPai || ""}
            onChange={onChange}
            placeholder="nome@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Digite um email válido (exemplo: usuario@provedor.com)"
          />
        </div>
        {/* Profissão */}
        <div className="col-md-4">
          <label htmlFor="inputFatherProfession" className="form-label">
            Profissão
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherProfession"
            name="profissaoPai"
            value={formData.pai.profissaoPai || ""}
            onChange={onChange}
          />
        </div>
        {/* Local de Trabalho */}
        <div className="col-md-4">
          <label htmlFor="inputFatherWorkplace" className="form-label">
            Local de Trabalho
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFatherWorkplace"
            name="trabalhoPai"
            value={formData.pai.trabalhoPai || ""}
            onChange={onChange}
          />
        </div>
        {/* Telefone do Trabalho */}
        <div className="col-md-4">
          <label htmlFor="inputFatherWorkFone" className="form-label">
            Telefone do Trabalho
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputFatherWorkFone"
            name="fone_trabalhoPai"
            value={formData.pai.fone_trabalhoPai || ""}
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

export default StepPai;

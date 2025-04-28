function StepAnamnese({ onNext, onBack, formData = {}, onChange }) {
  const safeFormData = {
    matriculaTipo: formData.matriculaTipo || "",
    escola: formData.escola || "",
    temIrmaos: formData.temIrmaos || "",
    irmaos_nome: formData.irmaos_nome || "",
    irmaos_turma: formData.irmaos_turma || "",
    temEspecialista: formData.temEspecialista || "",
    especialista: formData.especialista || "",
    temAlergias: formData.temAlergias || "",
    alergia: formData.alergia || "",
    temMedicamento: formData.temMedicamento || "",
    medicamento: formData.medicamento || "",
    reside: formData.reside || "",
  };

  return (
    <div className="step" id="anamnese">
      <div className="row g-3">
        <h3>Anamnese Inicial</h3>
        {/* Matrícula */}
        <div className="col-md-4">
          <label htmlFor="selectMatri" className="form-label">
            Matrícula
          </label>
          <select
            name="matriculaTipo"
            className="form-select"
            id="selectMatri"
            value={safeFormData.matriculaTipo}
            onChange={onChange}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="inicial">Inicial</option>
            <option value="municipal">Transferência Municipal/Estadual</option>
            <option value="particular">Transferência Particular</option>
          </select>
        </div>
        <div className="col-md-8">
          {(safeFormData.matriculaTipo === "municipal" ||
            safeFormData.matriculaTipo === "particular") && (
            <div>
              <label htmlFor="inputSchool" className="form-label">
                Qual Escola
              </label>
              <input
                type="text"
                id="inputSchool"
                className="form-control"
                name="escola"
                value={safeFormData.escola}
                onChange={onChange}
                placeholder="Escola"
              />
            </div>
          )}
        </div>

        {/* Irmãos */}
        <div className="col-md-4">
          <label htmlFor="selectBrothers" className="form-label">
            Irmão(s)
          </label>
          <select
            name="temIrmaos"
            className="form-select"
            id="selectBrothers"
            value={safeFormData.temIrmaos}
            onChange={onChange}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {safeFormData.temIrmaos === "sim" && (
            <div className="d-flex">
              <div className="flex-grow-1 me-3">
                <label htmlFor="inputBrothersName" className="form-label">
                  Qual(s) irmão(s)?
                </label>
                <input
                  type="text"
                  id="inputBrothersName"
                  className="form-control"
                  name="irmaos_nome"
                  value={safeFormData.irmaos_nome}
                  onChange={onChange}
                  placeholder="Ex: João, Maria, Pedro"
                />
              </div>
              <div className="flex-grow-1">
                <label htmlFor="inputBrothersClass" className="form-label">
                  Turma
                </label>
                <input
                  type="text"
                  id="inputBrothersClass"
                  className="form-control"
                  name="irmaos_turma"
                  value={safeFormData.irmaos_turma}
                  onChange={onChange}
                  placeholder="Ex: 1A, 2B, 3C"
                />
              </div>
            </div>
          )}
        </div>

        {/* Especialista */}
        <div className="col-md-4">
          <label htmlFor="selectSpecial" className="form-label">
            Especialista
          </label>
          <select
            name="temEspecialista"
            className="form-select"
            id="selectSpecial"
            value={safeFormData.temEspecialista}
            onChange={onChange}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {safeFormData.temEspecialista === "sim" && (
            <div>
              <label htmlFor="inputQualEspecialista" className="form-label">
                Qual especialista?
              </label>
              <input
                type="text"
                id="inputQualEspecialista"
                className="form-control"
                name="especialista"
                value={safeFormData.especialista}
                onChange={onChange}
                placeholder="Ex: Neurologista, Fonoaudiólogo"
              />
            </div>
          )}
        </div>

        {/* Alergias */}
        <div className="col-md-4">
          <label htmlFor="selectAlergias" className="form-label">
            Alergias
          </label>
          <select
            name="temAlergias"
            className="form-select"
            id="selectAlergias"
            value={safeFormData.temAlergias}
            onChange={onChange}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {safeFormData.temAlergias === "sim" && (
            <div>
              <label htmlFor="inputQualAlergia" className="form-label">
                Qual alergia?
              </label>
              <input
                type="text"
                id="inputQualAlergia"
                className="form-control"
                name="alergia"
                value={safeFormData.alergia}
                onChange={onChange}
                placeholder="Ex: Alimentação, Remédios..."
              />
            </div>
          )}
        </div>

        {/* Medicamentos */}
        <div className="col-md-4">
          <label htmlFor="selectMedicine" className="form-label">
            Medicamento em uso
          </label>
          <select
            name="temMedicamento"
            className="form-select"
            id="selectMedicine"
            value={safeFormData.temMedicamento}
            onChange={onChange}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {safeFormData.temMedicamento === "sim" && (
            <div>
              <label htmlFor="inputQualMedicine" className="form-label">
                Qual medicamento?
              </label>
              <input
                type="text"
                id="inputQualMedicine"
                className="form-control"
                name="medicamento"
                value={safeFormData.medicamento}
                onChange={onChange}
                placeholder="Ex: Aspirina, Paracetamol..."
              />
            </div>
          )}
        </div>

        {/* Reside com */}
        <div className="col-md-4">
          <label htmlFor="inputReside" className="form-label">
            Reside Com
          </label>
          <input
            type="text"
            className="form-control"
            id="inputReside"
            name="reside"
            value={safeFormData.reside}
            onChange={onChange}
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

export default StepAnamnese;

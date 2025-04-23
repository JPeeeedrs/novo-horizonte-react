import { useState } from "react";

function StepAnamnese({ onNext, onBack }) {
  const [matriculaTipo, setMatriculaTipo] = useState("");
  const [temIrmaos, setTemIrmaos] = useState("");
  const [temEspecialista, setTemEspecialista] = useState("");
  const [temAlergias, setTemAlergias] = useState("");
  const [temMedicamento, setTemMedicamento] = useState("");

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
            name="inputMatri"
            className="form-select"
            id="selectMatri"
            value={matriculaTipo}
            onChange={(e) => setMatriculaTipo(e.target.value)}
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
          {(matriculaTipo === "municipal" ||
            matriculaTipo === "particular") && (
            <div>
              <label htmlFor="inputSchool" className="form-label">
                Qual Escola
              </label>
              <input
                type="text"
                id="inputSchool"
                className="form-control"
                name="escola"
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
            name="inputBrothers"
            className="form-select"
            id="selectBrothers"
            value={temIrmaos}
            onChange={(e) => setTemIrmaos(e.target.value)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {temIrmaos === "sim" && (
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
            name="inputSpecial"
            className="form-select"
            id="selectSpecial"
            value={temEspecialista}
            onChange={(e) => setTemEspecialista(e.target.value)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {temEspecialista === "sim" && (
            <div>
              <label htmlFor="inputQualEspecialista" className="form-label">
                Qual especialista?
              </label>
              <input
                type="text"
                id="inputQualEspecialista"
                className="form-control"
                name="especialista"
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
            name="inputAlergias"
            className="form-select"
            id="selectAlergias"
            value={temAlergias}
            onChange={(e) => setTemAlergias(e.target.value)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {temAlergias === "sim" && (
            <div>
              <label htmlFor="inputQualAlergia" className="form-label">
                Qual alergia?
              </label>
              <input
                type="text"
                id="inputQualAlergia"
                className="form-control"
                name="alergia"
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
            name="inputMedicine"
            className="form-select"
            id="selectMedicine"
            value={temMedicamento}
            onChange={(e) => setTemMedicamento(e.target.value)}
          >
            <option disabled value="">
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div className="col-md-8">
          {temMedicamento === "sim" && (
            <div>
              <label htmlFor="inputQualMedicine" className="form-label">
                Qual medicamento?
              </label>
              <input
                type="text"
                id="inputQualMedicine"
                className="form-control"
                name="medicamento"
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

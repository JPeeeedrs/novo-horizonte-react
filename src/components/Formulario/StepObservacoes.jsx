import termos from "../../assets/images/termos.pdf";

// expotação para CSV e PDF
import { exportarParaCsv } from "../../utils/exportCsv";
import { exportarParaPdf } from "../../utils/exportPdf";

function StepObservacoes({ onBack, formData, onChange, onSubmit }) {
  const handleExportPdf = () => {
    const formElement = document.querySelector("form");
    if (formElement) {
      exportarParaPdf();
    } else {
      console.error("Formulário não encontrado.");
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const currentDocs = formData.observacoes.documentos || [];

    const updatedDocs = checked
      ? [...currentDocs, value]
      : currentDocs.filter((doc) => doc !== value);

    onChange({
      target: {
        name: "documentos",
        value: updatedDocs,
      },
    });
  };

  return (
    <div className="step" id="observacoes">
      <div className="row g-3">
        <h3 className="mt-4">Observações</h3>

        {/* Pessoas Autorizadas */}
        <div className="col-md-12">
          <label htmlFor="inputObservations" className="form-label">
            Pessoas Autorizadas a Buscar na Escola
          </label>
          <textarea
            className="form-control"
            id="inputObservations"
            name="pessoas_autorizadas"
            value={formData.observacoes.pessoas_autorizadas || ""}
            onChange={onChange}
            rows="1"
            placeholder="Nomes"
          ></textarea>
        </div>

        {/* Documentos Apresentados */}
        <div className="col-12 mt-3">
          <h5>Documentos Apresentados</h5>
          <div className="row" id="doc">
            {[
              "Certidão de Nascimento",
              "Carteira de Vacinação",
              "Declaração Escolar",
              "Comprovante de Residência",
              "Fotos",
              "RG/CPF Mãe",
              "RG/CPF Pai",
              "Histórico Escolar",
            ].map((doc, i) => (
              <div className="col-4 mb-2 form-check" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`doc-${i}`}
                  name="documentos"
                  value={doc}
                  checked={
                    formData.observacoes.documentos?.includes(doc) || false
                  }
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={`doc-${i}`}>
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Valor do Contrato */}
        <div className="col-md-6">
          <label htmlFor="inputValor" className="form-label">
            Valor do Contrato
          </label>
          <input
            type="text"
            className="form-control"
            id="inputValor"
            name="valor_contrato"
            value={formData.observacoes.valor_contrato || ""}
            onChange={onChange}
          />
        </div>

        {/* Vencimento */}
        <div className="col-md-6">
          <label htmlFor="inputVencimento" className="form-label">
            Vencimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputVencimento"
            name="vencimento"
            value={formData.observacoes.vencimento || ""}
            onChange={onChange}
          />
        </div>

        {/* Botões */}
        <div className="col-12 mt-3 d-flex flex-wrap gap-2">
          <button type="button" className="btn btn-nav" onClick={onBack}>
            Anterior
          </button>

          <button type="button" className="btn btn-submit" onClick={onSubmit}>
            Cadastrar
          </button>

          <a href={termos} download className="btn btn-termo">
            Baixar Termos
          </a>

          <button
            type="button"
            className="btn btn-csv"
            onClick={() => exportarParaCsv(formData)}
          >
            Exportar CSV
          </button>

          <button
            type="button"
            className="btn btn-pdf"
            onClick={() => handleExportPdf(formData)}
          >
            Exportar PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepObservacoes;

import termos from "../../assets/images/termos.pdf";
import { exportarParaCsv } from "../../utils/exportCsv";
import { exportarParaPdf } from "../../utils/exportPdf";

function StepObservacoes({ onBack }) {
  const handleExportPdf = () => {
    const formElement = document.querySelector("form"); // Selecionar o formulário principal
    if (formElement) {
      exportarParaPdf(); // Chamar a função de exportação
    } else {
      console.error("Formulário não encontrado.");
    }
  };

  return (
    <div className="step" id="observacoes">
      <div className="row g-3">
        <h3 className="mt-4">Observações</h3>
        <div className="col-md-12">
          <label htmlFor="inputObservations" className="form-label">
            Pessoas Autorizadas a Buscar na Escola
          </label>
          <textarea
            className="form-control"
            id="inputObservations"
            name="observacoes"
            rows="1"
            placeholder="Nomes"
          ></textarea>
        </div>
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
              <div className="col-4 mb-2 form-check" id="inputdoc" key={i}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`doc-${i}`}
                  name="documentos"
                  value={doc}
                />
                <label className="form-check-label" htmlFor={`doc-${i}`}>
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputValor" className="form-label">
            Valor do Contrato
          </label>
          <input
            type="text"
            className="form-control"
            id="inputValor"
            name="valor_contrato"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputVencimento" className="form-label">
            Vencimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputVencimento"
            name="vencimento"
          />
        </div>

        <div className="col-12 mt-3 d-flex flex-wrap gap-2">
          <button type="button" className="btn btn-nav" onClick={onBack}>
            Anterior
          </button>

          <button type="submit" className="btn btn-submit">
            Cadastrar
          </button>

          <a
            href={termos}
            download
            className="btn btn-termo"
            id="downloadTerms"
          >
            Baixar Termos
          </a>

          <button
            type="button"
            className="btn btn-csv"
            onClick={exportarParaCsv}
          >
            Exportar CSV
          </button>

          <button
            type="button"
            className="btn btn-pdf"
            onClick={handleExportPdf}
          >
            Exportar PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepObservacoes;

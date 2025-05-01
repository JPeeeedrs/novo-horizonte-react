import { exportarParaPdf } from "../../utils/exportPdf";
import { exportarParaCsv } from "../../utils/exportCsv";
import termos from "../../assets/images/termos.pdf";

function StepObservacoes({ onBack, formData, onChange, loading }) {
	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		const currentDocs = formData.documentos || [];
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
		<div className='step' id='observacoes'>
			<div className='row g-3'>
				<h3 className='mt-4'>Observações</h3>

				{/* Pessoas Autorizadas */}
				<div className='col-md-12'>
					<label htmlFor='inputObservations' className='form-label'>
						Pessoas Autorizadas a Buscar na Escola
					</label>
					<textarea
						className='form-control'
						id='inputObservations'
						name='pessoasAutorizadas'
						value={formData.pessoasAutorizadas || ""}
						onChange={onChange}
						rows={3}
						placeholder='Nomes completos separados por vírgula'
					/>
				</div>

				{/* Documentos Apresentados
        <div className="col-12 mt-3">
          <h5>Documentos Apresentados</h5>
          <div className="row">
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
              <div className="col-4 mb-2 form-check" key={`doc-${i}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`doc-${i}`}
                  value={doc}
                  checked={formData.documentos?.includes(doc) || false}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={`doc-${i}`}>
                  {doc}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Valor do Contrato 
        <div className="col-md-6">
          <label htmlFor="inputValor" className="form-label">
            Valor do Contrato (R$)
          </label>
          <input
            type="text"
            className="form-control"
            id="inputValor"
            name="valorContrato"
            value={formData.valorContrato || ""}
            onChange={onChange}
            placeholder="0,00"
          />
        </div>

        {/* Vencimento 
        <div className="col-md-6">
          <label htmlFor="inputVencimento" className="form-label">
            Vencimento
          </label>
          <input
            type="date"
            className="form-control"
            id="inputVencimento"
            name="vencimento"
            value={formData.vencimento || ""}
            onChange={onChange}
          />
        </div> */}

				{/* Botões */}
				<div className='step-buttons'>
					<button
						type='button'
						className='btn btn-nav'
						onClick={onBack}
						disabled={loading}
					>
						Anterior
					</button>
					<button type='submit' className='btn btn-submit' disabled={loading}>
						{loading ? (
							<>
								<span className='spinner-border spinner-border-sm me-2'></span>
								Cadastrando...
							</>
						) : (
							"Cadastrar"
						)}
					</button>
					<a
						href={termos}
						download
						className='btn btn-termo'
						disabled={loading}
					>
						Baixar Termos
					</a>
					<button
						type='button'
						className='btn btn-csv'
						onClick={() => exportarParaCsv(formData)}
						disabled={loading}
					>
						Exportar CSV
					</button>
					<button
						type='button'
						className='btn btn-pdf'
						onClick={() => exportarParaPdf(formData)}
						disabled={loading}
					>
						Exportar PDF
					</button>
				</div>
			</div>
		</div>
	);
}

export default StepObservacoes;

import { exportarParaPdf } from "../../utils/exportPdf";
import { exportarParaCsv } from "../../utils/exportCsv";
import termos from "../../assets/images/termos.pdf";

function StepObservacoes({ onBack, formData, onChange, loading }) {
	const safeFormData = {
		matriculaTipo: formData.matriculaTipo || "",
		escola: formData.escola || "",
		temIrmaos: formData.temIrmaos || "",
		irmaosNome: formData.irmaosNome || "",
		irmaosTurma: formData.irmaosTurma || "",
		temEspecialista: formData.temEspecialista || "",
		especialista: formData.especialista || "",
		temAlergias: formData.temAlergias || "",
		alergia: formData.alergia || "",
		temMedicamento: formData.temMedicamento || "",
		medicamento: formData.medicamento || "",
		reside: formData.reside || "",
		respNome: formData.respNome || "",
		respFone: formData.respFone || "",
		pessoasAutorizadas: formData.pessoasAutorizadas || "",
	};

	return (
		<div className='step' id='observacoes'>
			<div className='row g-3'>
				<h3 className='mt-4'>Observações</h3>

				{/* Matrícula */}
				<div className='col-md-4'>
					<label htmlFor='selectMatri' className='form-label'>
						Matrícula
					</label>
					<select
						name='matriculaTipo'
						className='form-select'
						id='selectMatri'
						value={safeFormData.matriculaTipo}
						onChange={onChange}
					>
						<option disabled value=''>
							Selecione
						</option>
						<option value='inicial'>Inicial</option>
						<option value='municipal'>Transferência Municipal/Estadual</option>
						<option value='particular'>Transferência Particular</option>
					</select>
				</div>
				<div className='col-md-8'>
					<label htmlFor='inputSchool' className='form-label'>
						Qual Escola
					</label>
					<input
						type='text'
						id='inputSchool'
						className='form-control'
						name='escola'
						value={safeFormData.escola}
						onChange={onChange}
						placeholder='Escola'
						disabled={
							safeFormData.matriculaTipo === "inicial" ||
							safeFormData.matriculaTipo === ""
						}
					/>
				</div>

				{/* Irmãos */}
				<div className='col-md-4'>
					<label htmlFor='selectBrothers' className='form-label'>
						Irmão(s)
					</label>
					<select
						name='temIrmaos'
						className='form-select'
						id='selectBrothers'
						value={safeFormData.temIrmaos}
						onChange={onChange}
					>
						<option disabled value=''>
							Selecione
						</option>
						<option value='sim'>Sim</option>
						<option value='nao'>Não</option>
					</select>
				</div>
				<div className='col-md-8'>
					<label htmlFor='inputBrothersName' className='form-label'>
						Qual(s) irmão(s)?
					</label>
					<input
						type='text'
						id='inputBrothersName'
						className='form-control'
						name='irmaosNome'
						value={safeFormData.irmaosNome}
						onChange={onChange}
						placeholder='Ex: João, Maria, Pedro'
						disabled={safeFormData.temIrmaos !== "sim"}
					/>
				</div>

				{/* Especialista */}
				<div className='col-md-4'>
					<label htmlFor='selectSpecial' className='form-label'>
						Especialista
					</label>
					<select
						name='temEspecialista'
						className='form-select'
						id='selectSpecial'
						value={safeFormData.temEspecialista}
						onChange={onChange}
					>
						<option disabled value=''>
							Selecione
						</option>
						<option value='sim'>Sim</option>
						<option value='nao'>Não</option>
					</select>
				</div>
				<div className='col-md-8'>
					<label htmlFor='inputQualEspecialista' className='form-label'>
						Qual especialista?
					</label>
					<input
						type='text'
						id='inputQualEspecialista'
						className='form-control'
						name='especialista'
						value={safeFormData.especialista}
						onChange={onChange}
						placeholder='Ex: Neurologista, Fonoaudiólogo'
						disabled={safeFormData.temEspecialista !== "sim"}
					/>
				</div>

				{/* Alergias */}
				<div className='col-md-4'>
					<label htmlFor='selectAlergias' className='form-label'>
						Alergias
					</label>
					<select
						name='temAlergias'
						className='form-select'
						id='selectAlergias'
						value={safeFormData.temAlergias}
						onChange={onChange}
					>
						<option disabled value=''>
							Selecione
						</option>
						<option value='sim'>Sim</option>
						<option value='nao'>Não</option>
					</select>
				</div>
				<div className='col-md-8'>
					<label htmlFor='inputQualAlergia' className='form-label'>
						Qual alergia?
					</label>
					<input
						type='text'
						id='inputQualAlergia'
						className='form-control'
						name='alergia'
						value={safeFormData.alergia}
						onChange={onChange}
						placeholder='Ex: Alimentação, Remédios...'
						disabled={safeFormData.temAlergias !== "sim"}
					/>
				</div>

				{/* Medicamentos */}
				<div className='col-md-4'>
					<label htmlFor='selectMedicine' className='form-label'>
						Medicamento em uso
					</label>
					<select
						name='temMedicamento'
						className='form-select'
						id='selectMedicine'
						value={safeFormData.temMedicamento}
						onChange={onChange}
					>
						<option disabled value=''>
							Selecione
						</option>
						<option value='sim'>Sim</option>
						<option value='nao'>Não</option>
					</select>
				</div>
				<div className='col-md-8'>
					<label htmlFor='inputQualMedicine' className='form-label'>
						Qual medicamento?
					</label>
					<input
						type='text'
						id='inputQualMedicine'
						className='form-control'
						name='medicamento'
						value={safeFormData.medicamento}
						onChange={onChange}
						placeholder='Ex: Aspirina, Paracetamol...'
						disabled={safeFormData.temMedicamento !== "sim"}
					/>
				</div>

				{/* Reside com */}
				<div className='col-md-12'>
					<label htmlFor='inputReside' className='form-label'>
						Reside Com
					</label>
					<input
						type='text'
						className='form-control'
						id='inputReside'
						name='reside'
						value={safeFormData.reside}
						onChange={onChange}
						placeholder='Ex: Pai, Mãe, Pais...'
					/>
				</div>

				{/* Responsável Financeiro */}
				<div className='col-md-6'>
					<label htmlFor='inputRespName' className='form-label'>
						Nome do Responsável Financeiro
					</label>
					<input
						type='text'
						className='form-control'
						id='inputRespName'
						name='respNome'
						value={safeFormData.respNome}
						onChange={onChange}
						placeholder='João da Silva'
					/>
				</div>

				{/* Telefone Responsável Financeiro */}
				<div className='col-md-6'>
					<label htmlFor='inputRespFone' className='form-label'>
						Telefone do Responsável Financeiro
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputRespFone'
						name='respFone'
						value={safeFormData.respFone}
						onChange={onChange}
						placeholder='(00) 00000-0000'
					/>
				</div>

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

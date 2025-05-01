import { exportarParaPdf } from "../../utils/exportPdf";
import { exportarParaCsv } from "../../utils/exportCsv";
import termos from "../../assets/images/termos.pdf";

function StepObservacoes({ onBack, formData, onChange, loading, error }) {
	const safeFormData = {
		matriculaTipo: formData.matriculaTipo || "",
		escola: formData.escola || "",
		temIrmaos: formData.temIrmaos || "",
		irmaosNome: formData.irmaosNome || "",
		temEspecialista: formData.temEspecialista || "",
		especialista: formData.especialista || "",
		temAlergias: formData.temAlergias || "",
		alergia: formData.alergia || "",
		temMedicamento: formData.temMedicamento || "",
		medicamento: formData.medicamento || "",
		reside: formData.reside || "",
		respNome: formData.respNome || "",
		respTelefone: formData.respTelefone || "",
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
					<label htmlFor='inputRespTelefone' className='form-label'>
						Telefone do Responsável Financeiro
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputRespTelefone'
						name='respTelefone'
						value={safeFormData.respTelefone}
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

				{/* Documetos para email */}
				<a
					href='mailto:diretora@escola.com.br?subject=Envio de Documentos&body=Segue em anexo os documentos necessários.'
					className='btn-email col-md-4 text-center'
				>
					Enviar Documentos para o Email da Escola
				</a>

				{/* Alerta de erro */}
				{error && (
					<div className="alert alert-danger mt-3">
						{error}
					</div>
				)}

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

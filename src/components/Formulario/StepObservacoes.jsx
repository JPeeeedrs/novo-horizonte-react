import termos from "../../assets/images/termos.pdf";
import InputField from "../../common/inputs/InputField";
import SelectField from "../../common/inputs/SelectField";
import { Link } from "react-router-dom";
function StepObservacoes({ onBack, formData, onChange, loading, error }) {
	const safeFormData = {
		matriculaTipo: formData.matriculaTipo || "inicial",
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

	if (
		safeFormData.matriculaTipo === "inicial" ||
		safeFormData.matriculaTipo === ""
	) {
		safeFormData.escola = " ";
	}

	return (
		<div className='step' id='observacoes'>
			<div className='row g-3'>
				<h3 className='mt-4'>Observações</h3>

				{/* Matrícula */}
				<SelectField
					className='col-md-4'
					id='selectMatri'
					label='Matrícula'
					name='matriculaTipo'
					value={safeFormData.matriculaTipo}
					onChange={onChange}
					options={[
						{ value: "inicial", label: "Inicial" },
						{ value: "municipal", label: "Transferência Municipal/Estadual" },
						{ value: "particular", label: "Transferência Particular" },
					]}
				/>
				<InputField
					className='col-md-8'
					id='inputSchool'
					label='Qual Escola'
					name='escola'
					value={
						safeFormData.matriculaTipo === "inicial" ||
						safeFormData.matriculaTipo === ""
							? " "
							: safeFormData.escola
					}
					onChange={onChange}
					placeholder='Escola'
					disabled={
						safeFormData.matriculaTipo === "inicial" ||
						safeFormData.matriculaTipo === ""
					}
				/>

				{/* Irmãos */}
				<SelectField
					className='col-md-4'
					id='selectBrothers'
					label='Irmão(s)'
					name='temIrmaos'
					value={safeFormData.temIrmaos || "nao"}
					onChange={onChange}
					options={[
						{ value: "sim", label: "Sim" },
						{ value: "nao", label: "Não" },
					]}
				/>
				<InputField
					className='col-md-8'
					id='inputBrothersName'
					label='Qual(s) irmão(s)?'
					name='irmaosNome'
					value={
						safeFormData.temIrmaos === "sim" ? safeFormData.irmaosNome : " "
					}
					onChange={onChange}
					placeholder='Ex: João, Maria, Pedro'
					disabled={safeFormData.temIrmaos !== "sim"}
				/>

				{/* Especialista */}
				<SelectField
					className='col-md-4'
					id='selectSpecial'
					label='Especialista'
					name='temEspecialista'
					value={safeFormData.temEspecialista || "nao"}
					onChange={onChange}
					options={[
						{ value: "sim", label: "Sim" },
						{ value: "nao", label: "Não" },
					]}
				/>
				<InputField
					className='col-md-8'
					id='inputQualEspecialista'
					label='Qual especialista?'
					name='especialista'
					value={
						safeFormData.temEspecialista === "sim"
							? safeFormData.especialista
							: " "
					}
					onChange={onChange}
					placeholder='Ex: Neurologista, Fonoaudiólogo'
					disabled={safeFormData.temEspecialista !== "sim"}
				/>

				{/* Alergias */}
				<SelectField
					className='col-md-4'
					id='selectAlergias'
					label='Alergias'
					name='temAlergias'
					value={safeFormData.temAlergias || "nao"}
					onChange={onChange}
					options={[
						{ value: "sim", label: "Sim" },
						{ value: "nao", label: "Não" },
					]}
				/>
				<InputField
					className='col-md-8'
					id='inputQualAlergia'
					label='Qual alergia?'
					name='alergia'
					value={
						safeFormData.temAlergias === "sim" ? safeFormData.alergia : " "
					}
					onChange={onChange}
					placeholder='Ex: Alimentação, Remédios...'
					disabled={safeFormData.temAlergias !== "sim"}
				/>

				{/* Medicamentos */}
				<SelectField
					className='col-md-4'
					id='selectMedicine'
					label='Medicamento em uso'
					name='temMedicamento'
					value={safeFormData.temMedicamento || "nao"}
					onChange={onChange}
					options={[
						{ value: "sim", label: "Sim" },
						{ value: "nao", label: "Não" },
					]}
				/>
				<InputField
					className='col-md-8'
					id='inputQualMedicine'
					label='Qual medicamento?'
					name='medicamento'
					value={
						safeFormData.temMedicamento === "sim"
							? safeFormData.medicamento
							: " "
					}
					onChange={onChange}
					placeholder='Ex: Aspirina, Paracetamol...'
					disabled={safeFormData.temMedicamento !== "sim"}
				/>

				{/* Reside com */}
				<InputField
					className='col-md-12'
					id='inputReside'
					label='Reside Com'
					name='reside'
					value={safeFormData.reside}
					onChange={onChange}
					placeholder='Ex: Pai, Mãe, Pais...'
				/>

				{/* Responsável Financeiro */}
				<InputField
					className='col-md-6'
					id='inputRespName'
					label='Nome do Responsável Financeiro'
					name='respNome'
					value={safeFormData.respNome}
					onChange={onChange}
					placeholder='João da Silva'
					required={true}
				/>
				<InputField
					className='col-md-6'
					id='inputRespTelefone'
					label='Telefone do Responsável Financeiro'
					name='respTelefone'
					value={safeFormData.respTelefone}
					onChange={onChange}
					placeholder='(00) 00000-0000'
				/>

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

				{/* Botão de Enviar */}
				<button
					type='submit'
					className='btn-submit col-md-3'
					disabled={loading}
				>
					{loading ? (
						<>
							<span className='spinner-border spinner-border-sm me-2'></span>
							Cadastrando...
						</>
					) : (
						"Cadastrar Aluno"
					)}
				</button>

				<p className='obs'>
					OBS: Só clique no botão "Envio de Documentos" se você for enviar os
					documentos por e-mail.
				</p>
				<p className='obs'>
					❌ Se você for entregar pessoalmente ou já entregou, não precisa
					clicar!
				</p>
				<p className='obs'>
					✅ Clique apenas se for enviar por e-mail, caso a escola solicite!
				</p>

				{/* Alerta de erro */}
				{error && (
					<div id='error' className='alert alert-danger mt-3 text-center'>
						{error}
					</div>
				)}

				{/* Botões */}
				<div className='step-buttons'>
					<button
						type='button'
						className='btn'
						id='btn-nav-anterior'
						onClick={onBack}
						disabled={loading}
					>
						Anterior
					</button>
					<a
						href='mailto:vanessalimapsicopedagoga@bol.com.br?subject=Envio de Documentos&body=Segue em anexo os documentos necessários.'
						target='_blank'
						className='btn btn-email'
						disabled={loading}
					>
						Enviar Documentos
					</a>
					<a
						href={termos}
						download
						className='btn btn-termo'
						disabled={loading}
					>
						Baixar Termos
					</a>
					{/* Link para a página LGPD */}
					<Link to='/lgpd-info' className='btn btn-lgpd'>
						Sobre LGPD
					</Link>
				</div>
			</div>
		</div>
	);
}

export default StepObservacoes;

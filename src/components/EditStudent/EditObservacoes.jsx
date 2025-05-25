import InputField from "../../common/inputs/InputField";
import SelectField from "../../common/inputs/SelectField";

function EditObservacoes({ onBack, formData, onChange, loading, error }) {
	const safeFormData = {
		matriculaTipo: formData.matriculaTipo || "inicial",
		escola: formData.escola || "",
		temIrmaos: formData.temIrmaos || "nao",
		irmaosNome: formData.irmaosNome || "",
		temEspecialista: formData.temEspecialista || "nao",
		especialista: formData.especialista || "",
		temAlergias: formData.temAlergias || "nao",
		alergia: formData.alergia || "",
		temMedicamento: formData.temMedicamento || "nao",
		medicamento: formData.medicamento || "",
		reside: formData.reside || "",
		respNome: formData.respNome || "",
		respTelefone: formData.respTelefone || "",
		pessoasAutorizadas: formData.pessoasAutorizadas || "",
	};

	// Clear dependent fields when related SelectField is set to "Não"
	function handleSelectChange(e) {
		const { name, value } = e.target;
		onChange(e);

		if (name === "matriculaTipo" && value === "inicial") {
			onChange({ target: { name: "escola", value: "" } });
		}
		if (name === "temIrmaos" && value === "nao") {
			onChange({ target: { name: "irmaosNome", value: "" } });
		}
		if (name === "temEspecialista" && value === "nao") {
			onChange({ target: { name: "especialista", value: "" } });
		}
		if (name === "temAlergias" && value === "nao") {
			onChange({ target: { name: "alergia", value: "" } });
		}
		if (name === "temMedicamento" && value === "nao") {
			onChange({ target: { name: "medicamento", value: "" } });
		}
	}

	if (safeFormData.matriculaTipo === "inicial") {
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
					onChange={handleSelectChange}
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
						safeFormData.matriculaTipo === "inicial" ? " " : safeFormData.escola
					}
					onChange={onChange}
					placeholder='Escola'
					disabled={safeFormData.matriculaTipo === "inicial"}
				/>

				{/* Irmãos */}
				<SelectField
					className='col-md-4'
					id='selectBrothers'
					label='Irmão(s)'
					name='temIrmaos'
					value={safeFormData.temIrmaos}
					onChange={handleSelectChange}
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
						safeFormData.temIrmaos === "sim" ? safeFormData.irmaosNome : ""
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
					value={safeFormData.temEspecialista}
					onChange={handleSelectChange}
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
							: ""
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
					value={safeFormData.temAlergias}
					onChange={handleSelectChange}
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
					value={safeFormData.temAlergias === "sim" ? safeFormData.alergia : ""}
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
					value={safeFormData.temMedicamento}
					onChange={handleSelectChange}
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
							: ""
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
							Editando...
						</>
					) : (
						"Editar"
					)}
				</button>

				{/* Alerta de erro */}
				{error && (
					<div className='alert alert-danger mt-3 text-center'>{error}</div>
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
				</div>
			</div>
		</div>
	);
}

export default EditObservacoes;

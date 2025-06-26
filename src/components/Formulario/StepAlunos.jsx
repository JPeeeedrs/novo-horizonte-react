import { useState } from "react";
import { startErrorTimer } from "../../utils/errorTimer";
import InputField from "../../common/inputs/InputField";
import SelectField from "../../common/inputs/SelectField";

function StepAluno({ onNext, formData = {}, onChange }) {
	const [error, setError] = useState("");
	const safeFormData = {
		nome: formData.nome || "",
		dataNascimento: formData.dataNascimento || "",
		naturalidade: formData.naturalidade || "",
		nacionalidade: formData.nacionalidade || "",
		sexo: formData.sexo || "",
		cpf: formData.cpf || "",
		rg: formData.rg || "",
		anoLetivo: formData.anoLetivo || "",
		termo: formData.termo || "",
		folha: formData.folha || "",
		livro: formData.livro || "",
		matricula: formData.matricula || "",
		turno: formData.turno || "",
		tipoSanguineo: formData.tipoSanguineo || "",
		raca: formData.raca || "",
	};

	function handleNext() {
		const requiredFields = [
			{ key: "nome", label: "Nome" },
			{ key: "dataNascimento", label: "Data de Nascimento" },
			{ key: "naturalidade", label: "Naturalidade" },
			{ key: "nacionalidade", label: "Nacionalidade" },
			{ key: "sexo", label: "Sexo" },
			{ key: "cpf", label: "CPF" },
			{ key: "rg", label: "RG" },
			{ key: "anoLetivo", label: "Ano Letivo" },
			{ key: "termo", label: "Termo" },
			{ key: "folha", label: "Folha" },
			{ key: "livro", label: "Livro" },
			{ key: "matricula", label: "Matrícula" },
			{ key: "turno", label: "Turno" },
			{ key: "tipoSanguineo", label: "Tipo Sanguíneo" },
			{ key: "raca", label: "Raça" },
		];
		for (const field of requiredFields) {
			if (
				!safeFormData[field.key] ||
				String(safeFormData[field.key]).trim() === ""
			) {
				setError(`Preencha o campo: ${field.label}`);
				startErrorTimer(setError);
				return;
			}
		}
		setError("");
		onNext();
	}

	return (
		<div className='step' id='aluno'>
			<div className='row g-3'>
				<h3 className='mt-4'>Dados do Aluno</h3>
				{/* Nome */}
				<InputField
					className='col-md-8'
					id='inputName'
					label='Nome'
					name='nome'
					value={safeFormData.nome}
					onChange={onChange}
					placeholder='João da Silva'
					required={true}
				/>

				{/* Data de Nascimento */}
				<InputField
					className='col-md-4'
					id='inputBirthDate'
					label='Data de Nascimento'
					name='dataNascimento'
					value={safeFormData.dataNascimento}
					onChange={onChange}
					placeholder='00/00/0000'
					required={true}
				/>

				{/* Naturalidade */}
				<InputField
					className='col-md-4'
					id='inputNaturalidade'
					label='Naturalidade'
					name='naturalidade'
					value={safeFormData.naturalidade}
					onChange={onChange}
					placeholder='Teresopolitano'
					required={true}
				/>

				{/* Nacionalidade */}
				<InputField
					className='col-md-4'
					id='inputNacionalidade'
					label='Nacionalidade'
					name='nacionalidade'
					value={safeFormData.nacionalidade}
					onChange={onChange}
					placeholder='Brasileira'
					required={true}
				/>

				{/* Sexo */}
				<SelectField
					className='col-md-4'
					id='inputSexo'
					label='Sexo'
					name='sexo'
					value={safeFormData.sexo}
					onChange={onChange}
					options={[
						{ value: "Feminino", label: "Feminino" },
						{ value: "Masculino", label: "Masculino" },
						{ value: "Não Binário", label: "Não Binário" },
						{ value: "Outro", label: "Outro" },
						{ value: "Prefiro não informar", label: "Prefiro não informar" },
					]}
					required={true}
				/>

				{/* CPF */}
				<InputField
					className='col-md-4'
					id='inputCPFAluno'
					label='CPF'
					name='cpf'
					value={safeFormData.cpf}
					onChange={onChange}
					placeholder='000.000.000-00'
					required={true}
				/>

				{/* RG */}
				<InputField
					className='col-md-4'
					id='inputRGAluno'
					label='RG'
					name='rg'
					value={safeFormData.rg}
					onChange={onChange}
					placeholder='00.000.000-0'
					required={true}
				/>

				{/* Ano Letivo */}
				<InputField
					className='col-md-4'
					id='inputYear'
					label='Ano Letivo'
					name='anoLetivo'
					value={safeFormData.anoLetivo}
					onChange={onChange}
					placeholder='2025'
					required={true}
				/>

				{/* Certidão de Nascimento */}
				<div className='col-12'>
					<div className='row'>
						<h6>Certidão de Nascimento</h6>
						<InputField
							className='col-md-4'
							id='inputTermo'
							label='Termo'
							name='termo'
							value={safeFormData.termo}
							onChange={onChange}
							placeholder='00000'
							required={true}
						/>
						<InputField
							className='col-md-4'
							id='inputFolha'
							label='Folha'
							name='folha'
							value={safeFormData.folha}
							onChange={onChange}
							placeholder='000'
							required={true}
						/>
						<InputField
							className='col-md-4'
							id='inputLivro'
							label='Livro'
							name='livro'
							value={safeFormData.livro}
							onChange={onChange}
							placeholder='000'
							required={true}
						/>
					</div>
				</div>

				{/* Matrícula */}
				<InputField
					className='col-md-12'
					id='inputMatricula'
					label='Matrícula'
					name='matricula'
					value={safeFormData.matricula}
					onChange={onChange}
					placeholder='0000000'
					required={true}
				/>

				{/* Turno */}
				<SelectField
					className='col-md-4'
					id='inputShift'
					label='Turno'
					name='turno'
					value={safeFormData.turno}
					onChange={onChange}
					options={[
						{ value: "Manhã", label: "Manhã" },
						{ value: "Tarde", label: "Tarde" },
						{ value: "Integral", label: "Integral" },
					]}
				/>

				{/* Tipo Sanguíneo */}
				<SelectField
					className='col-md-4'
					id='inputBlood'
					label='Tipo Sanguíneo'
					name='tipoSanguineo'
					value={safeFormData.tipoSanguineo}
					onChange={onChange}
					options={[
						{ value: "O-", label: "O-" },
						{ value: "O+", label: "O+" },
						{ value: "A-", label: "A-" },
						{ value: "A+", label: "A+" },
						{ value: "B-", label: "B-" },
						{ value: "B+", label: "B+" },
						{ value: "AB-", label: "AB-" },
						{ value: "AB+", label: "AB+" },
					]}
					required={true}
				/>

				{/* Raça */}
				<SelectField
					className='col-md-4'
					id='inputRace'
					label='Raça'
					name='raca'
					value={safeFormData.raca}
					onChange={onChange}
					options={[
						{ value: "Parda", label: "Parda" },
						{ value: "Branca", label: "Branca" },
						{ value: "Preto", label: "Preto" },
						{ value: "Indígenas", label: "Indígena" },
						{ value: "Amarela", label: "Amarela" },
					]}
					required={true}
				/>

				<button type='button' className='btn btn-nav' onClick={handleNext}>
					Próximo
				</button>
				{error && (
					<div id='error' className='alert alert-danger mt-3 text-center'>
						{error}
					</div>
				)}
			</div>
		</div>
	);
}

export default StepAluno;

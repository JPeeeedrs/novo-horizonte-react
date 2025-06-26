import { useState, useEffect } from "react";
import InputField from "../../common/inputs/InputField";
import { startErrorTimer } from "../../utils/errorTimer";

function StepMae({ onNext, onBack, formData = {}, onChange }) {
	const [error, setError] = useState("");
	const temMae = formData.temMae ?? true;
	const safeFormData = {
		nomeMae: formData.nomeMae || "",
		nascimentoMae: formData.nascimentoMae || "",
		enderecoMae: formData.enderecoMae || "",
		numeroCasaMae: formData.numeroCasaMae || "",
		cepMae: formData.cepMae || "",
		cpfMae: formData.cpfMae || "",
		rgMae: formData.rgMae || "",
		telefoneMae: formData.telefoneMae || "",
		emailMae: formData.emailMae || "",
		profissaoMae: formData.profissaoMae || "",
		trabalhoMae: formData.trabalhoMae || "",
		telefoneTrabalhoMae: formData.telefoneTrabalhoMae || "",
	};

	function handleNext() {
		if (!temMae) {
			setError("");
			onNext();
			return;
		}
		const requiredFields = [
			{ key: "nomeMae", label: "Nome da Mãe" },
			{ key: "nascimentoMae", label: "Nascimento da Mãe" },
			{ key: "enderecoMae", label: "Endereço da Mãe" },
			{ key: "cepMae", label: "CEP da Mãe" },
			{ key: "cpfMae", label: "CPF da Mãe" },
			{ key: "rgMae", label: "RG da Mãe" },
			{ key: "telefoneMae", label: "Telefone da Mãe" },
			{ key: "emailMae", label: "Email da Mãe" },
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

	// Function to set all fields to "não informado"
	function setFieldsToNaoInformado() {
		onChange({ target: { name: "nomeMae", value: " " } });
		onChange({ target: { name: "nascimentoMae", value: "00/00/0000" } });
		onChange({ target: { name: "enderecoMae", value: " " } });
		onChange({ target: { name: "numeroCasaMae", value: " " } });
		onChange({ target: { name: "cepMae", value: "00000-000" } });
		onChange({ target: { name: "cpfMae", value: "000.000.000-00" } });
		onChange({ target: { name: "rgMae", value: "00.000.000-0" } });
		onChange({ target: { name: "telefoneMae", value: "(00) 00000-0000" } });
		onChange({ target: { name: "emailMae", value: "nome@dominio.com" } });
		onChange({ target: { name: "profissaoMae", value: " " } });
		onChange({ target: { name: "trabalhoMae", value: " " } });
		onChange({
			target: { name: "telefoneTrabalhoMae", value: "(00) 00000-0000" },
		});
	}

	// Function to reset all fields to empty values
	function resetFormFields() {
		onChange({ target: { name: "nomeMae", value: "" } });
		onChange({ target: { name: "nascimentoMae", value: "" } });
		onChange({ target: { name: "enderecoMae", value: "" } });
		onChange({ target: { name: "numeroCasaMae", value: "" } });
		onChange({ target: { name: "cepMae", value: "" } });
		onChange({ target: { name: "cpfMae", value: "" } });
		onChange({ target: { name: "rgMae", value: "" } });
		onChange({ target: { name: "telefoneMae", value: "" } });
		onChange({ target: { name: "emailMae", value: "" } });
		onChange({ target: { name: "profissaoMae", value: "" } });
		onChange({ target: { name: "trabalhoMae", value: "" } });
		onChange({ target: { name: "telefoneTrabalhoMae", value: "" } });
	}

	useEffect(() => {
		if (!temMae) {
			setFieldsToNaoInformado();
		} else {
			resetFormFields();
		}
	}, [temMae]);

	return (
		<div className='step' id='mae'>
			<div className='row g-3'>
				<h3 className='mt-4'>Dados dos Familiares</h3>
				{/* Checkbox para indicar se possui mãe como responsável */}
				<div className='col-12'>
					<div className='form-check form-switch'>
						<input
							type='checkbox'
							className='form-check-input'
							role='switch'
							id='maeSwitch'
							checked={temMae}
							onChange={(e) =>
								onChange({
									target: { name: "temMae", value: e.target.checked },
								})
							}
						/>
						<label className='form-check-label' htmlFor='maeSwitch'>
							Possui Responsável Materno
						</label>
					</div>
				</div>
				<h5>Dados do Responsável Materno</h5>
				{/* Nome da Mãe */}
				<InputField
					className='col-md-6'
					id='inputMotherName'
					label='Nome do Responsável Materno'
					name='nomeMae'
					value={safeFormData.nomeMae}
					onChange={onChange}
					placeholder='Vilmara Oliveira'
					disabled={!temMae}
					required={temMae}
				/>

				{/* Data de Nascimento */}
				<InputField
					className='col-md-6'
					id='inputMotherBirthDate'
					label='Data de Nascimento'
					name='nascimentoMae'
					value={safeFormData.nascimentoMae}
					onChange={onChange}
					placeholder='00/00/0000'
					disabled={!temMae}
					required={temMae}
				/>

				{/* Endereço */}
				<InputField
					className='col-md-4'
					id='inputMotherAddress'
					label='Endereço'
					name='enderecoMae'
					value={safeFormData.enderecoMae}
					onChange={onChange}
					placeholder='Rua Manoel Gomes, 000'
					disabled={!temMae}
					required={temMae}
				/>

				{/* Número da casa */}
				<InputField
					className='col-md-4'
					id='inputMotherHouseNumber'
					label='Número da Casa'
					name='numeroCasaMae'
					value={safeFormData.numeroCasaMae}
					onChange={onChange}
					placeholder='000'
					disabled={!temMae}
				/>

				{/* CEP */}
				<InputField
					className='col-md-4'
					id='inputMotherCEP'
					label='CEP'
					name='cepMae'
					value={safeFormData.cepMae}
					onChange={onChange}
					placeholder='00000-000'
					disabled={!temMae}
					required={temMae}
				/>

				{/* CPF */}
				<InputField
					className='col-md-4'
					id='inputMotherCPF'
					label='CPF'
					name='cpfMae'
					value={safeFormData.cpfMae}
					onChange={onChange}
					placeholder='000.000.000-00'
					disabled={!temMae}
					required={temMae}
				/>

				{/* RG */}
				<InputField
					className='col-md-4'
					id='inputMotherRG'
					label='RG'
					name='rgMae'
					value={safeFormData.rgMae}
					onChange={onChange}
					placeholder='00.000.000-0'
					disabled={!temMae}
				/>

				{/* Telefone */}
				<InputField
					className='col-md-4'
					id='inputMotherFone'
					label='Telefone'
					name='telefoneMae'
					value={safeFormData.telefoneMae}
					onChange={onChange}
					placeholder='(00) 00000-0000'
					disabled={!temMae}
				/>

				{/* Email */}
				<InputField
					className='col-md-4'
					id='inputMotherEmail'
					label='Email'
					name='emailMae'
					value={safeFormData.emailMae}
					onChange={onChange}
					placeholder='nome@example.com'
					disabled={!temMae}
				/>

				{/* Profissão */}
				<InputField
					className='col-md-4'
					id='inputMotherProfession'
					label='Profissão'
					name='profissaoMae'
					value={safeFormData.profissaoMae}
					onChange={onChange}
					placeholder='Programadora'
					disabled={!temMae}
				/>

				{/* Local de Trabalho */}
				<InputField
					className='col-md-4'
					id='inputMotherWorkplace'
					label='Local de Trabalho'
					name='trabalhoMae'
					value={safeFormData.trabalhoMae}
					onChange={onChange}
					placeholder='Alterdata'
					disabled={!temMae}
				/>

				{/* Telefone do Trabalho */}
				<InputField
					className='col-md-4'
					id='inputMotherWorkFone'
					label='Telefone do Trabalho'
					name='telefoneTrabalhoMae'
					value={safeFormData.telefoneTrabalhoMae}
					onChange={onChange}
					placeholder='(00) 00000-0000'
					disabled={!temMae}
				/>
			</div>
			<div className='step-buttons'>
				<button type='button' className='btn btn-nav' onClick={onBack}>
					Anterior
				</button>
				<button type='button' className='btn btn-nav' onClick={handleNext}>
					Próximo
				</button>
			</div>
			{error && (
				<div id='error' className='alert alert-danger mt-3 text-center'>
					{error}
				</div>
			)}
		</div>
	);
}

export default StepMae;

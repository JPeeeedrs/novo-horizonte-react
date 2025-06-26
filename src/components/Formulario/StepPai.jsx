import React, { useEffect, useState } from "react";
import InputField from "../../common/inputs/InputField";
import { startErrorTimer } from "../../utils/errorTimer";

function StepPai({ onNext, onBack, formData = {}, onChange }) {
	const [error, setError] = useState("");
	const temPai = formData.temPai ?? true;
	const safeFormData = {
		nomePai: formData.nomePai || "",
		nascimentoPai: formData.nascimentoPai || "",
		enderecoPai: formData.enderecoPai || "",
		numeroCasaPai: formData.numeroCasaPai || "",
		cepPai: formData.cepPai || "",
		cpfPai: formData.cpfPai || "",
		rgPai: formData.rgPai || "",
		telefonePai: formData.telefonePai || "",
		emailPai: formData.emailPai || "",
		profissaoPai: formData.profissaoPai || "",
		trabalhoPai: formData.trabalhoPai || "",
		telefoneTrabalhoPai: formData.telefoneTrabalhoPai || "",
	};

	function handleNext() {
		if (!temPai) {
			setError("");
			onNext();
			return;
		}
		const requiredFields = [
			{ key: "nomePai", label: "Nome do Pai" },
			{ key: "nascimentoPai", label: "Nascimento do Pai" },
			{ key: "enderecoPai", label: "Endereço do Pai" },
			{ key: "cepPai", label: "CEP do Pai" },
			{ key: "cpfPai", label: "CPF do Pai" },
			{ key: "rgPai", label: "RG do Pai" },
			{ key: "telefonePai", label: "Telefone do Pai" },
			{ key: "emailPai", label: "Email do Pai" },
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
		onChange({ target: { name: "nomePai", value: " " } });
		onChange({ target: { name: "nascimentoPai", value: "00/00/0000" } });
		onChange({ target: { name: "enderecoPai", value: " " } });
		onChange({ target: { name: "numeroCasaPai", value: " " } });
		onChange({ target: { name: "cepPai", value: "00000-000" } });
		onChange({ target: { name: "cpfPai", value: "000.000.000-00" } });
		onChange({ target: { name: "rgPai", value: "00.000.000-0" } });
		onChange({ target: { name: "telefonePai", value: "(00) 00000-0000" } });
		onChange({ target: { name: "emailPai", value: "nome@dominio.com" } });
		onChange({ target: { name: "profissaoPai", value: " " } });
		onChange({ target: { name: "trabalhoPai", value: " " } });
		onChange({
			target: { name: "telefoneTrabalhoPai", value: "(00) 00000-0000" },
		});
	}

	// Function to reset all fields to empty values
	function resetFormFields() {
		onChange({ target: { name: "nomePai", value: "" } });
		onChange({ target: { name: "nascimentoPai", value: "" } });
		onChange({ target: { name: "enderecoPai", value: "" } });
		onChange({ target: { name: "numeroCasaPai", value: "" } });
		onChange({ target: { name: "cepPai", value: "" } });
		onChange({ target: { name: "cpfPai", value: "" } });
		onChange({ target: { name: "rgPai", value: "" } });
		onChange({ target: { name: "telefonePai", value: "" } });
		onChange({ target: { name: "emailPai", value: "" } });
		onChange({ target: { name: "profissaoPai", value: "" } });
		onChange({ target: { name: "trabalhoPai", value: "" } });
		onChange({ target: { name: "telefoneTrabalhoPai", value: "" } });
	}

	useEffect(() => {
		if (!temPai) {
			setFieldsToNaoInformado();
		} else {
			resetFormFields();
		}
	}, [temPai]);

	return (
		<div className='step' id='pai'>
			<div className='row g-3'>
				<h3 className='mt-4'>Dados dos Familiares</h3>
				{/* Checkbox para indicar se possui pai como responsável */}
				<div className='col-12'>
					<div className='form-check form-switch'>
						<input
							type='checkbox'
							className='form-check-input'
							role='switch'
							id='paiSwitch'
							checked={temPai}
							onChange={(e) =>
								onChange({
									target: { name: "temPai", value: e.target.checked },
								})
							}
						/>
						<label className='form-check-label' htmlFor='paiSwitch'>
							Possui Responsável Paterno
						</label>
					</div>
				</div>
				<h5>Dados do Responsável Paterno</h5>
				{/* Nome do Pai */}
				<InputField
					className='col-md-6'
					id='inputFatherName'
					label='Nome do Responsável Paterno'
					name='nomePai'
					value={safeFormData.nomePai}
					onChange={onChange}
					placeholder='Antônio da Silva'
					disabled={!temPai}
					required={temPai}
				/>

				{/* Data de Nascimento */}
				<InputField
					className='col-md-6'
					id='inputFatherBirthDate'
					label='Data de Nascimento'
					name='nascimentoPai'
					value={safeFormData.nascimentoPai}
					onChange={onChange}
					placeholder='00/00/0000'
					disabled={!temPai}
					required={temPai}
				/>

				{/* Endereço */}
				<InputField
					className='col-md-4'
					id='inputFatherAddress'
					label='Endereço'
					name='enderecoPai'
					value={safeFormData.enderecoPai}
					onChange={onChange}
					placeholder='Rua Manoel Gomes, 000'
					disabled={!temPai}
					required={temPai}
				/>

				{/* Número da casa */}
				<InputField
					className='col-md-4'
					id='inputFatherHouseNumber'
					label='Número da Casa'
					name='numeroCasaPai'
					value={safeFormData.numeroCasaPai}
					onChange={onChange}
					placeholder='000'
					disabled={!temPai}
				/>

				{/* CEP */}
				<InputField
					className='col-md-4'
					id='inputFatherCEP'
					label='CEP'
					name='cepPai'
					value={safeFormData.cepPai}
					onChange={onChange}
					placeholder='00000-000'
					disabled={!temPai}
					required={temPai}
				/>

				{/* CPF */}
				<InputField
					className='col-md-4'
					id='inputFatherCPF'
					label='CPF'
					name='cpfPai'
					value={safeFormData.cpfPai}
					onChange={onChange}
					placeholder='000.000.000-00'
					disabled={!temPai}
					required={temPai}
				/>

				{/* RG */}
				<InputField
					className='col-md-4'
					id='inputFatherRG'
					label='RG'
					name='rgPai'
					value={safeFormData.rgPai}
					onChange={onChange}
					placeholder='00.000.000-0'
					disabled={!temPai}
				/>

				{/* Telefone */}
				<InputField
					className='col-md-4'
					id='inputFatherFone'
					label='Telefone'
					name='telefonePai'
					value={safeFormData.telefonePai}
					onChange={onChange}
					placeholder='(00) 00000-0000'
					disabled={!temPai}
				/>

				{/* Email */}
				<InputField
					className='col-md-4'
					id='inputFatherEmail'
					label='Email'
					name='emailPai'
					value={safeFormData.emailPai}
					onChange={onChange}
					placeholder='nome@example.com'
					disabled={!temPai}
				/>

				{/* Profissão */}
				<InputField
					className='col-md-4'
					id='inputFatherProfession'
					label='Profissão'
					name='profissaoPai'
					value={safeFormData.profissaoPai}
					onChange={onChange}
					placeholder='Programador'
					disabled={!temPai}
				/>

				{/* Local de Trabalho */}
				<InputField
					className='col-md-4'
					id='inputFatherWorkplace'
					label='Local de Trabalho'
					name='trabalhoPai'
					value={safeFormData.trabalhoPai}
					onChange={onChange}
					placeholder='Alterdata'
					disabled={!temPai}
				/>

				{/* Telefone do Trabalho */}
				<InputField
					className='col-md-4'
					id='inputFatherWorkFone'
					label='Telefone do Trabalho'
					name='telefoneTrabalhoPai'
					value={safeFormData.telefoneTrabalhoPai}
					onChange={onChange}
					placeholder='(00) 00000-0000'
					disabled={!temPai}
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

export default StepPai;

import { useEffect } from "react";
import InputField from "../../common/inputs/InputField";

function EditPai({ onNext, onBack, formData = {}, onChange }) {
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

	// Function to reset all fields to empty values only if they are not already set
	function resetFormFields() {
		if (!formData.nomePai) onChange({ target: { name: "nomePai", value: "" } });
		if (!formData.nascimentoPai)
			onChange({ target: { name: "nascimentoPai", value: "" } });
		if (!formData.enderecoPai)
			onChange({ target: { name: "enderecoPai", value: "" } });
		if (!formData.numeroCasaPai)
			onChange({ target: { name: "numeroCasaPai", value: "" } });
		if (!formData.cepPai) onChange({ target: { name: "cepPai", value: "" } });
		if (!formData.cpfPai) onChange({ target: { name: "cpfPai", value: "" } });
		if (!formData.rgPai) onChange({ target: { name: "rgPai", value: "" } });
		if (!formData.telefonePai)
			onChange({ target: { name: "telefonePai", value: "" } });
		if (!formData.emailPai)
			onChange({ target: { name: "emailPai", value: "" } });
		if (!formData.profissaoPai)
			onChange({ target: { name: "profissaoPai", value: "" } });
		if (!formData.trabalhoPai)
			onChange({ target: { name: "trabalhoPai", value: "" } });
		if (!formData.telefoneTrabalhoPai)
			onChange({ target: { name: "telefoneTrabalhoPai", value: "" } });
	}

	useEffect(() => {
		if (!temPai) {
			setFieldsToNaoInformado();
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
				<button type='button' className='btn btn-nav' onClick={onNext}>
					Próximo
				</button>
			</div>
		</div>
	);
}

export default EditPai;

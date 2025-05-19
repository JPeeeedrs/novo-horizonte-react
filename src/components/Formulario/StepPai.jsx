function StepPai({ onNext, onBack, formData = {}, onChange }) {
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
						<label className='form-check-label' htmlFor='maeSwitch'>
							Possui Responsável Paterno
						</label>
					</div>
				</div>
				<h5>Dados do Responsável Paterno</h5>
				{/* Nome do Pai */}
				<div className='col-md-6'>
					<label htmlFor='inputFatherName' className='form-label'>
						Nome do Responsável Paterno
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherName'
						name='nomePai'
						value={safeFormData.nomePai}
						onChange={onChange}
						placeholder='Lima Mei'
						disabled={!temPai}
						required={temPai}
					/>
				</div>
				{/* Data de Nascimento */}
				<div className='col-md-6'>
					<label htmlFor='inputFatherBirthDate' className='form-label'>
						Data de Nascimento
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherBirthDate'
						name='nascimentoPai'
						value={safeFormData.nascimentoPai}
						onChange={onChange}
						placeholder='00/00/0000'
						disabled={!temPai}
						required={temPai}
					/>
				</div>
				{/* Endereço */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherAddress' className='form-label'>
						Endereço
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherAddress'
						name='enderecoPai'
						value={safeFormData.enderecoPai}
						onChange={onChange}
						placeholder='Rua Manoel Gomes, 000'
						disabled={!temPai}
						required={temPai}
					/>
				</div>

				{/* Número da casa */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherHouseNumber' className='form-label'>
						Número da Casa
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherHouseNumber'
						name='numeroCasaPai'
						value={safeFormData.numeroCasaPai}
						onChange={onChange}
						placeholder='000'
						disabled={!temPai}
					/>
				</div>

				{/* CEP */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherCEP' className='form-label'>
						CEP
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherCEP'
						name='cepPai'
						value={safeFormData.cepPai}
						onChange={onChange}
						placeholder='00000-000'
						disabled={!temPai}
						required={temPai}
					/>
				</div>
				{/* CPF */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherCPF' className='form-label'>
						CPF
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherCPF'
						name='cpfPai'
						value={safeFormData.cpfPai}
						onChange={onChange}
						placeholder='000.000.000-00'
						disabled={!temPai}
						required={temPai}
					/>
				</div>
				{/* RG */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherRG' className='form-label'>
						RG
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherRG'
						name='rgPai'
						value={safeFormData.rgPai}
						onChange={onChange}
						placeholder='00.000.000-0'
						disabled={!temPai}
					/>
				</div>
				{/* Telefone */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherFone' className='form-label'>
						Telefone
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputFatherFone'
						name='telefonePai'
						value={safeFormData.telefonePai}
						onChange={onChange}
						placeholder='(00) 00000-0000'
						disabled={!temPai}
					/>
				</div>
				{/* Email */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherEmail' className='form-label'>
						Email
					</label>
					<input
						type='email'
						className='form-control'
						id='inputFatherEmail'
						name='emailPai'
						value={safeFormData.emailPai}
						onChange={onChange}
						placeholder='nome@example.com'
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						title='Digite um email válido (exemplo: usuario@provedor.com)'
						disabled={!temPai}
					/>
				</div>
				{/* Profissão */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherProfession' className='form-label'>
						Profissão
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherProfession'
						name='profissaoPai'
						value={safeFormData.profissaoPai}
						onChange={onChange}
						placeholder='Programador'
						disabled={!temPai}
					/>
				</div>
				{/* Local de Trabalho */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherWorkplace' className='form-label'>
						Local de Trabalho
					</label>
					<input
						type='text'
						className='form-control'
						id='inputFatherWorkplace'
						name='trabalhoPai'
						value={safeFormData.trabalhoPai}
						onChange={onChange}
						placeholder='Alterdata'
						disabled={!temPai}
					/>
				</div>
				{/* Telefone do Trabalho */}
				<div className='col-md-4'>
					<label htmlFor='inputFatherWorkFone' className='form-label'>
						Telefone do Trabalho
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputFatherWorkFone'
						name='telefoneTrabalhoPai'
						value={safeFormData.telefoneTrabalhoPai}
						onChange={onChange}
						placeholder='(00) 00000-0000'
						disabled={!temPai}
					/>
				</div>
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

export default StepPai;

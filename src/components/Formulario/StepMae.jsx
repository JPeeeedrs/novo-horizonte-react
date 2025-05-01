function StepMae({ onNext, onBack, formData = {}, onChange }) {
	const safeFormData = {
		nomeMae: formData.nomeMae || "",
		nascimentoMae: formData.nascimentoMae || "",
		enderecoMae: formData.enderecoMae || "",
		cepMae: formData.cepMae || "",
		cpfMae: formData.cpfMae || "",
		rgMae: formData.rgMae || "",
		telefoneMae: formData.telefoneMae || "",
		emailMae: formData.emailMae || "",
		profissaoMae: formData.profissaoMae || "",
		trabalhoMae: formData.trabalhoMae || "",
		telefoneTrabalhoMae: formData.telefoneTrabalhoMae || "",
	};

	return (
		<div className='step' id='mae'>
			<div className='row g-3'>
				<h3 className='mt-4'>Dados dos Familiares</h3>
				<h5>Dados do Responsável Materno</h5>
				{/* Nome da Mãe */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherName' className='form-label'>
						Nome do Responsável Materno
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherName'
						name='nomeMae'
						value={safeFormData.nomeMae}
						onChange={onChange}
						placeholder='Elma Maria'
					/>
				</div>

				{/* Data de Nascimento */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherBirthDate' className='form-label'>
						Data de Nascimento
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherBirthDate'
						name='nascimentoMae'
						value={safeFormData.nascimentoMae}
						onChange={onChange}
						placeholder='00/00/0000'
					/>
				</div>

				{/* Endereço */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherAddress' className='form-label'>
						Endereço
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherAddress'
						name='enderecoMae'
						value={safeFormData.enderecoMae}
						onChange={onChange}
						placeholder='Rua Manoel Gomes, 000'
					/>
				</div>

				{/* CEP */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherCEP' className='form-label'>
						CEP
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherCEP'
						name='cepMae'
						value={safeFormData.cepMae}
						onChange={onChange}
						placeholder='00000-000'
					/>
				</div>

				{/* CPF */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherCPF' className='form-label'>
						CPF
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherCPF'
						name='cpfMae'
						value={safeFormData.cpfMae}
						onChange={onChange}
						placeholder='000.000.000-00'
					/>
				</div>

				{/* RG */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherRG' className='form-label'>
						RG
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherRG'
						name='rgMae'
						value={safeFormData.rgMae}
						onChange={onChange}
						placeholder='00.000.000-0'
					/>
				</div>

				{/* Telefone */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherFone' className='form-label'>
						Telefone
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputMotherFone'
						name='telefoneMae'
						value={safeFormData.telefoneMae}
						onChange={onChange}
						placeholder='(00) 00000-0000'
					/>
				</div>

				{/* Email */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherEmail' className='form-label'>
						Email
					</label>
					<input
						type='email'
						className='form-control'
						id='inputMotherEmail'
						name='emailMae'
						value={safeFormData.emailMae}
						onChange={onChange}
						placeholder='nome@example.com'
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						title='Digite um email válido (exemplo: usuario@provedor.com)'
					/>
				</div>

				{/* Profissão */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherProfession' className='form-label'>
						Profissão
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherProfession'
						name='profissaoMae'
						value={safeFormData.profissaoMae}
						onChange={onChange}
						placeholder='Programadora'
					/>
				</div>

				{/* Local de Trabalho */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherWorkplace' className='form-label'>
						Local de Trabalho
					</label>
					<input
						type='text'
						className='form-control'
						id='inputMotherWorkplace'
						name='trabalhoMae'
						value={safeFormData.trabalhoMae}
						onChange={onChange}
						placeholder='Alterdata'
					/>
				</div>

				{/* Telefone do Trabalho */}
				<div className='col-md-4'>
					<label htmlFor='inputMotherWorkFone' className='form-label'>
						Telefone do Trabalho
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputMotherWorkFone'
						name='telefoneTrabalhoMae'
						value={safeFormData.telefoneTrabalhoMae}
						onChange={onChange}
						placeholder='(00) 00000-0000'
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

export default StepMae;

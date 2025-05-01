function StepAluno({ onNext, formData = {}, onChange }) {
	const safeFormData = {
		nome: formData.nome || "",
		idade: formData.idade || "",
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

	return (
		<div className='step' id='aluno'>
			<div className='row g-3'>
				<h3 className='mt-4'>Dados do Aluno</h3>
				{/* Nome */}
				<div className='col-md-4'>
					<label htmlFor='inputName' className='form-label'>
						Nome
					</label>
					<input
						type='text'
						className='form-control'
						id='inputName'
						name='nome'
						value={safeFormData.nome}
						onChange={onChange}
						placeholder='João da Silva'
					/>
				</div>

				{/* Idade */}
				<div className='col-md-4'>
					<label htmlFor='inputAge' className='form-label'>
						Idade
					</label>
					<input
						type='text'
						className='form-control'
						id='inputAge'
						name='idade'
						value={safeFormData.idade}
						onChange={onChange}
						placeholder='00'
					/>
				</div>

				{/* Data de Nascimento */}
				<div className='col-md-4'>
					<label htmlFor='inputBirthDate' className='form-label'>
						Data de Nascimento
					</label>
					<input
						type='text'
						className='form-control'
						id='inputBirthDate'
						name='dataNascimento'
						value={safeFormData.dataNascimento}
						onChange={onChange}
						placeholder='00/00/0000'
					/>
				</div>

				{/* Naturalidade */}
				<div className='col-md-4'>
					<label htmlFor='inputNaturalidade' className='form-label'>
						Naturalidade
					</label>
					<input
						type='text'
						className='form-control'
						id='inputNaturalidade'
						name='naturalidade'
						value={safeFormData.naturalidade}
						onChange={onChange}
						placeholder='Teresopolitano'
					/>
				</div>

				{/* Nacionalidade */}
				<div className='col-md-4'>
					<label htmlFor='inputNacionalidade' className='form-label'>
						Nacionalidade
					</label>
					<input
						type='text'
						className='form-control'
						id='inputNacionalidade'
						name='nacionalidade'
						value={safeFormData.nacionalidade}
						onChange={onChange}
						placeholder='Brasileira'
					/>
				</div>

				{/* Sexo */}
				<div className='col-md-4'>
					<label htmlFor='inputSexo' className='form-label'>
						Sexo
					</label>
					<select
						id='inputSexo'
						className='form-select'
						name='sexo'
						value={safeFormData.sexo}
						onChange={onChange}
					>
						<option disabled hidden value=''>
							Selecione
						</option>
						<option value='Feminino'>Feminino</option>
						<option value='Masculino'>Masculino</option>
						<option value='Não Binário'>Não Binário</option>
						<option value='Outro'>Outro</option>
						<option value='Prefiro não informar'>Prefiro não informar</option>
					</select>
				</div>

				{/* CPF */}
				<div className='col-md-4'>
					<label htmlFor='inputCPFAluno' className='form-label'>
						CPF
					</label>
					<input
						type='text'
						className='form-control'
						id='inputCPFAluno'
						name='cpf'
						value={safeFormData.cpf}
						onChange={onChange}
						placeholder='000.000.000-00'
					/>
				</div>

				{/* RG */}
				<div className='col-md-4'>
					<label htmlFor='inputRGAluno' className='form-label'>
						RG
					</label>
					<input
						type='text'
						className='form-control'
						id='inputRGAluno'
						name='rg'
						value={safeFormData.rg}
						onChange={onChange}
						placeholder='00.000.000-0'
					/>
				</div>

				{/* Ano Letivo */}
				<div className='col-md-4'>
					<label htmlFor='inputYear' className='form-label'>
						Ano Letivo
					</label>
					<input
						type='text'
						className='form-control'
						id='inputYear'
						name='anoLetivo'
						value={safeFormData.anoLetivo}
						onChange={onChange}
						placeholder='2025'
					/>
				</div>

				{/* Certidão de Nascimento */}
				<div className='col-12'>
					<div className='row'>
						<h6>Certidão de Nascimento</h6>
						<div className='col-md-4'>
							<label htmlFor='inputTermo' className='form-label'>
								Termo
							</label>
							<input
								type='text'
								className='form-control'
								id='inputTermo'
								name='termo'
								value={safeFormData.termo}
								onChange={onChange}
								placeholder='00000'
							/>
						</div>
						<div className='col-md-4'>
							<label htmlFor='inputFolha' className='form-label'>
								Folha
							</label>
							<input
								type='text'
								className='form-control'
								id='inputFolha'
								name='folha'
								value={safeFormData.folha}
								onChange={onChange}
								placeholder='000'
							/>
						</div>
						<div className='col-md-4'>
							<label htmlFor='inputLivro' className='form-label'>
								Livro
							</label>
							<input
								type='text'
								className='form-control'
								id='inputLivro'
								name='livro'
								value={safeFormData.livro}
								onChange={onChange}
								placeholder='000'
							/>
						</div>
					</div>
				</div>

				{/* Matrícula */}
				<div className='col-12'>
					<div className='row'>
						<div className='col-md-12'>
							<label htmlFor='inputMatricula' className='form-label'>
								Matrícula
							</label>
							<input
								type='text'
								className='form-control'
								id='inputMatricula'
								name='matricula'
								value={safeFormData.matricula}
								onChange={onChange}
								placeholder='0000000'
							/>
						</div>
					</div>
				</div>

				{/* Turno */}
				<div className='col-md-4'>
					<label htmlFor='inputShift' className='form-label'>
						Turno
					</label>
					<select
						id='inputShift'
						className='form-select'
						name='turno'
						value={safeFormData.turno}
						onChange={onChange}
					>
						<option disabled hidden value=''>
							Selecione
						</option>
						<option value='Manhã'>Manhã</option>
						<option value='Tarde'>Tarde</option>
						<option value='Integral'>Integral</option>
					</select>
				</div>

				{/* Tipo Sanguíneo */}
				<div className='col-md-4'>
					<label htmlFor='inputBlood' className='form-label'>
						Tipo Sanguíneo
					</label>
					<select
						id='inputBlood'
						className='form-select'
						name='tipoSanguineo'
						value={safeFormData.tipoSanguineo}
						onChange={onChange}
					>
						<option disabled hidden value=''>
							Selecione
						</option>
						<option value='-O'>-O</option>
						<option value='+O'>+O</option>
						<option value='-A'>-A</option>
						<option value='+A'>+A</option>
						<option value='-B'>-B</option>
						<option value='+B'>+B</option>
						<option value='-AB'>-AB</option>
						<option value='+AB'>+AB</option>
					</select>
				</div>

				{/* Raça */}
				<div className='col-md-4'>
					<label htmlFor='inputRace' className='form-label'>
						Raça
					</label>
					<select
						id='inputRace'
						className='form-select'
						name='raca'
						value={safeFormData.raca}
						onChange={onChange}
					>
						<option disabled hidden value=''>
							Selecione
						</option>
						<option value='Parda'>Parda</option>
						<option value='Branca'>Branca</option>
						<option value='Pretos'>Pretos</option>
						<option value='Indígenas'>Indígenas</option>
						<option value='Amarela'>Amarela</option>
					</select>
				</div>

				<button type='button' className='btn btn-nav' onClick={onNext}>
					Próximo
				</button>
			</div>
		</div>
	);
}

export default StepAluno;

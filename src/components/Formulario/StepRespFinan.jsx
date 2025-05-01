function StepRespFinan({ onNext, onBack, formData = {}, onChange }) {
	const safeFormData = {
		respNome: formData.respNome || "",
		respFone: formData.respFone || "",
	};

	return (
		<div className='step' id='resp-financeiro'>
			<div className='row g-3'>
				<h3 className='mt-4'>Responsável Financeiro</h3>
				<div className='col-md-6'>
					<label htmlFor='inputRespName' className='form-label'>
						Nome
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
				<div className='col-md-6'>
					<label htmlFor='inputRespFone' className='form-label'>
						Telefone
					</label>
					<input
						type='tel'
						className='form-control'
						id='inputRespFone'
						name='respFone'
						value={safeFormData.respFone}
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

export default StepRespFinan;

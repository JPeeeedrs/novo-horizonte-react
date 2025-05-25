import React from "react";

function SelectField({
	className,
	id,
	name,
	label,
	value,
	onChange,
	options = [],
	required,
}) {
	return (
		<div className={className}>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<select
				id={id}
				name={name}
				className='form-select'
				value={value}
				onChange={onChange}
				required={required}
			>
				<option disabled hidden value=''>
					Selecione
				</option>
				{options.map((opt, idx) => (
					<option key={idx} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectField;

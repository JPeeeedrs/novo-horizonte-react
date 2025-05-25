import React from "react";

function InputField({
	className,
	id,
	label,
	name,
	value,
	onChange,
	placeholder,
	required,
	type = "text",
	disabled = false,
}) {
	return (
		<div className={className}>
			<label htmlFor={id} className='form-label'>
				{label}
			</label>
			<input
				type={type}
				className='form-control'
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
			/>
		</div>
	);
}

export default InputField;

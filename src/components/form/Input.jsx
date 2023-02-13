const Input = ({ id, type, register, placeholder, labelText, pattern }) => {
	return (
		<form-control>
			<label className='label'>
				<span className='label-text'>{labelText}</span>
			</label>
			<input
				id={id}
				placeholder={placeholder}
				type={type}
				className='input input-bordered w-full max-w-xs'
				{...register(id, { required: true, pattern: { pattern } })}
			/>
		</form-control>
	)
}
export default Input

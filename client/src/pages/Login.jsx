import { useState } from 'react';
import '../styles/Login.css';
export default function Login() {
	let [formData, setFormData] = useState({
		name: '',
		password: '',
		email: '',
		zipcode: '',
	});

	// setFormData((prev) => ({ ...prev, [name]: value })); Shorthand for updataFormFeild
	function updateFormFeild(fieldName, fieldValue) {
		let newFormData = {
			name: formData.name,
			password: formData.password,
			email: formData.email,
			zipcode: formData.zipcode,
		};

		//allows data to be shown when typing
		newFormData[fieldName] = fieldValue;

		//Sets the user info
		setFormData(newFormData);
	}

	//On submit the user data will be sent to the backend
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
	}

	//renders the users data while typing
	function handleChange(e) {
		//Deconstructing the name (i.e password) value (1234) within the current input form
		const { name, value } = e.target;
		updateFormFeild(name, value);
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="form--login">
				<label>Name</label>
				<input type="text" name="name" onChange={handleChange} value={formData.name} />
				<label>Password</label>
				<input type="password" name="password" onChange={handleChange} value={formData.password} />
				<label>Email</label>
				<input type="email" name="email" onChange={handleChange} value={formData.email} />
				<label>Zipcode</label>
				<input type="number" name="zipcode" onChange={handleChange} value={formData.zipcode} />
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

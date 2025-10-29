import { useState } from 'react';

export default function SignUp() {
	const [signUpFormData, setSignUpFormData] = useState({
		name: '',
		password: '',
		email: '',
		zipcode: '',
	});

	function newSignupData(fieldName, fieldValue) {
		const newUserData = {
			name: signUpFormData.name,
			password: signUpFormData.password,
			email: signUpFormData.email,
			zipcode: signUpFormData.zipcode,
		};

		newUserData[fieldName] = fieldValue;

		setSignUpFormData(newUserData);
	}

	function handleChange(e) {
		//Deconstructing the name (i.e password) value (1234) within the current input form
		const { name, value } = e.target;
		newSignupData(name, value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(signUpFormData);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input type="name" name="name" onChange={handleChange} value={signUpFormData.name} />
				<label>Password</label>
				<input type="password" name="password" onChange={handleChange} value={signUpFormData.password} />
				<label>Email</label>
				<input type="email" name="email" onChange={handleChange} value={signUpFormData.email} />
				<label>Zipcode</label>
				<input type="zipcode" name="zipcode" onChange={handleChange} value={signUpFormData.zipcode} />
				<button type="submit"></button>
			</form>
		</>
	);
}

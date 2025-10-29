import { useState } from 'react';
import '../styles/login.css';

export default function Login() {
	let [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// setFormData((prev) => ({ ...prev, [name]: value })); Shorthand for updataFormFeild
	function updateFormFeild(fieldName, fieldValue) {
		let newFormData = {
			email: formData.email,
			password: formData.password,
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
			<div className="login-page">
				<div className="login-container">
					<h2 className="login-title">Welcome Back</h2>

					<form className="login-form" onSubmit={handleSubmit}>
						<label className="login-label">Email</label>
						<input className="login-input" name="email" value={formData.email} type="email" onChange={handleChange} />

						<label className="login-label">Password</label>
						<input
							className="login-input"
							name="password"
							value={formData.password}
							type="password"
							onChange={handleChange}
						/>

						<button className="login-button" type="submit">
							Log In
						</button>
					</form>

					<div className="login-footer">
						<p>
							Don’t have an account? <a href="/signup">Sign up here</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

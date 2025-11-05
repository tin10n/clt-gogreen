import { useState } from 'react';
import '../styles/login.css';

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	function updateFormField(fieldName, fieldValue) {
		setFormData((prev) => ({
			...prev,
			[fieldName]: fieldValue,
		}));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || 'Login failed');
			}

			// ✅ Save the token & user info in localStorage (optional)
			localStorage.setItem('token', data.token);
			localStorage.setItem('user', JSON.stringify(data.user));

			alert(`Welcome back, ${data.user.name || 'User'}!`);
			console.log('Logged in user:', data.user);

			// ✅ Redirect (adjust path to your app)
			window.location.href = '/dashboard';
		} catch (err) {
			console.error('Login error:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		updateFormField(name, value);
	}

	return (
		<div className="login-page">
			<div className="login-container">
				<h2 className="login-title">Welcome Back</h2>

				<form className="login-form" onSubmit={handleSubmit}>
					<label className="login-label">Email</label>
					<input
						className="login-input"
						name="email"
						value={formData.email}
						type="email"
						onChange={handleChange}
						required
					/>

					<label className="login-label">Password</label>
					<input
						className="login-input"
						name="password"
						value={formData.password}
						type="password"
						onChange={handleChange}
						required
					/>

					<button className="login-button" type="submit" disabled={loading}>
						{loading ? 'Logging in...' : 'Log In'}
					</button>

					{error && <p className="error-text">{error}</p>}
				</form>

				<div className="login-footer">
					<p>
						Don’t have an account? <a href="/signup">Sign up here</a>
					</p>
				</div>
			</div>
		</div>
	);
}

import { useState } from 'react';
import { Validate } from '../components/Validate';
import '../styles/signup.css';
export default function SignUp() {
    const [signUpFormData, setSignUpFormData] = useState({
        name: '',
        password: '',
        email: '',
        zipcode: '',
    });
    const [errors, setErrors] = useState({});
    function newSignupData(fieldName, fieldValue) {
        const newUserData = {
            name: signUpFormData.name,
            password: signUpFormData.password,
            email: signUpFormData.email,
            zipcode: signUpFormData.zipcode,
        };
        newUserData[fieldName] = fieldValue;
        setSignUpFormData(newUserData); //Sets the new state with the updated user information
    }
    function handleChange(e) {
        //Deconstructing the name (i.e password) value (1234) within the current input form
        const { name, value } = e.target;
        newSignupData(name, value);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = Validate(signUpFormData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', signUpFormData);
            try {
                const res = await fetch('http://localhost:8000/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: signUpFormData.name,
                        email: signUpFormData.email,
                        password: signUpFormData.password,
                        zip_code: signUpFormData.zipcode,
                    }),
                });
                if (!res.ok) {
                    const err = await res.json().catch(() => ({}));
                    alert(err?.error || `Signup failed (${res.status})`);
                    return;
                }
                const data = await res.json();
                if (data.success) {
                    alert('Account created!');
                }
            } catch (err) {
                console.error('Network error:', err);
                alert('Network error — check the API server');
            }
        } else {
            console.log('Validation failed:', validationErrors);
        }
    }
    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    <h2 className="signup-title">Ready to GoGreen?</h2>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <label className="signup-label">Name</label>
                        <input
                            className="signup-input"
                            type="text"
                            name="name"
                            value={signUpFormData.name}
                            onChange={handleChange}
                        />
                        <p className="error">{errors.name}</p>
                        <label className="signup-label">Email</label>
                        <input
                            className="signup-input"
                            type="email"
                            name="email"
                            value={signUpFormData.email}
                            onChange={handleChange}
                        />
                        <p className="error">{errors.email}</p>
                        <label className="signup-label">Password</label>
                        <input
                            className="signup-input"
                            type="password"
                            name="password"
                            value={signUpFormData.password}
                            onChange={handleChange}
                        />
                        <p className="error">{errors.password}</p>
                        <label className="signup-label">Zipcode</label>
                        <input
                            className="signup-input"
                            type="number"
                            name="zipcode"
                            value={signUpFormData.zipcode}
                            onChange={handleChange}
                        />
                        <p className="error">{errors.zipcode}</p>
                        <button className="signup-button" type="submit">
                            Sign Up
                        </button>
                    </form>
                    <div className="signup-footer">
                        <p>
                            Already have an account? <a href="/login">Log in here</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
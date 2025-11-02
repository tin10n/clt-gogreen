export function Validate(data) {
	const errors = {};

	// --- REGEX PATTERNS ---
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
	const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
	// At least 8 chars, upper, lower, number, and special char
	const zipcodeRegex = /^\d{5}(-\d{4})?$/; // 5 or 9 digits (US zip code)

	if (data.name.trim() === '') {
		errors.name = 'Name is Required';
	}
	// Email validation
	if (data.email.trim() === '') {
		errors.email = 'Email is required';
	} else if (emailRegex.test(data.email) === false) {
		errors.email = 'Enter a valid email address';
	}

	// Password validation
	if (data.password === '') {
		errors.password = 'Password is required';
	} else if (passwordRegex.test(data.password) === false) {
		errors.password = 'Password must include upper, lower, number & special char (8+ chars)';
	}

	// Zipcode validation
	if (data.zipcode === '') {
		errors.zipcode = 'Zipcode is required';
	} else if (zipcodeRegex.test(data.zipcode) === false) {
		errors.zipcode = 'Enter a valid 5-digit or 9-digit zipcode';
	}

	return errors;
}

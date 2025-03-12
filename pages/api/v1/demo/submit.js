// pages/api/v1/demo/submit.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            status: 'error',
            message: 'Method not allowed',
        });
    }

    const { email, phone } = req.body;

    // Simple regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format

    const errors = {};

    // Server-side validation
    if (!email || !emailRegex.test(email)) {
        errors.email = 'Invalid email format';
    }

    if (phone && !phoneRegex.test(phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            status: 'error',
            message: 'Validation error',
            errors,
        });
    }

    // Simulate server error (optional, for testing)
    // Uncomment the following lines to simulate a server error
    if (email === 'error@example.com') {
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }

    // Success response
    return res.status(200).json({
        status: 'success',
        message: 'Form submitted successfully.',
    });
}

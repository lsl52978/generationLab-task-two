
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';

const Form = ({ onClose }) => {
    const [serverError, setServerError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Define Yup validation schema
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
            .notRequired(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        setServerError('');
        setSuccessMessage('');


        try {
            const response = await fetch('/api/v1/demo/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccessMessage(result.message);
                reset();
            } else if (response.status === 400) {
                // Handle validation errors from server
                if (result.errors) {
                    Object.keys(result.errors).forEach((field) => {
                        setError(field, {
                            type: 'server',
                            message: result.errors[field],
                        });
                    });
                }
                setServerError(result.message);
            } else {
                // Handle other server errors
                setServerError(result.message || 'An unexpected error occurred');
            }
        } catch (error) {
            setServerError('Failed to submit form. Please try again.');
        }
    };

    const [selectedCountry, setSelectedCountry] = useState({
        code: "+1",
        flag: "🇺🇸",
    });

    const countries = [
        { code: "+1", flag: "🇺🇸", name: "United States" },
        { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
        { code: "+91", flag: "🇮🇳", name: "India" },
        { code: "+49", flag: "🇩🇪", name: "Germany" },
        { code: "+81", flag: "🇯🇵", name: "Japan" },
        { code: "+33", flag: "🇫🇷", name: "France" },
        { code: "+86", flag: "🇨🇳", name: "China" },
        { code: "+61", flag: "🇦🇺", name: "Australia" },
        { code: "+41", flag: "🇦🇹", name: "Switzerland" },
        { code: "+65", flag: "🇸🇬", name: "Singapore" },
        { code: "+82", flag: "🇰🇷", name: "South Korea" },
        { code: "+852", flag: "🇭🇰", name: "Hong Kong" },
        { code: "+886", flag: "🇹🇼", name: "Taiwan" },
        { code: "+62", flag: "🇮🇩", name: "Indonesia" },
        { code: "+55", flag: "🇧🇷", name: "Brazil" },
        { code: "+34", flag: "🇪🇸", name: "Spain" },
    ];

    const handleCountryChange = (e) => {
        const selected = countries.find((c) => c.code === e.target.value);
        if (selected) {
            setSelectedCountry({ code: selected.code, flag: selected.flag });
        }
    };
    return (
        <div className="max-w-xl mx-auto mt-10 p-10 rounded-[30px] shadow-md bg-gradient-to-br from-[#F4F1AA]/50 to-[#E5BC7E] relative">
            <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-transparent rounded-full hover:cursor-pointer"
                onClick={onClose}
            >
                <svg className="w-10 h-10 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <p className="text-4xl mb-4 mt-3">
                Get free sample report & white paper</p>
            {successMessage && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                    {successMessage}
                </div>
            )}
            {serverError && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {serverError}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-4">
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail Address"
                        {...register('email')}
                        className={`mt-8 block w-full px-4 py-3 bg-white border ${
                            errors.email ? 'border-red-500' : 'border-black-300'
                        } rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="flex items-center mt-3">
                    <div className="relative flex-shrink-0">
                        <select
                            onChange={handleCountryChange}
                            className="appearance-none block px-4 py-3 bg-white border border-black-300 rounded-l-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg cursor-pointer"
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.flag} {country.code}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>

                    <input
                        type="tel"
                        id="phone"
                        placeholder="Phone Number (Optional)"
                        {...register("phone")}
                        className={`flex-1 block w-full px-4 py-3 bg-white border ${
                            errors.phone ? "border-red-500" : "border-black-300"
                        } rounded-r-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg`}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 w-full bg-gradient-to-r from-[#B2813D] to-[#56380D] text-white py-3 px-6 rounded-[30px] hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Send me PDF'}
                </button>
                <div className="p-4 text-[#9F783C] font-sans text-sm">
                    By activating your offer, you consent to receive communications from Generation Lab. You can unsubscribe anytime.
                </div>
            </form>
        </div>    );
};

export default Form;

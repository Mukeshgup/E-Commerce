import React, { useState } from 'react';
import { GoHome } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
// import './Signup.css'; // Make sure to create this CSS file and import it

const Signup = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
     
    function GoHome(){
           navigate('/')
    }

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Fixing the variable name to lowercase

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = () => {
        let errors = {};

        if (!formValues.name) {
            errors.name = 'Name is required';
        } else if (formValues.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
        }

        if (!formValues.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email address is invalid';
        }

        if (!formValues.password) {
            errors.password = 'Password is required';
        } else if (formValues.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!formValues.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (formValues.confirmPassword !== formValues.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            alert('Form submitted successfully!');
            navigate('/home'); // Redirect after successful submission
        } else {
            setIsSubmitted(false);
        }
    };

    return (
        <div className="signup-container">
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {formErrors.name && <span>{formErrors.name}</span>}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span>{formErrors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                    />
                    {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
                </div>

                <button onClick={GoHome} type="submit">Signup</button>
            </form>

            {isSubmitted && <p>Signup successful!</p>}
        </div>
    );
};

export default Signup;
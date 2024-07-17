import React from 'react';
import { useForm } from 'react-hook-form';

function RegisterForm({ onRegister }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onRegister(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Register</h2>
            <input
                type="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input
                type="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterForm;

import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm({ onLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        onLogin(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
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

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;

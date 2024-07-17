import React from 'react';
import { useForm } from 'react-hook-form';


// Componente funcional LoginForm que recibe una propiedad (prop) onLogin, este prop es una funcion que se llamara al enviar el formulario.
function LoginForm({ onLogin }) {
    // Llamamos al hook useForm, register: Método que se usa para registrar los campos del formulario, handleSubmit: Función que envuelve nuestro handler de envío (onSubmit) y se encarga de la validación y gestión del envío del formulario, formState: Objeto que contiene el estado del formulario, incluyendo los errores de validación (errors).
    const { register, handleSubmit, formState: { errors } } = useForm();



    // onSubmit: Función que se ejecuta cuando el formulario es enviado exitosamente. Recibe los datos del formulario como argumento (data) y llama a la función onLogin con estos datos. onLogin es la función pasada como prop al componente, encargada de manejar el proceso de login.
    
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

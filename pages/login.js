import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';


const Login = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async() => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });
        } catch (error) {
            console.log(error)
        }
    }, [email, password]);

    const register = useCallback(async() => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password,
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

   

    return(
        <div className="relative h-full bg-purple-100">
            <div className="bg-purple-700 w-full h-full lg:bg-opacity-50">
                <div className="flex justify-center">
                    <div className="bg-purple-600 bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    value={name} 
                                />
                            )}
                            <Input
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email} 
                            />
                             <Input
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type="password"
                                value={password} 
                            />
                        </div>
                        <button onClick={variant === 'login' ? login : register} className="bg-purple-900 py-3 text-white rounded-md w-full mt-10 hover:bg-purple-800 transiition">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-white mt-12">
                            {variant === 'login' ? 'First time using?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                               {variant === 'login' ? 'Create an account' : 'Login'} 
                            </span>
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Login;
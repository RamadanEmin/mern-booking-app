import { Link } from 'react-router-dom';

export type SignInFormData = {
    email: string;
    password: string;
};

const SignIn = () => {
    return (
        <form className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Sign In</h2>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input
                    type='email'
                    className="border rounded w-full py-1 px-2 font-normal"
                />
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input
                    type='password'
                    className="border rounded w-full py-1 px-2 font-normal"
                />
            </label>
            <span className="flex items-center justify-between">
                <span className="text-sm">
                    Not Registered?{' '}
                    <Link to="/register" className="underline">
                        Create an account here
                    </Link>
                </span>
                <button
                    type='submit'
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
                >
                    Login
                </button>
            </span>
        </form>
    );
};

export default SignIn;
export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {

    return (
        <form className="flex flex-col gap-5" >
            <h2 className="text-3xl font-bold">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>

                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        className="border rounded w-full py-1 px-2 font-normal"
                    />
                </label>
            </div>
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
            <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm Password
                <input
                    type='password'
                    className="border rounded w-full py-1 px-2 font-normal"
                />
            </label>
            <span>
                <button
                    type='submit'
                    className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"
                >
                    Create Account
                </button>
            </span>
        </form>
    );
};

export default Register;
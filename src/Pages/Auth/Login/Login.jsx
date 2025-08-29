import React, { use, useState } from "react";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnim from "../../../assets/lotti/login.json";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
import GoogleAuthButton from "../Register/GoogleAuthButton";

const Login = () => {
    const { signIn } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");

        // Firebase Login
        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    icon: "success",
                    title: "Login Successful 🎉",
                    text: "Welcome back to GreenNest!",
                    confirmButtonColor: "#16a34a",
                    background: "#fef2f2",
                    timer: 1500
                });
                form.reset();
                navigate(location?.state || '/');
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                    confirmButtonColor: "#16a34a",
                    background: "#fef2f2",
                    timer: 1500
                });
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-7xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Column - Lottie Animation */}
                <div className="hidden md:flex items-center justify-center bg-base-100 p-6">
                    <Lottie animationData={loginAnim} loop={true} className="w-full max-w-md" />
                </div>

                {/* Right Column - Login Form */}
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
                        Login to Your Account
                    </h2>

                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-primary mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-3 text-sm text-gray-500">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Google Auth */}
                    <GoogleAuthButton mode="login" />

                    {/* Navigate to Register */}
                    <p className="text-center text-sm mt-4">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-primary hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

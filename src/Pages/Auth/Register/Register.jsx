import React, { use, useState } from "react";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router";
import GoogleAuthButton from "./GoogleAuthButton";
import registerAnim from "../../../assets/lotti/register.json";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, profileUpdate } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo, ...userData } = Object.fromEntries(formData.entries())
        const newUser = { ...userData, email, name, photo }

        // Password Validition

        setError('');

        const passLength = password.length;
        if (passLength < 8) {
            setError('Password Must be at lest 8 charecter');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must include at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must include at least one lowercase letter.");
            return;
        }
        if (!/[@$!%*?&]/.test(password)) {
            setError("Password must include at least one special character (@$!%*?&).");
            return;
        }



        // Firebase Register
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful 🎉',
                    text: 'Welcome to GreenNest!',
                    confirmButtonColor: '#16a34a',
                    background: "#fef2f2",
                    timer: 1500
                });
                const updateData = {
                    displayName: name,
                    photoURL: photo
                }
                profileUpdate(updateData)
                form.reset();
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message,
                    confirmButtonColor: '#16a34a',
                    background: "#fef2f2",
                    timer: 1500
                });
            })

        // set data in DB


    }
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-7xl bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Left Column - Lottie Animation */}
                <div className="hidden md:flex items-center justify-center bg-base-100 p-6">
                    <Lottie animationData={registerAnim} loop={true} className="w-full max-w-md" />
                </div>

                {/* Right Column - Form */}
                <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
                        Create Your Account
                    </h2>

                    <form onSubmit={handleRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Photo URL</label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="Enter your photo URL"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Age</label>
                            <input
                                type="number"
                                name="age"
                                placeholder="Enter your age"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Gender */}
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-primary mb-1">Gender</label>
                            <select
                                name="gender"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option disabled selected>Select your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Experience */}
                        <div className="col-span-1 sm:col-span-2">
                            <label className="block text-sm font-medium text-primary mb-1">Experience</label>
                            <textarea
                                name="experience"
                                placeholder="Tell us about your experience saperate by comma"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-1 sm:col-span-2">
                            {
                                error && <p className="text-red-600 text-xs mb-3">{error}</p>
                            }
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-primary font-semibold text-white hover:bg-secondary transition"
                            >
                                Register
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
                    <GoogleAuthButton mode="register" />

                    {/* Navigate to Login */}
                    <p className="text-center text-sm mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

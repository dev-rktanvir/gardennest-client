import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";

const GoogleAuthButton = ({ mode }) => {
    const { googleLogin } = use(AuthContext);

    const handleGoogleLogin = () => {
        // Firebase Register
        googleLogin()
            .then(result => {
                if (mode === "register") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful 🎉',
                        text: 'Welcome to GreenNest!',
                        confirmButtonColor: '#16a34a',
                        timer: 1500
                    });
                }
                if (mode === "login") {
                    Swal.fire({
                        icon: "success",
                        title: "Login Successful 🎉",
                        text: "Welcome back to GreenNest!",
                        confirmButtonColor: "#16a34a",
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message,
                    confirmButtonColor: '#16a34a',
                    timer: 1500
                });
            })
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
        >
            <FcGoogle className="text-xl" />
            <span className="font-medium">
                {
                    mode === "register" ? "Register with Google" : "Login with Google"
                }
            </span>
        </button>
    );
};

export default GoogleAuthButton;

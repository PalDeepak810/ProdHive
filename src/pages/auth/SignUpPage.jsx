import React, { useState } from "react";
import Button from "../../components/common/Button";
import { signupApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();

    const [userName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        const data = {
            userName,
            email,
            password
        };

        try {
            const response = await signupApi(data);
            alert("Signup successful!");
            console.log(response.data);
            window.location.href = "/dashboard";
        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-white">

            {/* Top Bar */}
            <header className="w-full flex justify-between items-center px-8 py-4 border-b">
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
                    <span className="font-semibold text-gray-900 text-lg">ConnectSphere</span>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                    <span className="text-gray-600">Already have an account?</span>
                    <Button variant="secondary" onClick={() => navigate("/login")}>
                        Log In
                    </Button>

                </div>
            </header>

            {/* Signup Panel */}
            <div className="w-full max-w-md mt-12 px-6">

                <h2 className="text-3xl font-semibold text-center text-gray-900">
                    Get Started
                </h2>

                <p className="text-center text-gray-500 mt-2">
                    The all-in-one platform for team collaboration.
                </p>

                <form className="mt-8" onSubmit={handleSignup}>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a strong password"
                            className="w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Terms */}
                    <div className="mt-3 flex items-center space-x-2 text-sm text-gray-500">
                        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                        <span>
                            I agree to the{" "}
                            <a className="text-blue-600 cursor-pointer">Terms of Service</a> and{" "}
                            <a className="text-blue-600 cursor-pointer">Privacy Policy</a>.
                        </span>
                    </div>

                    {/* Create Account Button */}
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full mt-6 py-3 text-sm font-medium"
                    >
                        Create Account
                    </Button>

                </form>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import Button from "../../components/common/Button";
import { loginApi } from "../../api/authApi";

export default function LoginPage() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await loginApi({ userName, password });

            localStorage.setItem("username", response.data.username);
            localStorage.setItem("password", password);
            localStorage.setItem("userId", response.data.userId);

            alert("Login successful!");
            window.location.href = "/dashboard";

        } catch (err) {
            console.error(err.response?.data || err);
            alert("Invalid username or password");
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg flex overflow-hidden">

                {/* LEFT SIDE */}
                <div className="w-1/2 bg-gradient-to-br from-[#0b2f34] to-[#567a7a] p-10 text-white flex flex-col justify-between">

                    <div className="text-2xl font-semibold flex items-center gap-2 mt-2">
                        <span>🐝</span>
                        <span>ProdHive</span>
                    </div>

                    <div className="mt-auto pb-10">
                        <h2 className="text-3xl font-bold mb-2">
                            Bring Your Team Together.
                        </h2>

                        <p className="text-gray-200 text-md">
                            Your hub for great work and seamless productivity.
                        </p>
                    </div>

                    <div className="text-xs text-gray-300">
                        Privacy Policy · Terms of Service
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-1/2 p-10">

                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin}>

                        {/* Username */}
                        <div className="mb-5">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <div className="flex justify-between items-center">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <a className="text-sm text-blue-600 cursor-pointer">
                                    Forgot Password?
                                </a>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center mb-5">
                            <input type="checkbox" className="w-4 h-4 mr-2" />
                            <span className="text-sm text-gray-600">Remember Me</span>
                        </div>

                        {/* Login Button */}
                        <Button variant="primary" type="submit" className="w-full py-3">
                            Log In
                        </Button>

                        {/* Signup Link */}
                        <div className="text-sm text-center mt-6">
                            Don't have an account?{" "}
                            <a href="/signup" className="text-blue-600 cursor-pointer">
                                Sign Up
                            </a>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

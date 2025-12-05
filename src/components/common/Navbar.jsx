import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header className="border-b bg-white w-full">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
                <div
                    className="text-xl font-semibold cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    TeamFlow
                </div>

                <nav className="flex gap-6 text-gray-600">
                    <span className="cursor-pointer" onClick={() => navigate("/")}>Home</span>
                    <span className="cursor-pointer" onClick={() => navigate("/features")}>Features</span>
                    <span className="cursor-pointer" onClick={() => navigate("/about")}>About</span>
                </nav>

                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => navigate("/login")}>Log In</Button>
                    <Button onClick={() => navigate("/signup")}>Sign Up</Button>
                </div>
            </div>
        </header>
    );
}

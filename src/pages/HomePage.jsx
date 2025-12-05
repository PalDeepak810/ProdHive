import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import dashboardImg from "../assets/images/dashboard.png";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="font-inter">

            <Navbar />

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto flex items-center justify-between py-20 px-4">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        The All-in-One <br /> Workspace for Your Team
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Bring your team, tasks, documents, and communication together
                        into one unified workspace to increase productivity.
                    </p>

                    <Button
                        className="mt-6"
                        onClick={() => navigate("/signup")}
                    >
                        Get Started — it’s Free
                    </Button>
                </div>

                <img
                    src={dashboardImg}
                    alt="App preview"
                    className="w-[420px] rounded-lg shadow-lg"
                />

            </section>

            {/* Features Section */}
            <section className="text-center py-16 bg-white">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Everything You Need to Work Smarter
                </h2>

                <p className="mt-2 text-gray-500">
                    Enhance workflow with task management, notes, team chat, and more.
                </p>

                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-4">
                    <FeatureCard
                        title="Task Management"
                        desc="Create tasks, assign to members, track progress, and stay organized."
                    />
                    <FeatureCard
                        title="Real-time Docs"
                        desc="Collaborate on documents simultaneously with your entire team."
                    />
                    <FeatureCard
                        title="Team Chat"
                        desc="Instant communication with channels, mentions, and file sharing."
                    />
                </div>
            </section>

            {/* Video */}
            <section className="py-16 bg-gray-50 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    See It In Action
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-teal-500 h-[320px] rounded-xl flex items-center justify-center">
                        <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-md">
                            ▶
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Trusted by Teams Worldwide
                </h2>

                <div className="max-w-3xl mx-auto bg-gray-100 p-10 mt-8 rounded-xl">
                    <p className="text-gray-700 italic leading-relaxed">
                        “TeamFlow has revolutionized how our team collaborates.
                        We're more organized, more focused and more productive.
                        My workdays are smoother — it’s like a superpower for our team.”
                    </p>

                    <div className="mt-4 text-gray-700 font-medium">
                        Julia Chen • Head of Product
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Ready to Boost Your Team’s Productivity?
                </h2>

                <p className="text-gray-600 mt-2">
                    Join thousands of teams using our workspace to accelerate their workflow.
                </p>

                <Button
                    className="mt-6"
                    onClick={() => navigate("/signup")}
                >
                    Try it Free
                </Button>
            </section>

            <Footer />

        </div>
    );
}

function FeatureCard({ title, desc }) {
    return (
        <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{desc}</p>
        </div>
    );
}

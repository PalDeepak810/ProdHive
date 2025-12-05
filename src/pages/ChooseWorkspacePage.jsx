import React from "react";

export default function ChooseWorkspacePage() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-3xl">

                <h2 className="text-3xl font-semibold text-center mb-6">
                    Welcome to ProdHive
                </h2>

                <p className="text-center text-gray-600 mb-10">
                    How would you like to use the platform today?
                </p>

                <div className="grid grid-cols-2 gap-6">

                    {/* PERSONAL */}
                    <div
                        onClick={() => window.location.href = "/personaldashboard"}
                        className="cursor-pointer border rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold mb-3">Personal Workspace</h3>
                        <p className="text-gray-600">
                            Your private productivity system — personal tasks, docs & notes.
                        </p>
                    </div>

                    {/* COLLABORATION */}
                    <div
                        onClick={() => window.location.href = "/team/dashboard"}
                        className="cursor-pointer border rounded-xl p-6 hover:border-blue-500 hover:shadow-md transition"
                    >
                        <h3 className="text-xl font-semibold mb-3">Team Workspace</h3>
                        <p className="text-gray-600">
                            Work with others — shared projects, tasks & communication.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

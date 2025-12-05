import { useState } from "react";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Button from "../../components/common/Button";
import { useUser } from "../../context/UserContext";

export default function PersonalSettingsPage() {
    const { user, setUser } = useUser();

    const [profile, setProfile] = useState({
        name: user.name,
        email: user.email,
        password: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [previewImage, setPreviewImage] = useState(user.profileImage);

    // Handle text input change
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // Handle profile photo upload
    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result;

            setPreviewImage(base64);

            // Update global user state
            setUser((prev) => ({
                ...prev,
                profileImage: base64,
            }));

            // Persist in localStorage
            localStorage.setItem("profileImage", base64);
        };
        reader.readAsDataURL(file);
    };

    const handleSaveProfile = (e) => {
        e.preventDefault();

        setUser((prev) => ({
            ...prev,
            name: profile.name,
            email: profile.email,
        }));

        alert("Profile updated successfully!");
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();

        if (profile.newPassword !== profile.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Password changed successfully!");
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">

            <PersonalSidebar activePage="settings" />

            <div className="flex-1 p-6">

                <Topbar title="Settings" />

                <div className="max-w-3xl mx-auto space-y-8 mt-6">

                    {/* Profile Photo */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Profile Photo
                        </h3>

                        <div className="flex items-center gap-6">
                            <img
                                src={previewImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border"
                            />

                            <label className="px-4 py-2 bg-gray-100 border rounded-lg cursor-pointer text-sm">
                                Upload New Photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Profile Information */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Profile Information
                        </h3>

                        <form onSubmit={handleSaveProfile} className="space-y-5">

                            <div>
                                <label className="text-sm text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:border-blue-500"
                                />
                            </div>

                            <Button type="submit" className="px-6 py-2">
                                Save Changes
                            </Button>
                        </form>
                    </div>

                    {/* Password Change */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Change Password
                        </h3>

                        <form onSubmit={handlePasswordChange} className="space-y-5">

                            <div>
                                <label className="text-sm text-gray-700">Current Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={profile.password}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={profile.newPassword}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={profile.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg"
                                />
                            </div>

                            <Button type="submit" className="px-6 py-2">
                                Update Password
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

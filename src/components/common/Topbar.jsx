import { Search, Plus } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Topbar({ title = "My Dashboard" }) {
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div className="flex justify-between items-center mb-6">

            <h1 className="text-xl font-semibold text-gray-800">{title}</h1>

            <div className="flex items-center gap-4">

                {/* Search Bar */}
                <div className="flex items-center bg-white border px-3 py-2 rounded-lg w-72">
                    <Search size={18} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 outline-none text-sm w-full"
                    />
                </div>

                {/* ➤ Navigate to Create Task */}
                <Button
                    className="flex items-center gap-2"
                    onClick={() => navigate("/personalcreatetasks")}
                >
                    <Plus size={18} /> New Task
                </Button>

                {/* Dynamic Avatar */}
                <img
                    src={user.profileImage}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border"
                />
            </div>

        </div>
    );
}

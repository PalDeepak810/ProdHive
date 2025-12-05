import { useNavigate } from "react-router-dom";
import SidebarItem from "../../components/common/SidebarItem";
import { Home, CheckSquare, FileText, Settings } from "lucide-react";
import { useUser } from "../../context/UserContext";

export default function PersonalSidebar({ activePage = "dashboard" }) {
    const navigate = useNavigate();
    const { user } = useUser();

    return (
        <div className="w-60 bg-white border-r min-h-screen p-5">

            {/* Profile Photo */}
            <div className="flex items-center gap-3 mb-10">
                <img
                    src={user.profileImage}
                    className="w-10 h-10 rounded-full border"
                    alt="profile"
                />
                <span className="font-semibold text-gray-800">Personal</span>
            </div>

            {/* Menu */}
            <nav className="space-y-2">

                <SidebarItem
                    icon={<Home size={18} />}
                    label="Dashboard"
                    active={activePage === "dashboard"}
                    onClick={() => navigate("/personaldashboard")}
                />

                <SidebarItem
                    icon={<CheckSquare size={18} />}
                    label="Tasks"
                    active={activePage === "tasks"}
                    onClick={() => navigate("/personaltaskspage")}
                />

                <SidebarItem
                    icon={<FileText size={18} />}
                    label="Notes"
                    active={activePage === "notes"}
                    onClick={() => navigate("/personalnotespage")}
                />

                <SidebarItem
                    icon={<Settings size={18} />}
                    label="Settings"
                    active={activePage === "settings"}
                    onClick={() => navigate("/personalsetting")}
                />

            </nav>
        </div>
    );
}

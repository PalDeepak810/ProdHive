export default function SidebarItem({ icon, label, active, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm
      ${active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
}

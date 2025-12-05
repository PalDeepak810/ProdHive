export default function Badge({ label }) {
    const colors = {
        High: "bg-red-100 text-red-600",
        Medium: "bg-yellow-100 text-yellow-700",
        Low: "bg-green-100 text-green-700"
    };

    return (
        <span className={`px-3 py-1 text-xs rounded-full font-medium ${colors[label]}`}>
            {label}
        </span>
    );
}

import Card from "../../components/common/Card";

export default function ProductivityStats() {
    const bars = [30, 50, 120, 70, 95, 20, 30];

    return (
        <Card>
            <h3 className="font-semibold text-gray-800 mb-4">Productivity Stats</h3>

            <div className="flex items-end justify-between h-36">
                {bars.map((h, i) => (
                    <div
                        key={i}
                        className={`w-6 rounded ${i === 2 ? "bg-blue-500" : "bg-blue-200"
                            }`}
                        style={{ height: `${h}px` }}
                    ></div>
                ))}
            </div>
        </Card>
    );
}

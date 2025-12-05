import Card from "../../components/common/Card";

export default function CalendarWidget() {
    return (
        <Card>
            <h3 className="font-semibold mb-4">Calendar</h3>

            <p className="text-sm text-gray-600 mb-2">October 2024</p>

            <div className="grid grid-cols-7 gap-2 text-center text-gray-700 text-sm">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
                    <div key={d + index} className="font-medium">
                        {d}
                    </div>
                ))}

                {Array.from({ length: 31 }).map((_, i) => (
                    <div
                        key={i}
                        className={`p-1 rounded cursor-pointer ${i + 1 === 23 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
        </Card>
    );
}

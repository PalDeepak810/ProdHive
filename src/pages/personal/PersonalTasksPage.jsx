import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Card from "../../components/common/Card";
import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";
import { Pencil, Trash2, Filter, ArrowUpDown } from "lucide-react";
import { getTasksApi, deleteTaskApi } from "../../api/taskApi";

export default function PersonalTasksPage() {
    const [tab, setTab] = useState("all");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Fetch tasks
    const fetchTasks = async () => {
        try {
            const response = await getTasksApi();
            setTasks(response.data);
        } catch (err) {
            console.error("Failed to fetch tasks:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filtering
    const filteredTasks = tasks.filter((task) => {
        const isCompleted = task.taskStatus === "COMPLETED";

        if (tab === "all") return true;
        if (tab === "pending") return !isCompleted;
        if (tab === "completed") return isCompleted;
        return true;
    });

    // DELETE Task
    const handleDelete = async (id) => {
        if (!window.confirm("Delete this task?")) return;
        try {
            await deleteTaskApi(id);
            fetchTasks();
        } catch (err) {
            console.error("Failed to delete:", err);
        }
    };

    // EDIT Task
    const handleEdit = (task) => {
        console.log("EDIT CLICKED:", task);
        alert("Edit functionality coming soon");
    };

    if (loading) {
        return <div className="p-6">Loading tasks...</div>;
    }

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <PersonalSidebar activePage="tasks" />

            <div className="flex-1 p-6">
                <Topbar title="Tasks" />

                <Card>

                    {/* Tabs */}
                    <div className="flex gap-4 border-b pb-3 mb-5">
                        {["all", "pending", "completed"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`capitalize pb-2 px-2 ${tab === t
                                    ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                                    : "text-gray-500"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Filter + Sort */}
                    <div className="flex justify-end gap-3 mb-4">
                        <Button variant="secondary" className="flex items-center gap-2 px-4">
                            <Filter size={16} /> Filter
                        </Button>

                        <Button variant="secondary" className="flex items-center gap-2 px-4">
                            <ArrowUpDown size={16} /> Sort
                        </Button>
                    </div>

                    {/* Table Header */}
                    <div className="grid grid-cols-5 px-2 py-2 text-sm font-semibold text-gray-600 border-b">
                        <div className="col-span-2">Task Name</div>
                        <div>Due Date</div>
                        <div>Priority</div>
                        <div>Actions</div>
                    </div>

                    {/* Task List */}
                    <div className="divide-y">
                        {filteredTasks.map((task) => (
                            <div
                                key={task.id}
                                className="grid grid-cols-5 px-2 py-3 items-center text-sm"
                            >
                                {/* Task Name */}
                                <div className="col-span-2 flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        defaultChecked={task.taskStatus === "COMPLETED"}
                                    />
                                    <span
                                        className={
                                            task.taskStatus === "COMPLETED"
                                                ? "line-through text-gray-400"
                                                : ""
                                        }
                                    >
                                        {task.title}
                                    </span>
                                </div>

                                {/* Due Date */}
                                <div className="text-gray-600">
                                    {task.dueDate
                                        ? new Date(task.dueDate).toDateString()
                                        : "—"}
                                </div>

                                {/* Priority */}
                                <div>
                                    <Badge label={task.priority} />
                                </div>

                                {/* ACTIONS COLUMN (FIXED WIDTH + CLICK WORKING) */}
                                <div className="flex gap-3 text-gray-500 col-span-1 justify-center">

                                    <Pencil
                                        size={16}
                                        className="cursor-pointer hover:text-blue-600"
                                        onClick={() => navigate("/personalcreatetasks", { state: task })}
                                    />



                                    <Trash2
                                        size={16}
                                        className="cursor-pointer hover:text-red-600"
                                        onClick={() => handleDelete(task.id)}
                                    />

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add New Task */}
                    <div className="text-center mt-4">
                        <button
                            className="text-blue-600 text-sm hover:underline"
                            onClick={() => navigate("/personalcreatetasks")}
                        >
                            + Add new task
                        </button>
                    </div>

                </Card>
            </div>
        </div>
    );
}

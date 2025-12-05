import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Card from "../../components/common/Card";
import { getTaskByIdApi } from "../../api/taskApi";

export default function PersonalTaskDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTask();
    }, []);

    async function loadTask() {
        try {
            const res = await getTaskByIdApi(id);
            setTask(res.data);
        } catch (err) {
            console.error("Failed to load task:", err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <div className="p-6">Loading…</div>;

    if (!task) return <div className="p-6">Task not found</div>;

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <PersonalSidebar activePage="tasks" />

            <div className="flex-1 p-6">
                <Topbar title="Task Details" />

                <Card className="p-6 space-y-4">

                    <h2 className="text-2xl font-semibold">{task.title}</h2>

                    <p className="text-gray-600">{task.description || "No description"}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
                        <p><strong>Status:</strong> {task.taskStatus}</p>
                        <p><strong>Priority:</strong> {task.priority}</p>
                        <p><strong>Due Date:</strong> {task.dueDate?.split("T")[0]}</p>
                        <p><strong>Created At:</strong> {task.createdAt?.split("T")[0]}</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                            onClick={() => navigate("/personalcreatetasks", { state: task })}
                        >
                            Edit Task
                        </button>

                        <button
                            className="px-4 py-2 border rounded-lg"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </button>
                    </div>

                </Card>
            </div>
        </div>
    );
}

import Card from "../../components/common/Card";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { getTasksApi, updateTaskApi, deleteTaskApi } from "../../api/taskApi";
import { Pencil, Trash2 } from "lucide-react";

export default function TasksWidget() {
    const [tab, setTab] = useState("today");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const tabs = ["today", "upcoming", "overdue"];

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const res = await getTasksApi();
            setTasks(res.data);
        } catch (err) {
            console.error("Failed to fetch tasks", err);
        } finally {
            setLoading(false);
        }
    }

    function getDateOnly(dateStr) {
        return dayjs(dateStr).format("YYYY-MM-DD");
    }

    function getFilteredTasks() {
        const today = dayjs().format("YYYY-MM-DD");
        return tasks.filter(task => {
            const due = getDateOnly(task.dueDate);

            if (tab === "today") return due === today;
            if (tab === "upcoming") return due > today;
            if (tab === "overdue")
                return due < today && task.taskStatus !== "COMPLETED";

            return false;
        });
    }

    async function toggleStatus(task) {
        const updated = {
            ...task,
            taskStatus: task.taskStatus === "COMPLETED" ? "PENDING" : "COMPLETED",
        };

        try {
            await updateTaskApi(task.id, updated);
            fetchTasks();
        } catch (err) {
            console.error("Error updating task", err);
        }
    }

    // DELETE HANDLER
    async function deleteTask(id) {
        try {
            await deleteTaskApi(id);
            fetchTasks();
        } catch (err) {
            console.error("Failed to delete task", err);
        }
    }

    const filtered = getFilteredTasks();

    return (
        <Card>
            <h2 className="font-semibold text-gray-800 mb-4">My Tasks</h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-4">
                {tabs.map(t => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`pb-1 capitalize ${tab === t
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-500"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="text-gray-400">Loading tasks…</p>
            ) : filtered.length === 0 ? (
                <p className="text-gray-400 text-sm">No tasks to show.</p>
            ) : (
                <ul className="space-y-3">
                    {filtered.map(task => (
                        <li
                            key={task.id}
                            className="flex items-center gap-3 text-sm p-2 border rounded-md"
                        >
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                checked={task.taskStatus === "COMPLETED"}
                                onChange={() => toggleStatus(task)}
                            />

                            {/* CLICKABLE TASK TITLE */}
                            <span
                                className={`cursor-pointer ${task.taskStatus === "COMPLETED"
                                        ? "line-through text-gray-400"
                                        : ""
                                    }`}
                                onClick={() => navigate(`/personaltask/${task.id}`)}
                            >
                                {task.title}
                            </span>

                            {/* PRIORITY BADGE */}
                            <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
                                {task.priority || "LOW"}
                            </span>

                            {/* Date */}
                            <span className="text-gray-500 ml-auto text-xs">
                                {getDateOnly(task.dueDate)}
                            </span>

                            {/* EDIT BUTTON */}
                            <Pencil
                                size={16}
                                className="text-gray-500 cursor-pointer hover:text-blue-600"
                                onClick={() => navigate(`/personaltask/${task.id}`)}
                            />

                            {/* DELETE BUTTON */}
                            <Trash2
                                size={16}
                                className="text-gray-500 cursor-pointer hover:text-red-600"
                                onClick={() => deleteTask(task.id)}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
}

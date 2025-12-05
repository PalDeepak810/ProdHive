import { useEffect, useState } from "react";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Button from "../../components/common/Button";
import { createTaskApi, updateTaskApi } from "../../api/taskApi";
import { useNavigate, useLocation } from "react-router-dom";

export default function PersonalCreateTaskPage() {
    const navigate = useNavigate();
    const location = useLocation();

    // If editing, task data comes from navigation state
    const editingTask = location.state || null;

    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        taskStatus: "PENDING",
        priority: "LOW"
    });

    // Load existing task if editing
    useEffect(() => {
        if (editingTask) {
            setTask({
                ...editingTask,
                dueDate: editingTask.dueDate ? editingTask.dueDate.split("T")[0] : ""
            });
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...task,
            dueDate: task.dueDate ? task.dueDate + "T00:00:00" : null
        };

        try {
            if (editingTask) {
                // UPDATE
                await updateTaskApi(editingTask.id, payload);
                alert("Task updated successfully!");
            } else {
                // CREATE
                await createTaskApi(payload);
                alert("Task created successfully!");
            }

            navigate("/personaltaskspage");

        } catch (err) {
            console.error("Error saving task:", err);
            alert("Failed to save task");
        }
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <PersonalSidebar activePage="tasks" />

            <div className="flex-1 p-6">
                <Topbar title={editingTask ? "Edit Task" : "Create Task"} />

                <div className="bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Title */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={task.title}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 border rounded-lg"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Description</label>
                            <textarea
                                name="description"
                                value={task.description}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 border rounded-lg h-28 resize-none"
                            ></textarea>
                        </div>

                        {/* Deadline + Status */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="text-sm text-gray-700 font-medium">Deadline</label>
                                <input
                                    type="date"
                                    name="dueDate"
                                    value={task.dueDate}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700 font-medium">Status</label>
                                <select
                                    name="taskStatus"
                                    value={task.taskStatus}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-3 border rounded-lg"
                                >
                                    <option value="PENDING">Pending</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="COMPLETED">Completed</option>
                                </select>
                            </div>
                        </div>

                        {/* Priority */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Priority</label>
                            <select
                                name="priority"
                                value={task.priority}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 border rounded-lg"
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="button"
                                className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                                onClick={() => navigate("/personaltaskspage")}
                            >
                                Cancel
                            </button>

                            <Button type="submit" className="px-6 py-2">
                                {editingTask ? "Update Task" : "Create Task"}
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

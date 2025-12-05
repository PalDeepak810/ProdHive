import api from "./axiosConfig";

// GET all tasks
export const getTasksApi = async () => {
  return api.get("/tasks");
};

// CREATE a new task
export const createTaskApi = async (taskData) => {
  return api.post("/tasks", taskData);
};

// DELETE a task
export const deleteTaskApi = async (taskId) => {
  return api.delete(`/tasks/${taskId}`);
};

// UPDATE a task
export const updateTaskApi = async (taskId, taskData) => {
  return api.put(`/tasks/${taskId}`, taskData);
};

export const getTaskByIdApi = (id) => apiClient.get(`/personal/tasks/${id}`);

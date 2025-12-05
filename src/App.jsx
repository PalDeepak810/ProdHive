import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import ChooseWorkspacePage from "./pages/ChooseWorkspacePage";
import PersonalDashboard from "./pages/personal/PersonalDashboard";
import PersonalTasksPage from "./pages/personal/PersonalTasksPage";
import PersonalCreateTaskPage from "./pages/personal/PersonalCreateTasksPage";
import PersonalNotesPage from "./pages/personal/PersonalNotesPage";
import PersonalCreateNotePage from "./pages/personal/PersonalCreateNotes";
import PersonalSettingsPage from "./pages/personal/PersonalSettingsPage";
import PersonalTaskDetailsPage from "./pages/personal/PersonalTaskDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<ChooseWorkspacePage />} />


      {/*personal Service */}
      <Route path="/personaldashboard" element={<PersonalDashboard />} />
      <Route path="/personaltaskspage" element={<PersonalTasksPage />} />
      <Route path="/personalcreatetasks" element={<PersonalCreateTaskPage />} />
      <Route path="/personalnotespage" element={<PersonalNotesPage />} />
      <Route path="/personalcreatenotes" element={<PersonalCreateNotePage />} />
      <Route path="/personalsetting" element={<PersonalSettingsPage />} />
      <Route path="/personaltask/:id" element={<PersonalTaskDetailsPage />} />

    </Routes>
  );
}

export default App;

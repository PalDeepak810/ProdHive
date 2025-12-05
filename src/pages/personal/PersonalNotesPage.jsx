import { useState } from "react";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Pencil, Trash2, FilePlus } from "lucide-react";

export default function PersonalNotesPage() {
    const [notes, setNotes] = useState([
        {
            title: "Project ideas",
            content: "Research new productivity tools and workflows...",
            date: "Oct 15, 2024",
        },
        {
            title: "Meeting summary",
            content: "Discussed upcoming deadlines and tasks...",
            date: "Oct 16, 2024",
        },
        {
            title: "Learning goals",
            content: "Improve React architecture and backend design...",
            date: "Oct 18, 2024",
        },
    ]);

    const handleDelete = (index) => {
        const updated = [...notes];
        updated.splice(index, 1);
        setNotes(updated);
    };

    const handleAddNote = () => {
        const title = prompt("Enter note title:");
        const content = prompt("Enter note content:");

        if (title) {
            setNotes([
                ...notes,
                { title, content, date: new Date().toDateString() }
            ]);
        }
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">

            <PersonalSidebar activePage="notes" />

            <div className="flex-1 p-6">

                <Topbar title="Notes" />

                <Card>

                    {/* Header */}
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-lg font-semibold text-gray-800">Your Notes</h2>

                        <Button
                            className="flex items-center gap-2"
                            onClick={handleAddNote}
                        >
                            <FilePlus size={18} /> Add Note
                        </Button>
                    </div>

                    {/* Notes List */}
                    <div className="space-y-4">
                        {notes.map((note, i) => (
                            <div
                                key={i}
                                className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{note.title}</h3>
                                        <p className="text-gray-600 text-sm mt-1">{note.content}</p>
                                        <p className="text-xs text-gray-400 mt-2">Updated: {note.date}</p>
                                    </div>

                                    <div className="flex gap-3 text-gray-500">
                                        <Pencil size={18} className="cursor-pointer hover:text-blue-600" />
                                        <Trash2
                                            size={18}
                                            className="cursor-pointer hover:text-red-600"
                                            onClick={() => handleDelete(i)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </Card>
            </div>
        </div>
    );
}

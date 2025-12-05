import { useState } from "react";
import PersonalSidebar from "./PersonalSidebar";
import Topbar from "../../components/common/Topbar";
import Button from "../../components/common/Button";

export default function PersonalCreateNotePage() {

    const [note, setNote] = useState({
        title: "",
        content: "",
        tags: "",
    });

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const handleCreateNote = (e) => {
        e.preventDefault();
        console.log("Note Created:", note);
        alert("Note Created Successfully!");
    };

    return (
        <div className="flex bg-gray-50 min-h-screen">

            <PersonalSidebar activePage="notes" />

            <div className="flex-1 p-6">

                <Topbar title="Create Note" />

                {/* Main Content Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm max-w-3xl mx-auto mt-6">

                    <form onSubmit={handleCreateNote} className="space-y-6">

                        {/* Title */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={note.title}
                                onChange={handleChange}
                                placeholder="e.g., Meeting Summary"
                                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Content</label>
                            <textarea
                                name="content"
                                value={note.content}
                                onChange={handleChange}
                                placeholder="Write your note here..."
                                className="w-full mt-2 px-4 py-3 border rounded-lg h-40 resize-none focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="text-sm text-gray-700 font-medium">Tags (optional)</label>
                            <input
                                type="text"
                                name="tags"
                                value={note.tags}
                                onChange={handleChange}
                                placeholder="e.g., work, meeting, ideas"
                                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button
                                type="button"
                                className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <Button type="submit" className="px-6 py-2">
                                Create Note
                            </Button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

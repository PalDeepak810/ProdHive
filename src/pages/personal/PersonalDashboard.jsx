import Topbar from "../../components/common/Topbar";
import PersonalSidebar from "./PersonalSidebar";
import TasksWidget from "./TasksWidget";
import CalendarWidget from "./CalendarWidget";
import ProductivitySuggestion from "./ProductivitySuggestion";
import ProductivityStats from "./ProductivityStats";

export default function PersonalDashboard() {
    return (
        <div className="flex bg-gray-50 min-h-screen">

            {/* LEFT SIDEBAR */}
            <PersonalSidebar />

            {/* MAIN CONTENT */}
            <div className="flex-1 p-6">
                <Topbar />

                <div className="grid grid-cols-3 gap-6">


                    <div className="col-span-2 space-y-6">
                        <TasksWidget />
                        <ProductivitySuggestion />
                    </div>


                    <div className="space-y-6">
                        <CalendarWidget />
                        <ProductivityStats />
                    </div>

                </div>
            </div>
        </div>
    );
}

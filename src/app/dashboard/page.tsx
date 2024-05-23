import { DashboardContainer } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbard";

export default function DashboardPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <DashboardContainer />

            <Footer />
        </div>
    );
}
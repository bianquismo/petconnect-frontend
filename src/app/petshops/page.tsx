import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PetShopList } from "@/components/Petshop";

export default function PetShopsPage() {
    return (
        <div className="flex flex-col max-h-screen bg-gray-100">
            <Navbar />

            <PetShopList />

            <Footer />
        </div>
    );
}
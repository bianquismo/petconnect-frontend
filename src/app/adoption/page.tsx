import { AdoptionContainer } from "@/components/Adoption";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AdoptionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex-grow flex justify-center items-center">
                <AdoptionContainer />
            </div>
            <Footer />
        </div>
    );
}

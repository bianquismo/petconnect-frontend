import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PetShopList } from "@/components/Petshop";

interface PetShopPageProps {
    petShops: []
}

async function getData() {
    const res = await fetch('http://localhost:8080/pet_shops', {
        cache: 'no-store'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const data = await res.json();

    console.log(data.data);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return data;
}

export default async function PetShopsPage() {
    const data = await getData();

    return (
        <div className="flex flex-col min-h-screen h-screen bg-gray-100">
            <Navbar />

            <PetShopList petShops={data} />

            <Footer />
        </div>
    );
}
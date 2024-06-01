import { BookBathContainer } from "@/components/BookBath";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";


async function getData(id: number) {
    const res = await fetch(`http://localhost:8080/pet_shops/${id}`, {
        cache: 'no-store'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const data = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return data;
}

export default async function BookBathsPage({ params }: { params: { id: number } }) {

    const { id } = params;

    const petShop = await getData(id);

    console.log(petShop);

    console.log(id);

    return (
        <div className="flex flex-col min-h-screen h-screen bg-gray-100">
            <Navbar />

            <BookBathContainer petshopData={petShop} id={id} />

            <Footer />
        </div>
    );
}
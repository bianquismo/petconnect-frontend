import { EditBookingContainer } from "@/components/EditBooking";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";


async function getData(id: number) {
    const res = await fetch(`http://localhost:8080/appointments/${id}`, {
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

export default async function EditBookingPage({ params }: { params: { id: number } }) {

    const { id } = params;

    const data = await getData(id);

    const { pet_shop } = data;

    console.log(data);

    console.log(id);

    return (
        <div className="flex flex-col min-h-screen h-screen bg-gray-100">
            <Navbar />

            <EditBookingContainer petshopData={pet_shop} id={id} />

            <Footer />
        </div>
    );
}
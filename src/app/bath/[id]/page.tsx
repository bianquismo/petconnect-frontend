import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

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

export default async function BathItemPage({ params }: { params: { id: number } }) {
    const { id } = params;

    // Fetch the pet shop data based on the id (In real implementation, you might fetch from an API)
    const petShop = await getData(id);

    if (!petShop) {
        return <div>Pet Shop not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <div className="flex flex-1 flex-col justify-around p-4">
                <div className="flex items-start mb-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                            src='/assets/brand.png'
                            alt={petShop.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex-1 ml-4">
                        <h1 className="text-2xl font-bold text-black">{petShop.name}</h1>
                        <div className="flex mt-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`text-xl ${index < petShop.rating ? 'text-black' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-700">{petShop.address}</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>Horário de Funcionamento:</strong> {petShop.open_hours}</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>Telefone:</strong> {petShop.phone_number}</p>
                </div>

                <div className="mt-auto mb-10 mx-4">
                    <Link href={`/bath/${id}/book`}>
                        <button className="w-full align-center bg-[#BAD36D] text-white py-3 rounded-md text-sm font-bold mt-6">
                            Reservar Hora
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
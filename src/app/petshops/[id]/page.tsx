import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const petShops = [
    {
        imgSrc: '/assets/petshop_listitem_1.png',
        name: 'Pet Shop 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        id: 1,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 4
    },
    {
        imgSrc: '/assets/petshop_listitem_2.png',
        name: 'Pet Shop 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: 2,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 5
    },
    {
        imgSrc: '/assets/petshop_listitem_3.png',
        name: 'Pet Shop 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 3,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_4.png',
        name: 'Pet Shop 4',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 4,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_5.png',
        name: 'Pet Shop 5',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 5,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_6.png',
        name: 'Pet Shop 6',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 6,
        openHours: '08:00 às 18:00',
        phoneNumber: '(11)XXXX-XXXX',
        rating: 3
    },
];

export default function PetShopItemPage({ params }: { params: { id: number } }) {
    const { id } = params;

    // Fetch the pet shop data based on the id (In real implementation, you might fetch from an API)
    const petShop = petShops.find((shop) => shop.id === Number(id));

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
                            src={petShop.imgSrc}
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
                    <p className="text-sm text-gray-700">{petShop.description}</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>Horário de Funcionamento:</strong> {petShop.openHours}</p>
                    <p className="text-sm text-gray-700 mt-2"><strong>Telefone:</strong> {petShop.phoneNumber}</p>
                </div>

                <div className="mt-auto mb-10 mx-4">
                    <button className="w-full align-center bg-[#BAD36D] text-white py-3 rounded-md text-sm font-bold mt-6">
                        Reservar Hora
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
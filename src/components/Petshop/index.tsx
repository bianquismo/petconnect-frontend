import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import { FaStar } from "react-icons/fa";

interface PetShopListProps {
    petShops: []
}

export const PetShopList: FC<PetShopListProps> = ({ petShops }) => {
    console.log(petShops);

    return (
        <div className="flex-1 overflow-y-auto p-2">
            {petShops ? petShops.map((item, index) => (
                <PetShopItem item={item} key={index} />
            )) : <>no results</>}
        </div>
    )
}

interface PetShopItemProps {
    item: {
        name: string;
        address: string;
        rating: number;
        id: number;
    }
}

const PetShopItem: FC<PetShopItemProps> = ({ item }) => {
    const { name, address, rating, id } = item;
    console.log(item);
    
    return (
        <>
            <Link className="flex items-center p-2 bg-zinc-100 shadow-lg rounded-md border-slate-900 mb-4" href={`/petshops/${id}`}>
                <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                        src='/assets/brand.png'
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="flex-1 ml-4 mr-4">
                    <h3 className="text-md font-bold text-black">{name}</h3>
                    <p className="text-xs text-gray-600">{address}</p>
                </div>
                <div className=" relative top-0 right-0 ml-auto">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={`text-xl ${index < (5 - rating) ? 'text-gray-300' : 'text-black'}`}
                        />
                    ))}
                </div>
            </Link>
        </>
    );
};
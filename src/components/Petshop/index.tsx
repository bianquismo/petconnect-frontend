import Image from "next/image";
import Link from "next/link";
import { FC } from "react"
import { FaStar } from "react-icons/fa";

const petShops = [
    {
        imgSrc: '/assets/petshop_listitem_1.png',
        name: 'Pet Shop 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        id: 1,
        rating: 4
    },
    {
        imgSrc: '/assets/petshop_listitem_2.png',
        name: 'Pet Shop 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: 2,
        rating: 5
    },
    {
        imgSrc: '/assets/petshop_listitem_3.png',
        name: 'Pet Shop 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 3,
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_4.png',
        name: 'Pet Shop 4',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 4,
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_5.png',
        name: 'Pet Shop 5',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 5,
        rating: 3
    },
    {
        imgSrc: '/assets/petshop_listitem_6.png',
        name: 'Pet Shop 6',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        id: 6,
        rating: 3
    },
];


export const PetShopList: FC = () => {
    return (
        <div className="flex-1 overflow-y-auto p-2">
            {petShops.map((item, index) => (
                <PetShopItem item={item} key={index} />
            ))}
        </div>
    )
}

interface PetShopItemProps {
    item: {
        imgSrc: string;
        name: string;
        description: string;
        rating: number;
        id: number;
    }
}

const PetShopItem: FC<PetShopItemProps> = ({ item }) => {
    const { imgSrc, name, description, rating, id } = item;
    return (
        <>
            <Link className="flex items-center p-2 bg-zinc-100 shadow-lg rounded-md border-slate-900 mb-4" href={`/petshops/${id}`}>
                <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                        src={imgSrc}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="flex-1 ml-4 mr-4">
                    <h3 className="text-md font-bold text-black">{name}</h3>
                    <p className="text-xs text-gray-600">{description}</p>
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
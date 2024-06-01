
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const DASHBOARDITEMS = [
    {
        label: 'Banho e Tosa',
        imgSrc: '/assets/dashboard_banho.png',
        link: '/bath'
    },
    {
        label: 'Pet Shops',
        imgSrc: '/assets/dashboard_petshops.png',
        link: '/petshops'
    },
    {
        label: 'Veterinario',
        imgSrc: '/assets/dashboard_vet.png',
        link: '/vets',
        disabled: true
    },
    {
        label: 'Adestramento',
        imgSrc: '/assets/dashboard_adestr.png',
        link: '/dog-training',
        disabled: true
    },
    {
        label: 'Cuidados',
        imgSrc: '/assets/dashboard_cuidados.png',
        link: '/animal-care',
        disabled: true
    },
    {
        label: 'Adote um Animal',
        imgSrc: '/assets/dashboard_adocao.png',
        link: '/adoption'
    },
]

export const DashboardContainer: FC = () => {
    return (
        <div className="flex-1 grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4">
            {DASHBOARDITEMS.map((item, index) => (
                <DashboardItem item={item} key={index} />
            ))}
        </div>
    )
}

interface DashboardItemProps {
    item: {
        label: string;
        imgSrc: string;
        link: string;
        disabled?: boolean
    };
}

const DashboardItem: FC<DashboardItemProps> = ({ item }) => {
    return (
        <Link
            href={item.link}
            aria-disabled={item.disabled}
            tabIndex={item.disabled ? -1 : undefined}>
            <div className="flex flex-col items-center justify-center h-40 bg-white shadow-md rounded-md overflow-hidden">
                <div className="relative w-full h-32">
                    <Image
                        src={item.imgSrc}
                        alt={item.label}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                    />
                </div>
                {item.disabled ? (<div className={`w-full bg-gray-400 text-center py-1`}>
                    <span className="text-black">{item.label}</span>
                </div>) : (<div className={`w-full bg-[#E2CC9B] text-center py-1`}>
                    <span className="text-black">{item.label}</span>
                </div>)}

            </div>
        </Link>
    );
}
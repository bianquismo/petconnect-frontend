'use client';

import { FC, useState } from "react";
import Image from "next/image";

export const AdoptionContainer: FC = () => {
    const MOCK_ADOPTION_DATA = [
        {
            name: 'Nina',
            age: 10,
            sex: 'Fêmea',
            spayed: true,
            description: 'Muito energética e amigável com pessoas, mas tem medo de gatos.',
            organization: 'Ong Patas Felizes',
            address: 'Rua das Amoras, 123, Cidade Esperança, Estado dos Sonhos',
            imgSrc: '/assets/nina.jpeg'
        },
        {
            name: 'Dobby',
            age: 1,
            sex: 'Macho',
            spayed: false,
            description: 'Super calmo e perfeito para ser cachorro único de apartamento, contando que receba bastante atenção de seus tutores.',
            organization: 'Ong Amor Peludo',
            address: 'Avenida dos Anjos, 456, Vila Harmonia, Terra Feliz',
            imgSrc: '/assets/dobby.jpeg'
        },
        {
            name: 'Ben',
            age: 1,
            sex: 'Macho',
            spayed: true,
            description: 'Anjinho gracioso que só quer saber de comer e dormir. Faz xixi fora do lugar.',
            organization: 'Ong Lares Quentes',
            address: 'Travessa das Esperanças, 789, Aldeia dos Sorrisos, Vale do Amor',
            imgSrc: '/assets/ben.jpeg'
        },
        {
            name: 'Jorge',
            age: 1,
            sex: 'Macho',
            spayed: true,
            description: 'Filhote que nunca cresceu. Passaria o dia inteiro brincando se pudesse. Ele pode.',
            organization: 'Ong Lares Quentes',
            address: 'Travessa das Esperanças, 789, Aldeia dos Sorrisos, Vale do Amor',
            imgSrc: '/assets/jorge.jpeg'
        },
        {
            name: 'Rosquinho',
            age: 9,
            sex: 'Macho',
            spayed: true,
            description: 'Extremamente gracioso, gosta de rock progressivo nacional.',
            organization: 'Ong Laços de Afeto',
            address: 'Rua das Ternuras, 567, Vilarejo da Solidariedade, Planeta Carinho',
            imgSrc: '/assets/rosquinho.jpeg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % MOCK_ADOPTION_DATA.length);
    };

    return (
        <div className="flex justify-center items-center max-h-screen p-4 bg-gray-100">
            <AdoptionCard item={MOCK_ADOPTION_DATA[currentIndex]} onNext={handleNext} />
        </div>
    );
};

interface AdoptionCardProps {
    item: {
        name: string;
        age: number;
        sex: string;
        spayed: boolean;
        description: string;
        organization: string;
        address: string;
        imgSrc: string;
    };
    onNext: () => void;
}

const AdoptionCard: FC<AdoptionCardProps> = ({ item, onNext }) => {
    const [liked, setLiked] = useState(false);
    const { name, age, sex, spayed, description, organization, address, imgSrc } = item;

    const handleLike = () => setLiked(!liked);

    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform ${liked ? 'max-w-2xl' : 'max-w-sm'}`} style={{ height: '500px' }}>
            <div className="relative w-full h-2/5">
                <Image
                    src={imgSrc}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="p-4 h-2/3">
                {liked ? (
                    <div className="relative">
                        <ul className="list-none text-black text-sm pt-10">
                            <li className="font-bold text-xl">{name}, {age}</li>
                            <li>{age > 1 ? (`${age} anos;`) : (`${age} ano;`)}</li>
                            <li>{sex + ';'}</li>
                            {spayed ? (<li>Castrado;</li>) : null}
                            <li>{description + ';'}</li>
                            <li>{organization + ';'}</li>
                        </ul>
                        <p className="mt-4 text-black text-sm">{address}</p>
                        <div className="absolute top-0 right-0 flex flex-col justify-around items-center mt-2">
                                <button onClick={handleLike}>
                                    <Image src="/assets/next-button.png" alt="Next" width={150} height={150} className="w-full h-auto" />
                                </button>
                                <span className="text-blue-500">Voltar</span>
                            </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col"><h3 className="text-lg font-bold text-black">{name}, {age}</h3>
                            <p className="text-black flex-shrink text-md">{description}</p>
                        </div>

                        <div className="mt-4 flex justify-around items-center">
                            <div className="flex flex-col justify-around items-center mt-2">
                                <button onClick={onNext}>
                                    <Image src="/assets/next-button.png" alt="Next" width={200} height={200} className="w-full h-auto" />
                                </button>
                                <span className="text-blue-500">Próximo</span>
                            </div>
                            <div className="flex flex-col justify-around items-center mt-2">
                                <button onClick={handleLike} className="flex-grow max-w-full">
                                    <Image src="/assets/like-button.png" alt="Like" width={200} height={200} className="w-full h-auto" />
                                </button>
                                <span className="text-green-500">Adotar</span>
                            </div>


                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

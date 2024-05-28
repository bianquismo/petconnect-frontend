"use client";

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
    name: string,
    address: string,
    phoneNumber: string,
    openHours: string,
    rating: number,
};

export default function SignupPetShopPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const formData = new FormData();
        formData.append('pet_shop[name]', data.name);
        formData.append('pet_shop[address]', data.address);
        formData.append('pet_shop[phone_number]', data.phoneNumber);
        formData.append('pet_shop[open_hours]', data.openHours);
        formData.append('pet_shop[rating]', data.rating.toString());

        const response = await postData(formData);

        router.push(`/petshops/${response.id}`)
    };

    async function postData(formData: FormData) {
        const response = await fetch('http://localhost:8080/pet_shops', {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        return result;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className={`text-center text-[#BAD36D] font-light text-2xl mb-8`}>
                    CADASTRO DE PET SHOP
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <Input label='Nome' htmlFor="name" type="text" name="name"
                        id="name" placeholder="Petz - Seu Campeão" register={register}
                        required />
                    <Input label='Endereço' htmlFor="address" type="text" name="address"
                        id="address" placeholder="Av Vicente Rao, 1700, CEP.: 04662-003" register={register}
                        required />
                    <Input label='Telefone' htmlFor="phoneNumber" type="text" name="phoneNumber"
                        id="phoneNumber"
                        register={register} placeholder="(11) 91234-5678"
                        required />
                    <Input label='Horário de Funcionamento' htmlFor="openHours" type="text" name="openHours"
                        id="openHours"
                        register={register} placeholder="08:00 às 19:00"
                        required />
                    <Input className='px-0' label='Nota' htmlFor="rating" type="range" min={1} max={5} name="rating"
                        id="rating" register={register}
                        required />
                    <Button type="submit">cadastrar</Button>
                </form>
                <div className="flex flex-col items-center mt-4">
                    <Link href="/" className="text-sm font-light text-[#BAD36D] mx-2">início</Link>
                </div>
            </div>
        </div>
    );
}

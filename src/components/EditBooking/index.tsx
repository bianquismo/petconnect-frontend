'use client';

import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

interface EditBookingContainerProps {
    petshopData: {
        id: number,
        name: string,
        address: string

    },
    id: number
}

export type Inputs = {
    name: string,
    address: string,
    booking_time: string,
};

export const EditBookingContainer: FC<EditBookingContainerProps> = ({ petshopData, id }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const router = useRouter();


    const onSubmit: SubmitHandler<Inputs> = async data => {
        const formData = new FormData();
        formData.append('pet_shop[id]', String(petshopData.id));
        formData.append('pet_shop[user_id]', String(5));
        formData.append('appointment[time]', data.booking_time);
        formData.append('appointment[user_id]', String(5));

        const response = await patchData(formData, id);
        console.log(response);

        router.push('/appointments');

    };

    async function patchData(formData: FormData, id: number) {
        const response = await fetch(`http://localhost:8080/edit-booking/${id}`, {
            method: "PATCH",
            body: formData,
        });

        const result = await response.json();
        return result;
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className={`text-center text-[#BAD36D] font-light text-2xl mb-8`}>
                    EDITAR AGENDAMENTO
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <Input label='Pet Shop' htmlFor="name" type="name" name="name" defaultValue={petshopData?.name}
                        id="name" placeholder="Petz - Seu Campeão" register={register}
                        disabled />
                    <Input label='Endereço' htmlFor="address" type="address" name="address" defaultValue={petshopData?.address}
                        id="address" placeholder="Av Vicente Rao, 1700, CEP: 04662-003" register={register}
                        disabled />
                    <Input label='Data e Hora' htmlFor="booking_time" type="datetime-local" name="booking_time"
                        id="booking_time"
                        register={register} placeholder="29/03/2024 14:30"
                        required />
                    <Button className="mt-10" type="submit">Salvar</Button>
                </form>
            </div>
        </div>
    )
}
"use client";

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";

export type Inputs = {
    email: string,
    password: string,
    phoneNumber: string,
};

export default function SignupUserPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const router = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const formData = new FormData();
        formData.append('user[email]', data.email);
        formData.append('user[password_digest]', data.password);
        formData.append('user[phone_number]', data.phoneNumber);

        const response = await postData(formData);
        console.log(response);

        if (response.id) {
            router.push('/dashboard')
        }
    };

    async function postData(formData: FormData) {
        const response = await fetch('http://localhost:8080/signup/user', {
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
                    CADASTRO DE USUÁRIO
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <Input label='E-mail' htmlFor="email" type="email" name="email"
                        id="email" placeholder="jorge@gmail.com" register={register}
                        required />
                    <Input label='Senha' htmlFor="password" type="password" name="password"
                        id="password" placeholder="*******" register={register}
                        required />
                    <Input label='Telefone' htmlFor="phoneNumber" type="text" name="phoneNumber"
                        id="phoneNumber"
                        register={register} placeholder="(11) 91234-5678"
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

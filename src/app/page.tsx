"use client";

import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from '../components/Input';
import { Button } from '../components/Button';

export interface LoginForm {
  email: string;
  password: string;
}

export default function HomePage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginForm>();

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginForm> = data => {
    console.log(data)
    router.push('/dashboard');
  };

  const primaryGreen = "#BAD36D"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/assets/brand.png" alt="Brand Logo" width={100} height={100} />
        </div>
        <h1 className={`text-center text-[${primaryGreen}] font-light text-2xl mb-8`}>
          LOGIN
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input label='E-mail' htmlFor="email" type="email"
            id="email"
            name="email" placeholder="Enter your email" register={register}
            required />
          <Input label='Password' htmlFor="password" type="password"
            id="password"
            name="password" placeholder="Enter your password" register={register}
            required />
          <Button
            type="submit"
          >
            entrar
          </Button>
        </form>
        <div className="flex flex-col items-center mt-4">
          <Link href="#" className="text-sm font-light text-[#BAD36D] mx-2">recuperar senha</Link>
          <Link href="/signup" className="text-sm font-light text-[#BAD36D] mx-2">criar conta</Link>
        </div>
      </div>
    </div>
  );
}

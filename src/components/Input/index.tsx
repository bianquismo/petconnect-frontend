import { Inputs } from '@/app/signup/pet-shop/page';
import React, { FC, InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    htmlFor?: string;
    register: UseFormRegister<Inputs>;
    name: keyof Inputs;
}

export const Input: FC<InputProps> =
    ({ label, htmlFor, register, name, ...props }) => {
        const primaryGreen = "#BAD36D"

        return (
            <div>
                <label htmlFor={htmlFor} className="block text-sm font-semibold text-[#353535] py-3">
                    {label}
                </label>
                <input
                    {...register(name)}
                    {...props}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:${primaryGreen} focus:${primaryGreen} text-lg placeholder-[#BFBFBF] border-[${primaryGreen}] text-[#949494]`}
                    placeholder="Enter your email"
                    required
                />
            </div>
        )
    }

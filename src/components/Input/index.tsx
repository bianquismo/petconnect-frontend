import { LoginForm } from '@/app/page';
import { Inputs } from '@/app/signup/pet-shop/page';
import React, { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface FormProps<T> {
    [key: string]: any;
}

interface InputProps<T extends FormProps<T>> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
    label?: string;
    htmlFor?: string;
    register: UseFormRegister<T>;
    name: keyof T;
    className?: string;
}

export const Input: FC<InputProps<any>> =
    ({ label, htmlFor, register, name, className, ...props }) => {
        const primaryGreen = "#BAD36D"

        return (
            <div>
                <label htmlFor={htmlFor} className="block text-sm font-semibold text-[#353535] py-3">
                    {label}
                </label>
                <input
                    {...register(String(name))}
                    {...props}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:${primaryGreen} focus:${primaryGreen} text-lg placeholder-[#BFBFBF] border-[${primaryGreen}] text-[#949494] ${className}`}
                    placeholder={props.placeholder}
                    required
                />
            </div>
        )
    }

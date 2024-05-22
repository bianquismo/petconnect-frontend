import React, { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    htmlFor?: string
}

export const Input: FC<InputProps> =
    ({ label, htmlFor, ...props }) => {
        const primaryGreen = "#BAD36D"

        return (
            <div>
                <label htmlFor={htmlFor} className="block text-sm font-semibold text-[#353535] py-3">
                    {label}
                </label>
                <input {...props}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:${primaryGreen} focus:${primaryGreen} text-lg placeholder-[#BFBFBF] border-[${primaryGreen}] text-[#949494]`}
                    placeholder="Enter your email"
                    required
                />
            </div>
        )
    }

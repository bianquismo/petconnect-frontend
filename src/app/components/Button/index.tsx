import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button: FC<ButtonProps> =
    ({ children, ...props }) => {
        const primaryGreen = "#BAD36D";

        return (
            <div>
                <button {...props} className={`w-full bg-[${primaryGreen}] text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:${primaryGreen}`}>{children}</button>
            </div>
        )
    }

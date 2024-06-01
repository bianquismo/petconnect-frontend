import React, { FC, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

export const Button: FC<ButtonProps> =
    ({ children, className, ...props }) => {
        return (
            <div>
                <button {...props} className={`w-full bg-[#BAD36D] text-black font-bold py-2 px-4 rounded-md focus:outline-none ${className}`}>{children}</button>
            </div>
        )
    }

import { FC } from "react";
import { FaBars, FaBell } from "react-icons/fa";

export const Navbar: FC = () => {
    return (
        <nav className="flex items-center justify-between w-full h-18 bg-[#BAD36D] p-4">
            <FaBars className="text-2xl text-black" />
            <FaBell className="text-2xl text-black" />
        </nav>
    )
}

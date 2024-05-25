import Link from "next/link";
import { FC } from "react";
import { FaSearch, FaCalendarAlt, FaPaw, FaHome } from "react-icons/fa";

export const Footer: FC = () => {
    return (
        <footer className="flex justify-around items-center w-full h-18 bg-[#BAD36D] p-4">
            <FaSearch className="text-2xl text-black" />
            <FaCalendarAlt className="text-2xl text-black" />
            <FaPaw className="text-2xl text-black" />
            <Link href="/dashboard">
                <FaHome className="text-2xl text-black" />
            </Link>
        </footer>
    )
}

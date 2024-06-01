import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface AppointmentListProps {
    appointmentData: AppointmentListItem[];
    refreshData: () => void;
}

export const AppointmentList: FC<AppointmentListProps> = ({ appointmentData, refreshData }) => {

    console.log(appointmentData);

    async function deleteData(id: number) {
        await fetch(`http://localhost:8080/delete-booking/${id}`, {
            method: "DELETE"
        });
        refreshData(); // Re-fetch the data after deletion
    }

    const handleDelete = (id: number) => {
        deleteData(id);
    }

    return (
        <div className="flex-1 flex-col overflow-y-auto max-h-screen">
            {appointmentData.map((item: AppointmentListItem) => (
                <AppointmentListItem key={item.id} item={item} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export interface AppointmentListItem {
    id: number;
    time: Date;
    pet_shop: {
        name: string;
        address: string;
        id: string;
    };
}

interface AppointmentListItemProps {
    item: AppointmentListItem;
    onDelete: (id: number) => void;
}

const AppointmentListItem: FC<AppointmentListItemProps> = ({ item, onDelete }) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/appointments/${item.id}/edit-booking`);
    };

    return (
        <div className="flex flex-col items-center p-2 bg-zinc-100 shadow-lg rounded-md border-slate-900 mb-4">
            <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                    src='/assets/brand.png'
                    alt={item.pet_shop.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>
            <div className="flex-1 ml-2 mr-2">
                <h3 className="text-md font-bold text-black">{item.pet_shop.name}</h3>
                <p className="text-xs text-gray-600">{item.pet_shop.address}</p>
                <p className="text-md text-gray-600 font-bold">
                    {new Date(item.time).toLocaleString('pt-BR', {
                        timeZone: 'utc',
                        hour: '2-digit',
                        minute: '2-digit',
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    })}
                </p>

            </div>
            <div className="ml-auto">
                <button onClick={handleEdit} className="bg-blue-500 text-white px-2 py-2 rounded mr-2"><FaEdit

                    className={`text-xl text-black`}
                /></button>
                <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white px-2 py-2 rounded"><FaTrashAlt

                    className={`text-xl text-black`}
                /></button>
            </div>
        </div>
    );
};

export default AppointmentListItem;

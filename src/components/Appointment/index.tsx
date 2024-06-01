import { useRouter } from "next/navigation";
import { FC } from "react";

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
        <div className="flex-1 grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 md:grid-cols-4">
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
    };
}

interface AppointmentListItemProps {
    item: AppointmentListItem;
    onDelete: (id: number) => void;
}

const AppointmentListItem: FC<AppointmentListItemProps> = ({ item, onDelete }) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/edit-booking/${item.id}`);
    };

    return (
        <div className="flex items-center p-2 bg-zinc-100 shadow-lg rounded-md border-slate-900 mb-4">
            <div className="flex-1 ml-4 mr-4">
                <h3 className="text-md font-bold text-black">{item.pet_shop.name}</h3>
                <p className="text-xs text-gray-600">{new Date(item.time).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
                <p className="text-xs text-gray-600">{item.pet_shop.address}</p>
            </div>
            <div className="ml-auto">
                <button onClick={handleEdit} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
        </div>
    );
};

export default AppointmentListItem;

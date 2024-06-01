'use client';

import { useEffect, useState } from "react";
import { AppointmentList, AppointmentListItem } from "@/components/Appointment";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

async function fetchData(userId: number) {
    const res = await fetch(`http://localhost:8080/appointments?user_id=${userId}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

export default function AppointmentPage() {
    const [appointments, setAppointments] = useState<AppointmentListItem[]>([]);
    const userId = 3; // Assume the user ID is 3

    const loadAppointments = async () => {
        try {
            const data = await fetchData(userId);
            setAppointments(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadAppointments();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <AppointmentList appointmentData={appointments} refreshData={loadAppointments} />
            <Footer />
        </div>
    );
}

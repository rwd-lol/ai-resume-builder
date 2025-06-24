"use client";

import { useEffect, useState } from "react";

export default function ActiveUsers() {
    const [total, setTotal] = useState<number | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("/api/active");
                const data = await res.json();
                setTotal(data.total);
            } catch (error) {
                console.error("Failed to fetch active users:", error);
            }
        };

        fetchUsers();

        const interval = setInterval(fetchUsers, 10000);

        return () => clearInterval(interval);
    }, []);

    return total !== null && total;
}

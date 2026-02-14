"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export function UserSync() {
    const { isSignedIn } = useAuth();

    useEffect(() => {
        if (isSignedIn) {
            // Call the sync endpoint silently
            fetch("/api/sync").catch((err) => console.error("Sync error:", err));
        }
    }, [isSignedIn]);

    return null;
}

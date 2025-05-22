import type { Route } from "./+types/rates";
import  Sidebar from 'app/components/sidebar.tsx';
import React from "react";


type User = {
    name: string;
    pass: string;
};

export function loader() {
    return { name: "Rfsdafsdfads",
        avatar: 'app/img/avatar.png',
        countVisits: 1
    };
}

export default function Rates({ loaderData }: Route.ComponentProps) {
    return (
        <div>
            <Sidebar AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits}/>
        </div>
    );
}

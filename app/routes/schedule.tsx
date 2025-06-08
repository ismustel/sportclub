import type { Route } from "./+types/schedule";
import React from 'react';
import  Sidebar from 'app/components/sidebar';
import  Header from 'app/components/header';
import Footer from 'app/components/footer';
import ScheduleTable from 'app/components/scheduleTable'


export function loader() {
    return { name: "React Router" ,
        avatar: 'app/img/avatar.png',
        countVisits: 1};
}

export default function Home({ loaderData }: Route.ComponentProps) {
    return (
        <div className="layout">
            <Sidebar AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits} className={'sidebar'}/>
            <Header className="header"/>
            <main className="content">
                <ScheduleTable/>
            </main>
            <Footer className="footer"/>
        </div>
    );
};
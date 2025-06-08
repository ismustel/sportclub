import type { Route } from "./+types/rates";
import  Sidebar from 'app/components/sidebar';
import  Header from 'app/components/header';
import Footer from 'app/components/footer';
import ContentRates from "~/components/contentRates";
import React from "react";
import type {EmblaOptionsType} from "embla-carousel";
import 'app/emblaRates.css'


export function loader() {
    return { name: "Rfsdafsdfads",
        avatar: 'app/img/avatar.png',
        countVisits: 1
    };
}

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }

export default function Rates({ loaderData }: Route.ComponentProps) {
    return (
        <div className="layout">
            <Sidebar className="sidebar" AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits}/>
            <Header className="header" />
            <main className="content">

                <ContentRates options={OPTIONS}/>
            </main>
            <Footer className="footer"/>

        </div>
    );
}

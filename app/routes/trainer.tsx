import type { Route } from './+types/trainer';
import  Sidebar from '~/components/sidebar';
import  Header from '~/components/header';
import Footer from '~/components/footer';
import ContentRates from "~/components/contentRates";
import React from "react";
import type {EmblaOptionsType} from "embla-carousel";
import 'app/emblaTrainer.css'


export function loader() {
    return { name: "Rfsdafsdfads",
        avatar: 'app/img/avatar.png',
        countVisits: 1
    };
}

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }

export default function Trainer({ loaderData }: Route.ComponentProps) {
    return (
        <div className="layout">

            <Sidebar className="sidebar" AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits}/>
            <Header className="header" />
            <main className="content">
                <div className="container-trainer">
                    <div className="pages-trainer">
                        <ContentRates options={OPTIONS}/>
                    </div>
                </div>
            </main>
            <Footer className="footer" />

        </div>
    );
}

import type { Route } from "./+types/home";
import React from 'react';
import  Sidebar from 'app/components/sidebar';
import  Header from 'app/components/header';
import Footer from 'app/components/footer';
import 'app/app.css'

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
                <img  src='app/img/home_pages_1920x1080.jpg' alt={'SPACE'} style={{width: '100%', height: 'auto'}} />
                <div className="hero-text">
                    <h1>Тренируйся у нас с удовольствием</h1>
                </div>
            </main>
            <Footer className="footer"/>
        </div>
  );
};



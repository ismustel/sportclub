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
        <div>
            <div>
                <Sidebar AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits}/>
            </div>
            <div>
                <Header />
            </div>
            <div>
                <img  src='app/img/home_pages_1920x1080.jpg' alt={'SPACE'}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
  );
};



import type { Route } from "./+types/about";
import  Sidebar from 'app/components/sidebar';
import  Header from 'app/components/header';
import Footer from 'app/components/footer';
import InfoBlock from "app/components/infoBlock";
import React from "react";


export function loader() {
    return { name: "React Router" ,
        avatar: 'app/img/avatar.png',
        countVisits: 1};
}

export default function About({ loaderData }: Route.ComponentProps) {
    return (
        <div className="layout">
            <Sidebar AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits} className={"sidebar"}/>
            <Header className="header" />
            <div className="content">
                <div className="left-column">

                    <div className="image-container">
                        <img src="app/img/about_pages_1920x1080.jpg" alt="Мужчина поднимает штангу" className="main-image" />
                    </div>


                    <div className="text-container">
                        <h2>Добро пожаловать в наш спортивный клуб!</h2>
                        <p>
                            Мы объединяем людей, стремящихся к здоровому образу жизни, силе и выносливости.
                            У нас вы найдёте профессиональное оборудование, комфортные условия и поддержку на каждом этапе тренировок — будь вы новичком или опытным атлетом.
                        </p>
                    </div>
                </div>


                <div className="right-column">

                    <InfoBlock

                        title= "🏋️‍♂️Профессиональное оборудование"
                        description="Наш зал оснащён современными тренажёрами и свободными весами для тренировок любого уровня сложности."
                    />

                    <InfoBlock

                        title="💪Опытные тренеры"
                        description="Команда сертифицированных тренеров поможет вам достичь максимальных результатов безопасно и эффективно."
                    />

                    <InfoBlock

                        title="📅Гибкий график тренировок"
                        description="Работаем ежедневно с раннего утра до позднего вечера — подберите удобное время для занятий."
                    />

                    <InfoBlock

                        title="🔥Мотивационная атмосфера"
                        description="Поддержка, драйв и единомышленники — всё это поможет вам не сдаваться и двигаться вперёд!"
                    />

                </div>
            </div>
            <Footer className={'rooter'} />
        </div>
    )
}





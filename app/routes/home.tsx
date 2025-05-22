import type { Route } from "./+types/home";
import React from 'react';
import  Sidebar from 'app/components.tsx';
import 'app/app.css'

export function loader() {
  return { name: "React Router" ,
  avatar: 'app/img/avatar.png',
  countVisits: 1,};
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="text-center p-4">
        <div>
            <Sidebar AvatarUrl={loaderData.avatar} countVisits={loaderData.countVisits} />
        </div>
      <h1 className="text-2xl">Hello, {loaderData.name}</h1>
      <a
        className="block mt-2 text-blue-500 underline hover:text-blue-600"
        href="https://reactrouter.com/docs"
      >
        Reacdsadadadasdasdasdasd
      </a>
    </div>
  );
};



import type { Route } from "./+types/rates";

type User = {
    name: string;
    pass: string;
};

export function loader() {
    return { name: "Rfsdafsdfads",
        users : [
        {name:"ilya", pass:"123"},
        {name:"lya", pass:"1234"},
    ]};
}

export default function Rates({ loaderData }: Route.ComponentProps) {
    const users = loaderData.users as User[];
    return (

        <div className="text-center p-4">
            <h1 className="text-2xl">Привет, {loaderData.name}</h1>
            <a
                className="block mt-2 text-blue-500 underline hover:text-blue-600"
                href="https://reactrouter.com/docs"
            >

            </a>
            {users.map((user ): any => (
                <div>
                    Имя: {user.name}, password: {user.pass}
                </div>
            ))}
        </div>
    );
}

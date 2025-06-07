import { NavLink } from "react-router";


function Header({ className } :{ className: string }){
    return (
        <div className={className}>
            <div className="logo">
                <h1>ТРЕНИРОВОЧКА</h1>
            </div>
            <nav className="menu">
                <NavLink className="nav-link" to="/">Главная</NavLink>
                <NavLink className="nav-link" to="/about">О нас</NavLink>
                <NavLink className="nav-link" to="/rates">Тарифы</NavLink>
                <NavLink className="nav-link" to="/trainer">Тренера</NavLink>
                <NavLink className="nav-link" to="/schedule">Расписание</NavLink>
            </nav>
        </div>
    )
}

export default Header;
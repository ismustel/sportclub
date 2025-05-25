import { NavLink } from "react-router";

function Header({ className } :{ className: string }){
    return (
        <div className={className}>
            <div className="logo">
                <h1>ТРЕНИРОВОЧКА</h1>
            </div>
            <nav className="nav">
                <NavLink className="nav-link" to="/">Главная</NavLink>
                <NavLink className="nav-link" to="/about">О нас</NavLink>
                <NavLink className="nav-link" to="/rates">Тарифы</NavLink>
                <NavLink className="nav-link" to="/">Тренера</NavLink>
                <NavLink className="nav-link" to="/">Расписание</NavLink>
            </nav>
        </div>
    )
}

export default Header;
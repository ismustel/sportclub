import {IoPlay, IoTriangle} from "react-icons/io5";
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp} from "react-icons/io";
import React, {useState} from "react";


function Sidebar({AvatarUrl,countVisits}: {AvatarUrl:string,countVisits:number}) {
    const[stateVisibalSideBar, setStateVisibalSideBar] = useState(false);

    const toggleVisibalSideBar = () => {
        setStateVisibalSideBar(!stateVisibalSideBar);
    }

    return (
        <div >
            {!stateVisibalSideBar ? <div className="sidebar">
                <div className="controls">
                    <button className="arrow-button" onClick={toggleVisibalSideBar}>
                        <div>
                            <IoIosArrowBack size={50} style={{marginRight: "5px"}}/>
                        </div>
                    </button>
                    <hr className="separator"/>
                </div>
                <div className="avatar-container">
                    <div className="avatar_no_visible">
                        <img src={AvatarUrl} alt="Avatar"/>
                    </div>
                    <div className="number">{countVisits}</div>
                </div>
            </div> : <div className="container">
                <div className="header">
                    <button className="arrow-button" onClick={toggleVisibalSideBar}>
                        <div>
                            <IoIosArrowForward size={50} style={{marginLeft: "5px"}}/>
                        </div>
                    </button>
                </div>
                <div className="profile">
                    <div className="avatar"></div>
                    <div className="info">
                        <p className="visits">Посещений: 23</p>
                        <h2 className="name">Василий Петров</h2>
                    </div>
                </div>
                <form className="form">
                    <label htmlFor="phone">Телефон</label>
                    <input type="text" id="phone" placeholder="Введите телефон"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Введите email"/>

                    <label htmlFor="subscription">Абонемент</label>
                    <input type="text" id="subscription" placeholder="Введите абонемент"/>
                </form>
                <button className="edit-button">Редактировать</button>
            </div>}

        </div>


    );
}


export default Sidebar;


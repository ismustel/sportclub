import {IoPlay, IoTriangle} from "react-icons/io5";
import {IoIosArrowBack} from "react-icons/io";



function Sidebar({AvatarUrl,countVisits}: {AvatarUrl:string,countVisits:number}) {
    return (
        <div className="sidebar">
            <div className="controls">
                <button className="arrow-button">
                    <div>
                        <IoIosArrowBack size={50} style={ {marginRight: "5px" }} />
                    </div>
                </button>
                <hr className="separator"/>
            </div>
            <div className="avatar-container">
                <div className="avatar">
                    <img src={AvatarUrl} alt="Avatar" />
                </div>
                <div className="number">{countVisits}</div>
            </div>
        </div>
    );
}


export default Sidebar;


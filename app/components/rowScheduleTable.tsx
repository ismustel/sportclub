import React from "react";


function ScheduleTableRow({timeStart, timeEnd, Seats} : {timeStart: string, timeEnd: string, Seats: number}) {
    return (
        <div className="table-cell">
            <div>
                <div className="time">{timeStart}-{timeEnd} </div>
                <div className="seats">{Seats}</div>
            </div>
            <button className="plus-button">+</button>
        </div>
    )
}

export default ScheduleTableRow;
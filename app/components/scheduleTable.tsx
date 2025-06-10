import React, {useState, useEffect} from 'react';
import ScheduleTableRow from "~/components/rowScheduleTable";


type Row = {
    id: number,
    name : string,
    days: Cell[]
}

type Cell ={
    day: number,
    timeStart: string,
    timeEnd: string,
    available: number,
}
function ScheduleTable(){

    const [scheduleData, setScheduleData] = useState<Row[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/schedule')
            .then((res) => res.json())
            .then((data) => {
                setScheduleData(data);
                setLoading(false);
                console.log(data);
            })
            .catch((err) => {
                console.error("Ошибка загрузки:", err);
                setLoading(false);
            });
    }, []);



    return (
        <div className="schedule-container">
            <div className="header-table">
                <h2>Расписание групповых занятий</h2>
            </div>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th className="main-table-block"></th>
                    <th className="not-border-top">Пн</th>
                    <th className="not-border-top">Вт</th>
                    <th className="not-border-top">Ср</th>
                    <th className="not-border-top">Чт</th>
                    <th className="not-border-top">Пт</th>
                    <th className="not-border-top">Сб</th>
                    <th className="not-border-top">Вс</th>
                </tr>
                </thead>
                <tbody>
                {scheduleData.map((row, index) => (
                    <tr key={index}>
                        <td className="td-white-block">{row.name}</td>
                        {new Array(7).fill(0).map((_, index) => (
                            <td className="td-beige-block">
                                {row.days.map((cell) => (
                                    cell.day === (index + 1) ? (
                                        <ScheduleTableRow timeStart={cell.timeStart} timeEnd={cell.timeEnd} Seats={cell.available} />
                                        ) : null
                                ))}
                            </td>
                        ))}

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;
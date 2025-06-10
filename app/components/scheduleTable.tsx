import React, {useState} from 'react';
import ScheduleTableRow from "~/components/rowScheduleTable";


function ScheduleTable(){
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

    const [scheduleData, setScheduleData] = useState<Row[]>([
        {
            id: 1,
            name: 'Фитнес',
            days: [
                {
                    day: 1,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 1,
                },
                {
                    day: 2,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 2,
                },
                {
                    day: 3,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 3,
                },
                {
                    day: 6,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 3,
                }
            ]
        },
        {
            id: 2,
            name: 'Растяжка',
            days: [
                {
                    day: 2,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 7,
                },
                {
                    day: 4,
                    timeStart: '00:00',
                    timeEnd: '00:00',
                    available: 9,
                },

            ]

        }
    ]);

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
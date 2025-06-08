import React from 'react';

function ScheduleTable(){
    return (
        <div className="schedule-container">
            <h2>Расписание групповых занятий</h2>
            <table className="schedule-table">
                <thead>
                <tr>
                    <th></th>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th>Сб</th>
                    <th>Вс</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Растяжка</td>
                    <td></td>
                    <td>
                        <span>09:00-10:00</span><br />
                        <span>8 мест</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td>
                        <span>09:00-10:00</span><br />
                        <span>8 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-12:00</span><br />
                        <span>2 места</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>09:00-10:00</span><br />
                        <span>8 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-12:00</span><br />
                        <span>2 места</span><br />
                        <span>+</span>
                    </td>
                </tr>
                <tr>
                    <td>Кардио</td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>15:00-17:00</span><br />
                        <span>20 мест</span><br />
                        <span>+</span>
                    </td>
                </tr>
                <tr>
                    <td>Йога</td>
                    <td>
                        <span>19:00-21:00</span><br />
                        <span>3 места</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>19:00-21:00</span><br />
                        <span>3 места</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td>
                        <span>19:00-21:00</span><br />
                        <span>3 места</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>19:00-21:00</span><br />
                        <span>3 места</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td>
                        <span>11:00-14:00</span><br />
                        <span>10 мест</span><br />
                        <span>+</span>
                    </td>
                </tr>
                <tr>
                    <td>Кроссфит</td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                </tr>
                <tr>
                    <td>Бокс</td>
                    <td></td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td>
                        <span>10:00-14:00</span><br />
                        <span>1 место</span><br />
                        <span>+</span>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
import React from 'react';

function ScheduleTable(){
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
                {/* Строка "Растяжка" */}
                <tr>
                    <td className="td-white-block">Фитнес</td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="td-white-block">Растяжка</td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-12:00</div>
                                <div className="seats">2 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-12:00</div>
                                <div className="seats">2 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                </tr>

                {/* Строка "Кардио" */}
                <tr>
                    <td className="td-white-block">Кардио</td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                </tr>

                {/* Строка "Йога" */}
                <tr>
                    <td className="td-white-block">Йога</td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">11:00-14:00</div>
                                <div className="seats">10 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                </tr>

                {/* Строка "Кроссфит" */}
                <tr>
                    <td className="td-white-block">Кроссфит</td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                </tr>

                {/* Строка "Бокс" */}
                <tr>
                    <td className="td-white-block">Бокс</td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block">
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td className="td-beige-block"></td>
                    <td className="td-beige-block"></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;
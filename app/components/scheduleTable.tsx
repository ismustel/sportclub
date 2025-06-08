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
                {/* Строка "Растяжка" */}
                <tr>
                    <td>Фитнес</td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
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
                    <td>Растяжка</td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-12:00</div>
                                <div className="seats">2 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">09:00-10:00</div>
                                <div className="seats">8 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
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
                    <td>Кардио</td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">15:00-17:00</div>
                                <div className="seats">20 мест</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
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
                    <td>Йога</td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">19:00-21:00</div>
                                <div className="seats">3 места</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
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
                    <td>Кроссфит</td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
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
                    <td>Бокс</td>
                    <td></td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td>
                        <div className="table-cell">
                            <div>
                                <div className="time">10:00-14:00</div>
                                <div className="seats">1 место</div>
                            </div>
                            <button className="plus-button">+</button>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ScheduleTable;
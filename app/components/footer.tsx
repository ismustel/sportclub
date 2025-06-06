import React from 'react';

function Footer({ className } :{ className: string }) {
    return (
        <div className="{className}">
            <div className="footer-content">
                <div className="left-section">
                    <span className="location-icon">📍</span>
                    <span className="text-footer">ул. Спортивная, 10, Барнаул</span>
                    <span className="separator-footer">|</span>
                    <span className="clock-icon">⏰</span>
                    <div style={{"width": "20%"}}>
                        <span className="text-footer weekday">Пн-Пт: 07:00–23:00</span>

                        <span className="text-footer weekend">Сб–Вс: 09:00–21:00</span>
                    </div>
                    <span className="separator-footer">|</span>
                    <a href="https://vk.com " target="_blank" rel="noopener noreferrer" className="text-footer">
                        <span className="link-icon ">🔗</span>
                        VK
                    </a>
                    <span className="separator-footer" >|</span>
                    <a href="https://telegram.me " target="_blank" rel="noopener noreferrer" className="text-footer">
                        Telegram
                    </a>
                    <span className="separator-footer" >|</span>
                    <a href="https://youtube.com " target="_blank" rel="noopener noreferrer" className="text-footer">
                        YouTube
                    </a>
                </div>
                <div className="right-section">
                    <span className="text-footer" >2025 г.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
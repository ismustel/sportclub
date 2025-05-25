import React from 'react';

function Footer({ className } :{ className: string }) {
    return (
        <div className="{className}">
            <div className="footer-content">
                <div className="left-section">
                    <span className="location-icon">📍</span>
                    <span>ул. Спортивная, 10, Барнаул</span>
                    <span className="separator-footer">|</span>
                    <span className="clock-icon">⏰</span>
                    <span>Пн-Пт: 07:00–23:00, Сб–Вс: 09:00–21:00</span>
                    <span className="separator-footer">|</span>
                    <a href="https://vk.com " target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">🔗</span>
                        VK
                    </a>
                    <span>|</span>
                    <a href="https://telegram.me " target="_blank" rel="noopener noreferrer">
                        Telegram
                    </a>
                    <span>|</span>
                    <a href="https://youtube.com " target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                </div>
                <div className="right-section">
                    <span>2025 г.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
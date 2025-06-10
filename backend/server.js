const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Разрешаем запросы с любого источника (простой CORS)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    // Проверяем URL
    if (req.url === "/api/schedule") {
        const filePath = path.join(__dirname, "data", "schedule.json");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: "Ошибка чтения файла" }));
                return;
            }

            res.statusCode = 200;
            res.end(data);
        });
    } else if (req.url === "/api/trainer") {
        const filePath = path.join(__dirname, "data", "trainer.json");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: "Ошибка чтения файла" }));
                return;
            }

            res.statusCode = 200;
            res.end(data);
        });
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Маршрут не найден" }));
    }
});

server.listen(PORT, () => {
    console.log(`✅ Сервер запущен на http://localhost:${PORT}`);
});
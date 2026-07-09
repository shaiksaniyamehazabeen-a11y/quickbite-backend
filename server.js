import http from "http";

const PORT = 3000;

// Store the time when the server starts
const startTime = Date.now();

const server = http.createServer((req, res) => {

    // Set response type as JSON
    res.setHeader("Content-Type", "application/json");

    // 200 OK - Home page loaded successfully
    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Welcome to QuickBite API"
        }));

    }
    // 200 OK - Menu data fetched successfully
    else if (req.method === "GET" && req.url === "/menu") {

        res.writeHead(200);

        res.end(JSON.stringify({
            menu: ["Burger", "Pizza", "Pasta"]
        }));

    }
    // 200 OK - Orders fetched successfully
    else if (req.method === "GET" && req.url === "/orders") {

        res.writeHead(200);

        res.end(JSON.stringify({
            orders: []
        }));

    }
    // 200 OK - Server status returned successfully
    else if (req.method === "GET" && req.url === "/status") {

        const uptime = Math.floor((Date.now() - startTime) / 1000);

        res.writeHead(200);

        res.end(JSON.stringify({
            server: "running",
            uptime: uptime
        }));

    }
    // 404 Not Found - Route does not exist
    else {

        res.writeHead(404);

        res.end(JSON.stringify({
            error: "Route not found"
        }));

    }

});

server.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});
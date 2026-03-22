import express from 'express';
import { createServer } from 'node:http';
import { createBareServer } from '@tomphttp/bare-server-node';
import path from 'node:path';

const __dirname = path.resolve();
const app = express();
const server = createServer();
const bare = createBareServer('/bare/');

// Periodically check if the request is for the proxy or the website
app.use(express.static(__dirname));

server.on('request', (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on('upgrade', (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

// Replit uses process.env.PORT automatically
const PORT = process.env.PORT || 3000;
server.listen({ port: PORT }, () => {
    console.log(`Freedom Networks active on port ${PORT}`);
});

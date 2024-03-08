const express = require('express');
const requestIp = require('request-ip');
const app = express();

// Middleware untuk mendapatkan alamat IP
app.use(requestIp.mw());

// Route untuk mendapatkan alamat IP saat mengklik link
app.get('/getIPAddress', (req, res) => {
    const ipAddress = req.clientIp; // Mendapatkan alamat IP pengguna
    res.send(ipAddress);
});

// Server mendengarkan pada port tertentu
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

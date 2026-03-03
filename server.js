const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic event page
app.get('/events/:slug', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'eventDetail.html'));
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'notFound.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
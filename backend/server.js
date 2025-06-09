const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
	console.log(`Backend listening on port ${PORT}`);
});
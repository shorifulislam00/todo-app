const express = require('express');

const app = express();
app.use(express.json());

app.use(express.static('public'));

app.use('/api/todos', require('./routes/todoRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

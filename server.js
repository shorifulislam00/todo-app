const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected.'))
.catch(err => console.log(err));

app.use('/api/todos', require('./routes/todoRoutes'));

app.listen(3000, () => console.log("Server running at http://127.0.0.1:3000"));

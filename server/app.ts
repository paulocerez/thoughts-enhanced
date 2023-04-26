// Imports

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRouter);

// Routes

app.get('/', (req, res) => {
  res.send('Hello, my friend!');
});

app.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: "leandro.ramirez@gmail.com",
            name: "leocerez"
        }
    });
    console.log(user)
});

// Auth routes



// const indexRouter = require('./routes/index');
// const authRouter = require('./routes/auth');

// app.use('/', indexRouter);
// app.use('/', authRouter);

// Start the server

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 
// Imports

import express from 'express';
const app = express();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
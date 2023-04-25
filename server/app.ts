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

// Start the server

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 
// Imports

const express = require('express');
const app = express();

// const history = require('connect-history-api-fallback');

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// Serve the SPA static files from the frontend folder
// app.use(express.static(__dirname + '/../frontend'));

// Add the connect-history-api-fallback middleware
// app.use(history());

// Routes

app.get('/', (req: any, res: any) => {
  res.send('Hello, my friends');
});

app.post('/user', async (req: any, res: any) => {
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
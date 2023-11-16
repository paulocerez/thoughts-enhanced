<h1 align="center">
  <a href="https://github.com/paulocerez/thoughts-enhanced">
    <!-- Please provide path to your logo here -->
    <img src="./client/public/thoughts_logo.png" alt="Logo" width="100" height="100">
  </a>
</h1>

## About

Thoughts is a web application that captures any thoughts that cross your mind your mind. It's simple to use, minimalistic and includes some humor. ;)

### Built With

- Express.js: Node.js framework for building web apps and APIs
- Vue.js: JS framework for building user interfaces and single-page apps
- Vite: build tool for bundling and optimizing Vue.js projects
- Docker: platform for building, packaging, and deploying apps in containers to ensure consistent environments
- Tailwind: CSS framework for styling web apps and websites
- Prisma: ORM for simplifying database access and management in web apps
- Postgres: relational database management system for storing and managing data in web apps
- TypeScript: superset of JS that adds static typing and other features for easier and more reliable development
- Git/GitHub: version control system and web-based platform for tracking changes to code and collaborating with other developers
- Vue Router: routing library for adding client-side routing to Vue.js apps for easy navigation between views and components.

### Prerequisites

- Node.js (>= v14)
- npm (>= v6)
- git

### Installation/Setup

```bash

git clone https://github.com/paulocerez/thoughts-enhanced.git

# install dependencies for the backend and run the server locally
cd server
npm i
npm run dev

copy the .env.example file and rename as .env into your root file in the server folder




# install dependencies for the frontend and run the frontend locally
cd client
npm i
npm run dev


# build up the postgres database container
docker compose up -d

```

NOTE: I kept .env because I only connected to the local mongoDB.It's not recommended to upload .env actually.

app.use(express.json());
json() function. The express. json() function is a middleware function used in Express. js applications to parse incoming JSON data from HTTP requests, a standard format for data transmission in web servers.
What is the express.json() function? - Educative.io

command line interface (CLI)
npm install prisma --save-dev

Install Prisma Client in your project with the following command:
npm install @prisma/client
https://www.prisma.io/docs/concepts/components/prisma-client

res.status(400).json("Username or password incorrect!");
instead of
return(res.send({message:"How's the day?"}))

form span input instead of list input

button type submit
form onSubmit={handleSubmit}

async await
Sep 11, 2023 — Note: The purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async / await is similar ...
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

https://github.com/safak/next-blog/blob/completed/src/app/login/page.jsx
https://github.com/safak/nextjs-tutorial/blob/main/src/app/dashboard/(auth)/login/page.jsx

const name = e.target[0].value
but not e.target.value[0]

localhost/:1 Access to fetch at 'http://localhost:5100/api/register' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
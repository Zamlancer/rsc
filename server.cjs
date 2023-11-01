require('@babel/register');

const express = require('express');
const ReactDOMServer = require('react-dom/server');

console.log("Server started", ReactDOMServer);


const React = require('react');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve Vite's client-side assets
const VITE_DIST_DIR = path.resolve(__dirname, './dist');
app.use(express.static(VITE_DIST_DIR));

app.get('/api/data', (req, res) => {
  console.log("API call");
  setTimeout(() => {
    res.json({ message: "Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!Hello from React Server Component with Suspense!" });
  }, 3000); // simulating a delay
});

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>');

  const App = require('./App.server.jsx').default;
  const stream = ReactDOMServer.renderToPipeableStream(React.createElement(App), {
    
  });
  stream.pipe(res);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

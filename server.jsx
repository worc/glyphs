import express from "express";

const app = express();

const renderPage = (title) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
      </head>

      <body>
        <header>
          <h1>${title}</h1>
        </header>
        
      </body>
      <script src="/static/client.js"></script>
    </html>
  </html>
`;

app.get("/", (req, res) => {
  let pageTitle = "Glyphtionary";

  res.status(200).send(renderPage(pageTitle));
});

app.get("/glyphs", (req, res) => {
  let pageTitle = "Glyphs";

  res.status(200).send(renderPage(pageTitle));
});


export default app;
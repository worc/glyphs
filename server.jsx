import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";
import path from "path";

import App from "./shared/App";

const app = express();
const PORT = process.env.PORT || 3000;

const renderPage = (title, app) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
      </head>

      <body>
        <header>
          <h1>${title}</h1>
        </header>
        
        <div id="app">${renderToString(app)}</div>
        
      </body>
      <script src="/static/client.js"></script>
    </html>
  </html>
`;

app.use("/", (req, res, next) => {
  console.log(process.memoryUsage());
  next();
});

app.get("/", (req, res) => {
  res.redirect("/glyphs");
});

app.get("/glyphs/:glyphs?", (req, res) => {
  let pageTitle = "Ingress Glyphtionary";

  console.log("req.headers.host: ", req.headers.host);

  res.status(200).send(renderPage(pageTitle, (
    <StaticRouter context={{}} location={req.url}>
      <App host={req.headers.host} />
    </StaticRouter>
  )));
});

// todo add routes to /glyphs/images/:glyph to retrieve .png files directly

// app.get("/glyphs/:glyph", (req, res) => {
//   let delimiters = new RegExp(/[+\-_]/); // allow for + - and _ to be delimiters for glyph sequences
//   let glyphSequence = req.params.glyph.split(delimiters);
//
//   res.status(200).send(renderPage(req.params.glyph, (
//     <GlyphSequence names={glyphSequence} />
//   )));
// });

app.use("/static/client.js", express.static(path.join(process.cwd(), "dist/client.js")));

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});

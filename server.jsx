import express from "express";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import React from "react";

import Glyphtionary from "./ingress-glyph-tools/Glyphtionary";
import Glyph from "./shared/components/Glyph";

const app = express();

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
    </html>
  </html>
`;

app.get("/", (req, res) => {
  let pageTitle = "Glyphtionary";

  res.status(200).send(renderPage(pageTitle));
});

app.get("/glyphs", (req, res) => {
  res.status(200).send(
    JSON.stringify(Glyphtionary)
  );
});

app.get("/glyphs/:glyph", (req, res) => {
  let currentGlyph = req.params.glyph;

  res.status(200).send(renderPage(currentGlyph, (
    <Glyph edges={ Glyphtionary[currentGlyph].edges } />
  )));
});

export default app;
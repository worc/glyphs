import express from "express";
import { renderToString } from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
import React from "react";

import Glyph from "./shared/components/Glyph";
import GlyptionaryComponent from "./shared/components/Glyphtionary";

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
  res.redirect("/glyphs");
});

app.get("/glyphs", (req, res) => {
  let pageTitle = "Glyphtionary";

  res.status(200).send(renderPage(pageTitle, (
    <GlyptionaryComponent />
  )));
});

app.get("/glyphs/:glyph", (req, res) => {
  let currentGlyph = req.params.glyph;

  res.status(200).send(renderPage(currentGlyph, (
    <Glyph name={req.params.glyph} />
  )));
});

export default app;

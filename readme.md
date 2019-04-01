The app should boot up just fine with NPM 4.1.1 and Node 7.8.0. Just run an `npm install`, `npm run build`, and then an `npm run start`, the app should be available at 
[http://localhost:3000](http://localhost:3000)

The project is basically three things: a dictionary of glyphs from the game Ingress, a rendering engine to turn an abstract model of that glyph into a DOM canvas, and then a Node/Express app to make that DOM available in a browser.

I started out with this side project based on a frustration with the current Ingress glyph dictionaries out there. The source code I found wasn't written in a way that was open to extension or modification. so I put together a few ideas here to clarify what a glyph is and one way it can be rendered without a lot of convoluted hard coding.

The ingress-glyph-tools folder is a total rewrite of another ingress-glyph-tools library I found in the wild. I pulled the canvas rendering functionality into a completely separate class just to get a better separation of concerns and open the possibility of customizing the display of the glyph without affecting the abstract model of the glyph.

I have my old proof of concept for polygon generation on [stackoverflow](https://stackoverflow.com/a/41686634/769780). 
 
 The React components to put this rendering into the DOM are located in shared/components/ and are pretty straightforward JSX components.
 
 There's an ES5/ES6 trick happening with server.jsx/server.js that relies on running this app in dev mode `npm run start` and getting Babel to transpile on the fly. An actual production build would require that transpile step first, and I would look into creating a client-side bundle.
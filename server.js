const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const NextI18Next = require("next-i18next").default;

// If you change the config here, please change i18n.ts file also
const nextI18nextInstance =  new NextI18Next({
  defaultLanguage: "EN",
  otherLanguages: ["EN", "FR","NL"],
  shallowRender: true
});

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  await nextI18nextInstance.initPromise;
  server.use(nextI18NextMiddleware(nextI18nextInstance));

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();

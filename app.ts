/// <reference types="vite/client" />
import express from "express";
import httpDevServer from "vavite/http-dev-server";

const app = express();

app.get("/", (_, res) => {
    res.send('change me to see updates, express, hmr')
  });

// 起動
if (httpDevServer) {
  httpDevServer.on("request", app);
} else {
  console.log("Starting prod server");
  app.listen(3000);
}

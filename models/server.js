import express from "express";
import cors from "cors";

import { createServer } from "http";
import { Server as Socket } from "socket.io";
import { socketController } from "../sockets/controller.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);
    this.io = new Socket(this.server);

    this.paths = {};

    //Middlewares
    this.midelewares();

    //Rutas de mi app
    this.routes();

    //Sockets
    this.sockets();
  }

  midelewares() {
    //CORS
    this.app.use(cors());

    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.auth, authRouter);
  }

  sockets() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}!`);
    });
  }
}

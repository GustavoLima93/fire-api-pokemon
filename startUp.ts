import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';

import Firebasedb from "./infra/firebasedb";
import PokemonController from "./controllers/pokemonsController";

class StartUp {
  public app: express.Application;

  constructor() {
    Firebasedb.connectionDb
    this.app = express();
    this.middler();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
        methods: "GET,OPTIONS,PUT,POST,DELETE",
        origin: "*"
    };

    this.app.use(cors(options));
}

  middler() {
    this.enableCors()
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "GHLIMA-API-POkEMON-V2" });
    });

    this.app.route("/api/v2/pokemons").get(PokemonController.getAll);
    this.app.route("/api/v2/pokemon/:id").get(PokemonController.getById);
    this.app.route("/api/v2/pokemon/name/:id").get(PokemonController.getByName);
    this.app.route("/api/v2/pokemons/generation/:id").get(PokemonController.getByGeneration);
  }
}

export default new StartUp();

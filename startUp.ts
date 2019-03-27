import * as express from "express";
import * as firebase from "firebase";
import * as bodyParser from "body-parser";

import PokemonController from "./controllers/pokemonsController";

import { environment } from "./environments/environment";

class StartUp {
  public app: express.Application;

  constructor() {
    firebase.initializeApp(environment.firebase);
    this.app = express();
    this.routes();
  }

  middler() {
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
    this.app.route("/api/v2/pokemons/:id").get(PokemonController.getByGeneration);
  }
}

export default new StartUp();

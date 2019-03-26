import * as HttpStatus from "http-status";

import PokemonsService from "../services/pokemonsService";
import Helper from "../infra/helper";

import { Pokemon } from "./../models/pokemon.model";

class PokemonsController {

  getAll(req, res) { 
    PokemonsService.getAll()
      .then((pokemons: Pokemon[]) => {
        return Helper.sendResponse(res, HttpStatus.OK, pokemons);
      })
      .catch(err => {
        Helper.sendResponse(
          res,
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Ocorreu um erro."
        );
      });
  }
}

export default new PokemonsController();

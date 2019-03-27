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
        return Helper.sendResponse(
          res,
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Ocorreu um erro."
        );
      });
  }

  getById(req, res) {
    const param = req.params.id  
    
    if(Number(param)) {      
      PokemonsService.getById(param).then((pokemons: Pokemon[]) => {
        return Helper.sendResponse(res, HttpStatus.OK, pokemons);
      })
      .catch(err => {
       return Helper.sendResponse(
          res,
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Ocorreu um erro."
        );
      });
    }else{
      return Helper.sendResponse(
        res,
        HttpStatus.NOT_FOUND,
        "Erro 404"
      ); 
    }
  }

  getByName(req, res) {
    const param = req.params.id      
    if(param.split('').length < 30 ) {      
      PokemonsService.getByName(param).then((pokemons: Pokemon[]) => {
        return Helper.sendResponse(res, HttpStatus.OK, pokemons);
      })
      .catch(err => {
       return Helper.sendResponse(
          res,
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Ocorreu um erro."
        );
      });
    }else{
      return Helper.sendResponse(
        res,
        HttpStatus.NOT_FOUND,
        "Erro 404"
      ); 
    }
  }

  getByGeneration(req, res) {
    const param = req.params.id  
    
    if(Number(param) >= 1 && Number(param) <= 7 ) {      
      PokemonsService.getByGeneration(param).then((pokemons: Pokemon[]) => {
        return Helper.sendResponse(res, HttpStatus.OK, pokemons);
      })
      .catch(err => {
       return Helper.sendResponse(
          res,
          HttpStatus.INTERNAL_SERVER_ERROR,
          "Ocorreu um erro."
        );
      });
    }else{
      return Helper.sendResponse(
        res,
        HttpStatus.NOT_FOUND,
        "Erro 404"
      ); 
    }
  }
}

export default new PokemonsController();

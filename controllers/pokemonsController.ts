import * as HttpStatus from 'http-status';

import PokemonsService from '../services/pokemonsService';
import Helper from '../infra/helper';


class PokemonsController {

   

    getAll(req,res) {  
        return PokemonsService.getAll(req,res)
    }

  

    returnAll(req,res,pokemons) { 
       return Helper.sendResponse(res, HttpStatus.OK,pokemons); 
    }

}

export default new PokemonsController();
import * as HttpStatus from 'http-status';

import PokemonsService from '../services/pokemonsService';
import Helper from '../infra/helper';

class PokemonsController {

    startApi() {
        PokemonsService.getAll();
    }


    // get(req, res) {
    //     PokemonsService.pokemons.then((pokemons) => {

    //         console.log(pokemons)
    //         Helper.sendResponse(res, HttpStatus.OK, pokemons);
    //     }).catch((e)=>{
    //         console.log(e)
    //     })
    // }

    get(req,res) {
        PokemonsService.getTest().then(()=>{
            // if()
            Helper.sendResponse(res, HttpStatus.OK,PokemonsService.test ); 
        })
    }

}

export default new PokemonsController();
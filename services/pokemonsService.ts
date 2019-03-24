import * as firebase from 'firebase';

import PokemonsController from '../controllers/pokemonsController';

import { Pokemon } from './../models/pokemon.model';

class PokemonsService {

    private pokemons: Pokemon[]

    getAll(req, res) {

        if (this.pokemons) {
            console.log('entrou nesse cash');
            return PokemonsController.returnAll(req, res, this.pokemons);
        }

        firebase.database().ref('pokemons/').on("value", (snapshot) => {
            this.pokemons = snapshot.val();       
            return PokemonsController.returnAll(req, res, snapshot.val());
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

}

export default new PokemonsService()
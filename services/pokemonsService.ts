import * as firebase from 'firebase';

import { Pokemons } from './../models/pokemon.model';

class PokemonsService {

    private pokemons: Pokemons[]

    getAll() {
        firebase.database().ref('pokemons/').on("value", (snapshot) => {
            console.log(snapshot.val());
            this.pokemons = snapshot.val();
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    get poks() {
        return this.pokemons;
    }

}

export default new PokemonsService()
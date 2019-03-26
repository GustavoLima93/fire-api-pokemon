import * as firebase from "firebase";

import { Pokemon } from "./../models/pokemon.model";

class PokemonsService {

  private pokemons: Pokemon[];

  getAll() {
    return new Promise((resolve, reject) => {
      if (this.pokemons) {
        console.log('RETORNANDO DO CASH')
        return resolve(this.pokemons);
      }
      firebase
        .database()
        .ref("pokemons/")
        .on(
          "value",
          snapshot => {

            console.log('NÃO ENTROU NO CASH')
            this.pokemons = snapshot.val()
            resolve(snapshot.val());

          },
          function(errorObject) {
            console.log("The read failed: " + errorObject.code);
            reject(errorObject.code);
          }
        );
    });
  }
}

export default new PokemonsService();

import * as firebase from 'firebase';

import { Pokemons } from './../models/pokemon.model';


class PokemonsService {

    public pokemons: Promise<Pokemons[]>
    public test:any

    getAll() {

       firebase.database().ref('pokemons/').on("value", (snapshot) => {
            //console.log(snapshot.val());
            this.pokemons = new Promise((resolve, reject) => {
                resolve(snapshot.val());
                reject('Ocorreu um erro')
            })
            // this.pokemons = snapshot.val();
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    getTest(): Promise<any>{
        return new Promise((resolve,reject)=>{
            resolve( firebase.database().ref('pokemons/').on("value", (snapshot) => {
                //console.log(snapshot.val());
                // this.pokemons = new Promise((resolve, reject) => {
                //     resolve(snapshot.val());
                //     reject('Ocorreu um erro')
                // })
                 this.test = snapshot.val()
                // this.pokemons = snapshot.val();
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            }))
        })
    }

    pk(pokemons) {
        return pokemons
    }



}

export default new PokemonsService()
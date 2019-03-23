import * as express from 'express';
import * as firebase from 'firebase';
import * as bodyParser from 'body-parser';

import PokemonController from './controllers/pokemonsController';

import { environment } from './environments/environment';

class StartUp {
    public app: express.Application;


    constructor() {
        firebase.initializeApp(environment.firebase);
        this.startApi();
        this.app = express();
        setTimeout(() => {
        this.routes();
        }, 3000);
        
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    startApi() {
        return PokemonController.startApi();
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: 'GHLIMA-API-POkEMON-V2' })
        });

        this.app.route('/api/v2/pokemons').get(PokemonController.get);
    }
}

export default new StartUp();
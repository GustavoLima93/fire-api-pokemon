import * as express from 'express';

class StartUp{
    public app : express.Application;

    constructor(){
        this.app = express();
        this.routes()
    }

    routes() {
        this.app.route('/').get((req,res)=>{
            res.send({versao: 'GHLIMA-API-POkEMON-V2'})
        })
    }
}

export default new StartUp();
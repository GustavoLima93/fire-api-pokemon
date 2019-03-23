import * as HttpStatus from 'http-status';

class PokemonsController {

    sendResponse = ((res, statusCode, data) => {
        res.status(statusCode).json({ result: data })
    })

}

export default new PokemonsController();
import * as firebase from "firebase";

import { environment } from './../environments/environment';
class FirebaseDb {

    public connectionDb =  firebase.initializeApp(environment.firebase);
    public db = firebase.database;    
}

export default new FirebaseDb();
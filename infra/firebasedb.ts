import * as firebase from "firebase";

import { environment } from './../environments/environment';

class FirebaseDb {
    public db = firebase.database
    public connectionDb =  firebase.initializeApp(environment.firebase);
}

export default new FirebaseDb();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.app = exports.signOut = exports.onAuthStateChanged = exports.signInWithPopup = exports.GoogleAuthProvider = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
Object.defineProperty(exports, "GoogleAuthProvider", { enumerable: true, get: function () { return auth_1.GoogleAuthProvider; } });
Object.defineProperty(exports, "signInWithPopup", { enumerable: true, get: function () { return auth_1.signInWithPopup; } });
Object.defineProperty(exports, "onAuthStateChanged", { enumerable: true, get: function () { return auth_1.onAuthStateChanged; } });
Object.defineProperty(exports, "signOut", { enumerable: true, get: function () { return auth_1.signOut; } });
const firebaseConfig = {
    apiKey: "AIzaSyAs2rAO7tOOR21Ijk8hyYocU5gXwmsHlbE",
    authDomain: "control-points.firebaseapp.com",
    projectId: "control-points",
    storageBucket: "control-points.appspot.com",
    messagingSenderId: "331056463861",
    appId: "1:331056463861:web:f4926d117461e4b5fc6abc",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.app = app;
const auth = (0, auth_1.getAuth)();
exports.auth = auth;
//# sourceMappingURL=firebase.js.map
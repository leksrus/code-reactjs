import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBFLmN0nu3_lRIiZdyTXItCF5SpZm_IFbE",
    authDomain: "tech-market-bad6f.firebaseapp.com",
    projectId: "tech-market-bad6f",
    storageBucket: "tech-market-bad6f.appspot.com",
    messagingSenderId: "298042791231",
    appId: "1:298042791231:web:6489e41392983a8f79af8a",
    measurementId: "G-V186TXRKVV"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}

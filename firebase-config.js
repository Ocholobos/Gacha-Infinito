// ============================================================
// CONFIGURACIÓN DE FIREBASE
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyA-ovAJtWllZAhqgQkmUriCyEI9ad7MqsM",
    authDomain: "gacha-infinita.firebaseapp.com",
    projectId: "gacha-infinita",
    storageBucket: "gacha-infinita.firebasestorage.app",
    messagingSenderId: "564611827872",
    appId: "1:564611827872:web:c74a0a7a34f82b4f2ce1c5"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar servicios
const auth = firebase.auth();
const db = firebase.firestore();

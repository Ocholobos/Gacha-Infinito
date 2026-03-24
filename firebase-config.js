// ============================================================
// CONFIGURACIÓN DE FIREBASE (con variables de entorno)
// ============================================================
// Las claves se inyectan automáticamente en Netlify desde las variables de entorno
// Para desarrollo local, se usan los valores por defecto
// ============================================================

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyA-ovAJtWllZAhqgQkmUriCyEI9ad7MqsM",
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "gacha-infinita.firebaseapp.com",
    projectId: process.env.VITE_FIREBASE_PROJECT_ID || "gacha-infinita",
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "gacha-infinita.firebasestorage.app",
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "564611827872",
    appId: process.env.VITE_FIREBASE_APP_ID || "1:564611827872:web:c74a0a7a34f82b4f2ce1c5"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar servicios
const auth = firebase.auth();
const db = firebase.firestore();

// Nota: Para que las variables de entorno funcionen en Netlify,
// debes configurarlas en: Site settings > Environment variables
// con los nombres: VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, etc.

import { Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

/**
 * Todas as variáveis utilizadas pelo next que não não ara o build, devem inicializar com NEXT_PUBLIC dentro do arquivo .env.local
 */
const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
})

const db = getFirestore(app);

export default app;

export { db }
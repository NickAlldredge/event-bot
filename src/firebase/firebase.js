// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, onMounted, onUnmounted, computed } from "vue";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const useAuthState = () => {
    const user = ref(null);
    const error = ref(null);

    const auth = getAuth();
    let unsubscribe;
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            u => (user.value = u),
            e => (error.value = e)
        );
    });

    onUnmounted(() => unsubscribe());

    const isAuthenticated = computed(() => user.value != null)

    return {user, error, isAuthenticated};
}

export const getUserState = () => {
    return new Promise((resolve, reject) => {
        return onAuthStateChanged(getAuth(), resolve, reject);
    });
}
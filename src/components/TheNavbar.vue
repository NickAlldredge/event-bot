<template>
    <header class="bg-gray-800">
        <nav class=" flex flex-col h-full">

            <router-link class="text-white m-1 p-5 rounded-md" :to="{name: 'dashboard'}">
                <h1 class="text-gray-50 text-3xl font-bold">🎈 EventBot 🎉</h1>
            </router-link>

            <router-link 
                v-if="user"
                class="text-white m-1 p-5 rounded-md hover:text-gray-800 hover:bg-gray-100"
                active-class="text-gray-800 bg-gray-100"
                :to="{name: 'birthdays'}"
            >
                <h2 class="text-xl">🍰 Birthdays</h2>
            </router-link>

            <router-link 
                v-if="user"
                class="text-white m-1 p-5 rounded-md hover:text-gray-800 hover:bg-gray-100"
                active-class="text-gray-800 bg-gray-100"
                :to="{name: 'secretSanta'}"
            >
                <h2 class="text-xl">🎅 Secret Santa</h2>
            </router-link>

            <button 
                v-if="user"
                @click="signOutUser" 
                class="text-white mt-auto p-5 text-xl">Log out</button>
        </nav>
    </header>
</template>

<script>
import { RouterLink, useRouter } from 'vue-router'
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "../firebase/firebase.js";

export default {
    setup() {
        const {user} = useAuthState();
        const auth = getAuth();

        const router = useRouter();
        const signOutUser = async () => {
            try {
                await signOut(auth);
                router.push({name: 'login'});
            } catch (error) {
                console.log(error);
            }
        }

        return {user, signOutUser};
    },
    components: {
        RouterLink
    }
}
</script>
<template>

    <section class="p-5 flex justify-center align-middle h-full">

        <div class="flex flex-col justify-center">

            <h2 class="text-4xl text-center p-4">Log In</h2>

            <form @submit.prevent="login">
    
                <label class="block text-2xl pb-1" for="email">Email</label>
                <input class="mb-3 p-2" v-model="email" type="email" name="email" id="email">

                <label class="block text-2xl pb-1" for="password">Password</label>
                <input class="mb-5 p-2" v-model="password" type="password" name="password" id="password">

                <button class="block w-full border text-2xl p-1 bg-gray-800 text-white rounded-md hover:bg-gray-700">Submit</button>
    
            </form>

        </div>

    </section>

</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase.js';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.email = '';
                this.password = '';
                this.$router.push({name: 'dashboard'});
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
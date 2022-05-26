<template>

    <section class="p-5 flex justify-center align-middle h-full">

        <div class="flex flex-col justify-center">

            <h2 class="text-4xl text-center p-4">Log In</h2>

            <form @submit.prevent="handleSubmit">
    
                <label class="block text-2xl pb-1" for="email">Email</label>
                <input class="mb-3 p-2" type="email" name="email" id="email">

                <label class="block text-2xl pb-1" for="password">Password</label>
                <input class="mb-5 p-2" type="password" name="password" id="password">

                <button 
                    type="submit"
                    class="block w-full border text-2xl p-1 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >Submit</button>
    
            </form>

        </div>

    </section>

</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
    setup() {
        const auth = getAuth();
        const router = useRouter();
        
        const handleSubmit = async e => {
            const {email, password} = e.target.elements;
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value);
                router.push({name: 'dashboard'});
            } catch (error) {
                console.log(error);
            }
        }

        return {handleSubmit};
    }
}
</script>
<template>
    <header class="bg-gray-800">
        <nav class=" flex flex-col">
            <router-link class="text-white m-1 p-5 rounded-md" :to="{name: 'home'}">
                <h1 class="text-gray-50 text-3xl font-bold">🎈 EventBot 🎉</h1>
            </router-link>
            <router-link 
                class="text-white m-1 p-5 rounded-md hover:text-gray-800 hover:bg-gray-100"
                active-class="text-gray-800 bg-gray-100"
                :to="{name: 'birthdays'}"
            >🍰 Birthdays</router-link>
            <router-link 
                class="text-white m-1 p-5 rounded-md hover:text-gray-800 hover:bg-gray-100"
                active-class="text-gray-800 bg-gray-100"
                :to="{name: 'secretSanta'}"
            >🎅 Secret Santa</router-link>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    components: {
        RouterLink
    }
}
</script>
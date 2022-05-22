<template>
    <section class="p-5 flex flex-wrap justify-evenly">
        <base-card v-for="birthday in birthdayStore.birthdays">
            <template #header>{{birthday.username}}</template>
            <template #body>{{birthday.birthday}}</template>
        </base-card>
    </section>
</template>

<script>
import { useBirthdayStore } from "../stores/BirthdayStore.js";

export default {
    setup() {
        const birthdayStore = useBirthdayStore();
        return {
            birthdayStore
        };
    }
}
</script>
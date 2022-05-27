<template>
    <section class="p-2 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
        <base-card v-for="birthday in birthdayStore.birthdays" :key="birthday.id">
            <template #header>{{birthday.username}}</template>
            <template #body>Birthday: {{birthday.month}} / {{birthday.day}}</template>
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
    },
    created() {
        this.birthdayStore.loadBirthdays();
    }
}
</script>
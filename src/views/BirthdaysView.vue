<template>
    <section class="p-5 flex grid-cols-3 gap-4">
        <base-card v-for="birthday in birthdayStore.birthdays" :key="birthday.id">
            <template #header>{{birthday.username}}</template>
            <template #body>Birthday: {{birthday.birthday}}</template>
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
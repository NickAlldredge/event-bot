<template>
  <div class="container mx-auto mt-3 flex rounded-lg overflow-hidden min-h-[50vh] bg-gray-100 drop-shadow-lg">
    <the-navbar></the-navbar>
    <main class="grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import { RouterView } from 'vue-router'

export default {
  components: {
    TheNavbar,
    RouterView
  }
}
</script>
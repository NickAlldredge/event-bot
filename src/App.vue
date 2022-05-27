<template>
  <div class="flex overflow-hidden bg-gray-100
              flex-col
              md:container md:mt-3 md:mx-auto md:rounded-lg md:flex-row md:drop-shadow-lg min-h-[50vh]">
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
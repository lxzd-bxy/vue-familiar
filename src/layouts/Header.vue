<script setup lang="ts">
import { ref } from 'vue';
import UserAvatar from '/src/components/UI/UserAvatar.vue';

const isOpen = ref(false);
</script>

<template>
  <header class="bg-[var(--fg-color)]">
    <div class="container mx-auto flex flex-wrap items-center justify-between py-2 mb-3">
      <div class="flex w-full md:w-1/2 flex-wrap items-center justify-center md:justify-start">
        <a href="" class="px-3 w-1/3 md:w-auto inline-flex text-decoration-none">
          <img class="logo object-cover" src="" alt="">
        </a>

        <form class="my-3 md:my-0 mr-0 md:mr-3" role="search">
          <input type="search" 
                 class="px-3 py-2 w-full min-w-[300px] rounded-full border-none bg-[var(--bg-color)] text-white" 
                 placeholder="Поиск..." 
                 aria-label="Search">
        </form>
      </div>

      <div class="relative">
        <button class="flex items-center text-white focus:outline-none">

          <img src=""
               alt=""
               width="32"
               height="32"
               class="rounded-full object-cover mr-2">
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts"></script>

<template>
  <header class="bg-[var(--fg-color)]">
    <div
      class="max-w-[var(--container-size)] mx-auto flex items-center justify-between py-2 mb-4"
    >
      <a href="" class="px-3 w-1/6 md:w-auto inline-flex text-decoration-none">
        <img class="w-10" src="/images/familiar.png" alt="" />
      </a>

      <form class="my-4 md:my-0 mr-0 md:mr-4" role="search">
        <input
          type="search"
          class="px-4 py-2 w-full min-w-[300px] rounded-full border-none bg-[var(--bg-color)] text-white"
          placeholder="Поиск..."
          aria-label="Search"
        />
      </form>

      <div class="relative">
        <button class="flex items-center text-white focus:outline-none">
          <img width="32" height="32" class="rounded-full object-cover mr-2" />
          <svg
            class="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

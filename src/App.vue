<script setup lang="ts">
import Header from "@/layouts/Header.vue";
import Feed from "@/components/Feed/Feed.vue";
import Sidebar from "@/layouts/Sidebar.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <Header />
  <main class="flex max-w-[var(--container-size)] mx-auto">
    <Sidebar />
    <Feed />
  </main>
  <Footer />
</template>

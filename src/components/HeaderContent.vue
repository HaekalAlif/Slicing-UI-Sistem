<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <nav
    class="px-12 w-full h-[80px] bg-x-black flex items-center justify-between"
  >
    <img
      src="@/assets/images/logo/logo-join-sistem.png"
      alt="Join Sistem Logo"
    />
    <ul class="flex gap-4">
      <li>
        <a
          href="/"
          :class="{ 'text-x-yellow': route.path === '/' }"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Home</a
        >
      </li>
      <li>
        <a
          href="blog"
          :class="{ 'text-x-yellow': route.path === '/blog' }"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Blog</a
        >
      </li>
      <li>
        <a
          href="about"
          :class="{ 'text-x-yellow': route.path === '/about' }"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >About Us</a
        >
      </li>
      <li>
        <a
          href="contact"
          :class="{ 'text-x-yellow': route.path === '/contact' }"
          class="text-white hover:text-x-yellow transition duration-150 ease-in-out"
          >Contact Us</a
        >
      </li>
    </ul>
    <a
      href="contact"
      class="bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out"
      >Contact Us</a
    >
  </nav>
</template>

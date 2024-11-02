<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <footer
    class="flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5"
  >
    <div
      class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full"
    >
      <img
        src="../assets/images/logo/footer-image.png"
        alt="Company logo"
        class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]"
      />
      <nav class="flex gap-6">
        <a href="/" class="grow">Home</a>
        <a href="blog" class="grow">Blog</a>
        <a href="about" class="my-auto leading-loose">About us</a>
        <a href="/contact" class="grow">Contact us</a>
        <a href="privacy-policy" class="basis-auto">Privacy Policy</a>
      </nav>
    </div>
    <section
      class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2
            class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full"
          >
            Subscribe to our news letter to get latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form
            class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full"
          >
            <label for="emailInput" class="sr-only">Enter Your Email</label>
            <input
              id="emailInput"
              type="email"
              placeholder="Enter Your Email"
              class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-zinc-500 w-fit max-md:px-5"
            />
            <button
              type="submit"
              class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 max-md:px-5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
    <div
      class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full"
    >
      <address class="opacity-70 not-italic">
        Finstreet 118 2561 Fintown
      </address>
      <img
        src="../assets/images/logo/sosmed.png"
        alt=""
        class="object-contain shrink-0 self-start mt-3 w-36 max-w-full aspect-[9.01]"
      />
    </div>
    <div class="self-start text-base leading-7 text-white opacity-70">
      <a href="mailto:Hello@finsweet.com">Hello@finsweet.com</a>
      <a href="tel:02079932905">020 7993 2905</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

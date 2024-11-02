<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout
    ><section
      class="flex flex-col items-center text-base text-center text-gray-800 rounded-none max-w-[749px] mx-auto mt-20"
    >
      <h2 class="font-black leading-none uppercase tracking-[3px]">
        Contact us
      </h2>
      <h1
        class="mt-3 text-5xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl"
      >
        Let's Start a Conversation
      </h1>
      <p
        class="z-10 self-stretch mt-6 w-full leading-7 text-zinc-500 max-md:max-w-full"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </section>

    <section class="flex flex-col max-w-screen-md mx-auto mt-16">
      <div
        class="px-16 py-12 w-full bg-amber-300 max-md:px-5 max-md:max-w-full"
      >
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10"
            >
              <h2 class="text-sm leading-none opacity-60">Working hours</h2>
              <hr
                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
              />
              <p class="mt-4 font-bold">Monday To Friday</p>
              <p class="font-bold">9:00 AM to 8:00 PM</p>
              <p class="text-base leading-7 opacity-60">
                Our Support Team is available 24/7
              </p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start text-neutral-600 max-md:mt-10"
            >
              <h2 class="text-sm leading-none opacity-60">Contact Us</h2>
              <hr
                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
              />
              <p class="mt-4 text-xl font-bold leading-relaxed">
                020 7993 2905
              </p>
              <p class="text-base leading-7 opacity-60">hello@finsweet.com</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <form
      class="flex flex-col max-w-screen-md text-base leading-7 text-gray-800 rounded-none mx-auto mt-8 mb-24"
    >
      <label for="fullName" class="sr-only">Full Name</label>
      <input
        id="fullName"
        type="text"
        class="gap-2.5 self-stretch p-6 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
        placeholder="Full Name"
      />

      <label for="email" class="sr-only">Your Email</label>
      <input
        id="email"
        type="email"
        class="gap-2.5 self-stretch p-6 mt-4 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
        placeholder="Your Email"
      />

      <div
        class="flex flex-wrap gap-4 items-center mt-3.5 w-full whitespace-nowrap max-md:max-w-full"
      >
        <div
          class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5"
        >
          <label for="province" class="sr-only">Province</label>
          <select id="province" class="w-full bg-transparent appearance-none">
            <option value="" disabled selected>Province</option>
          </select>
          <img
            src="/public/images/dropdown.png"
            class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]"
            alt=""
          />
        </div>
        <div
          class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5"
        >
          <label for="city" class="sr-only">City</label>
          <select id="city" class="w-full bg-transparent appearance-none">
            <option value="" disabled selected>City</option>
          </select>
          <img
            src="/public/images/dropdown.png"
            class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]"
            alt=""
          />
        </div>
      </div>

      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        class="gap-2.5 px-6 pt-6 pb-24 mt-5 whitespace-nowrap rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        class="px-16 py-4 mt-4 w-full text-2xl font-bold leading-none bg-blue-600 text-white max-md:px-5 max-md:max-w-full"
      >
        Send Message
      </button>
    </form>
  </MainLayout>
</template>

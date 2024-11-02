<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout
    ><header class="flex flex-col">
      <div
        class="flex flex-col items-center px-20 pt-32 w-full bg-[#F4F0F8] max-md:px-5 max-md:pt-24 max-md:max-w-full"
      >
        <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
          <div class="max-w-full w-[952px]">
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                <img
                  src="/public/images/person-1.png"
                  alt="Author's portrait"
                  class="object-contain grow w-full aspect-[0.85] max-md:mt-8"
                />
              </div>
              <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                  <h1
                    class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
                  >
                    Hey there, I'm Andrew Jonhson and welcome to my Blog
                  </h1>
                  <p
                    class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Non blandit massa enim nec. Scelerisque viverra
                    mauris in aliquam sem. At risus viverra adipiscing at in
                    tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/public/images/yellow-bar.svg"
            alt=""
            class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </header>

    <main class="container mx-auto mt-20 px-60 mb-20">
      <div class="flex gap-5 max-md:flex-col">
        <section class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <h1
            class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-8 max-md:text-4xl"
          >
            My Posts
          </h1>
          <img
            src="/public/images/author-1.png"
            alt="Blog post image 1"
            class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10"
          />
          <img
            src="/public/images/author-2.png"
            alt="Blog post image 2"
            class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10"
          />
        </section>
        <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <article
            class="flex z-10 flex-col mt-48 mr-0 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full"
          >
            <span class="self-start uppercase tracking-[3px]"> BUSINESS </span>
            <h2
              class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
            >
              Font sizes in UI design: The complete guide to follow
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article
            class="flex z-10 flex-col mt-44 mr-0 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full"
          >
            <span class="self-start uppercase tracking-[3px]"> ECONOMY </span>
            <h2
              class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              How to build rapport with your web design clients
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        </section>
      </div>
    </main>
    ,</MainLayout
  >
</template>

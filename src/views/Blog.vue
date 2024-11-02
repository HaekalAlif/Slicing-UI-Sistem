<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<script>
export default {
  name: "BlogCards",
  data() {
    return {
      blogImages: [
        "/public/images/blog-1.png",
        "/public/images/blog-2.png",
        "/public/images/blog-3.png",
        "/public/images/blog-4.png",
        "/public/images/blog-1.png",
      ],
      blogPosts: [
        {
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          category: "Business",
          title: "How to build rapport with your web design clients",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          category: "Startup",
          title: "Logo design trends to avoid in 2022",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          category: "Technology",
          title: "8 Figma design systems you can download for free today",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
        {
          category: "Economy",
          title: "Font sizes in UI design: The complete guide to follow",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        },
      ],
    };
  },
};
</script>

<template>
  <MainLayout>
    <!-- Featured Post Section -->
    <header class="flex flex-col">
      <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full"
            >
              <h2
                class="text-base leading-none text-gray-800 uppercase tracking-[3px]"
              >
                Featured Post
              </h2>
              <h1
                class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
              >
                Step-by-step guide to choosing great font pairs
              </h1>
              <p class="mt-4 text-sm leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </p>
              <p
                class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button
                class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5"
              >
                Read More &gt;
              </button>
            </div>
          </article>
          <aside class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              src="/public/images/blog-5.png"
              alt="Featured blog post illustration"
              class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
            />
          </aside>
        </div>
      </section>
    </header>

    <!-- All Posts Section -->
    <section class="blog-cards mt-20 px-20">
      <div class="flex gap-5 max-md:flex-col">
        <aside class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <router-link
              v-for="(image, index) in blogImages"
              :key="index"
              :to="{ path: '/blog-post' }"
            >
              <img
                :src="image"
                :alt="`Blog post image ${index + 1}`"
                class="object-contain w-full aspect-[1.54] max-md:max-w-full"
                :class="{ 'mt-16 max-md:mt-10': index > 0 }"
              />
            </router-link>
          </div>
        </aside>
        <main
          class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full mt-[70px]"
        >
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <article
              v-for="(post, index) in blogPosts"
              :key="index"
              class="blog-post mb-[265px] max-md:mb-10"
            >
              <h2 class="self-start uppercase tracking-[3px]">
                {{ post.category }}
              </h2>
              <h3
                class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
              >
                {{ post.title }}
              </h3>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                {{ post.description }}
              </p>
            </article>
          </div>
        </main>
      </div>

      <div class="flex justify-center items-center space-x-1 -mt-20">
        <button
          @click="handlePrevClick"
          class="text-2xl font-bold text-zinc-500"
        >
          &lt; Prev
        </button>
        <button
          @click="handleNextClick"
          class="text-2xl font-bold text-gray-800"
        >
          Next &gt;
        </button>
      </div>
    </section>

    <!-- Choose A Category Section -->
    <section class="category-selection py-20">
      <h2
        class="self-center text-4xl font-bold tracking-tighter text-center leading-none text-gray-800"
      >
        Choose A Category
      </h2>
      <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full px-20">
        <div class="flex gap-5 max-md:flex-col">
          <a href="/category" class="category-card">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
            >
              <div
                class="flex overflow-hidden relative flex-col w-12 aspect-square fill-orange-50"
              >
                <img
                  src="/public/images/cat-1.png"
                  class="object-contain w-full aspect-square"
                  alt="Business category icon"
                />
              </div>
              <h3
                class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
              >
                Business
              </h3>
              <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </a>

          <a href="/category" class="category-card">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
            >
              <img
                src="/public/images/cat-2.png"
                class="object-contain w-12 aspect-square fill-orange-50"
                alt="Startup category icon"
              />
              <h3
                class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
              >
                Startup
              </h3>
              <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </a>

          <a href="/category" class="category-card">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
            >
              <img
                src="/public/images/cat-3.png"
                class="object-contain w-12 aspect-[0.98] fill-orange-50"
                alt="Economy category icon"
              />
              <h3
                class="mt-4 text-3xl font-bold tracking-tighter leading-none text-gray-800"
              >
                Economy
              </h3>
              <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </a>

          <a href="/category" class="category-card">
            <div
              class="flex flex-col grow items-start p-8 w-full border border-solid border-zinc-500 max-md:px-5 max-md:mt-8"
            >
              <img
                src="/public/images/cat-4.png"
                class="object-contain w-12 aspect-[0.96] fill-orange-50"
                alt="Technology category icon"
              />
              <h3
                class="mt-3.5 text-3xl font-bold tracking-tighter leading-none text-gray-800"
              >
                Technology
              </h3>
              <p class="self-stretch mt-1 text-base leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Join Our Team Section -->
    <section
      class="flex flex-col items-center font-bold max-w-[407px] mb-20 mx-auto"
    >
      <h2
        class="z-10 self-stretch mt-0 w-full text-4xl tracking-tighter leading-10 text-center text-gray-800"
      >
        Join our team to be a part of our story
      </h2>
      <p class="mt-4 text-base leading-7 text-center text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <button
        class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600"
        @click="handleJoinNow"
      >
        Join Now
      </button>
    </section>
  </MainLayout>
</template>

<style scoped>
/* Efek hover untuk semua kartu */
.category-card:hover .flex {
  background-color: #2563eb; /* Warna biru */
  border-color: #2563eb; /* Ubah warna border ke biru */
}

.category-card:hover h3 {
  color: #ffffff; /* Ubah warna teks judul ke putih */
}

.category-card:hover p {
  color: #ffffff; /* Ubah warna teks deskripsi ke putih */
}
</style>

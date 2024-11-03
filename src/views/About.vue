<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import AuthorCard from "@/components/AuthorCard.vue";
</script>

<script>
export default {
  name: "AuthorList",
  components: {
    AuthorCard,
  },
  data() {
    return {
      authors: [
        {
          id: 1,
          name: "Floyd Miles",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-1.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 2,
          name: "Dianne Russell",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-2.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 3,
          name: "Jenny Wilson",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-3.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 4,
          name: "Leslie Alexa",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-4.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 5,
          name: "Guy Hawkins",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-5.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 6,
          name: "Eleanor Pena",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-6.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 7,
          name: "Robert Fox",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-7.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 8,
          name: "Jacob Jones",
          role: "Content Writer @Company",
          imageSrc: "/images/orang-8.png",
          ratingSrc: "/images/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
      ],
    };
  },
};
</script>

<template>
  <MainLayout>
    <!-- About Us Section -->
    <main class="flex flex-col px-20">
      <section
        class="z-20 relative self-end mr-10 w-full max-w-[1133px] max-md:mr-2.5 max-md:max-w-full"
      >
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-start p-16 w-full text-gray-800 bg-white max-md:px-5 max-md:mt-8 max-md:max-w-full"
            >
              <h2
                class="text-base font-medium leading-none uppercase tracking-[3px]"
              >
                ABOUT US
              </h2>
              <h1
                class="mt-4 text-5xl font-bold tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
              >
                We are a team of content writers who share their learnings
              </h1>
            </div>
          </article>
          <aside class="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <p
              class="self-stretch my-auto text-base leading-7 text-neutral-600 max-md:mt-10 max-md:max-w-full"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </aside>
        </div>
      </section>
      <section
        class="flex relative flex-col items-start px-20 pt-64 w-full min-h-[444px] max-md:px-5 max-md:pt-24 max-md:max-w-full -top-20"
      >
        <img
          src="/public/images/about-us.png"
          alt=""
          class="object-cover absolute inset-0 size-full"
        />
        <div class="flex relative flex-col max-w-full w-[862px]">
          <div class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <p
                    class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl"
                  >
                    12+
                  </p>
                  <p class="text-base leading-7">Blogs Published</p>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <p
                    class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl"
                  >
                    18K+
                  </p>
                  <p class="text-base leading-7">Views on Finsweet</p>
                </div>
              </div>
              <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <p
                    class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl"
                  >
                    30K+
                  </p>
                  <p class="text-base leading-7">Total active Users</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-px">
            <div
              class="flex shrink-0 max-w-full bg-amber-300 h-[40px] w-[1000px]"
            ></div>
          </div>
        </div>
      </section>
      <section
        class="flex flex-col items-center px-16 pt-32 pb-20 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full -mt-20"
      >
        <div class="w-full max-w-[1053px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full"
              >
                <h3 class="font-semibold leading-none uppercase tracking-[3px]">
                  Our mision
                </h3>
                <h2 class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                  Creating valuable content for creatives all around the world
                </h2>
                <p
                  class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </article>
            <article
              class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
            >
              <div
                class="flex flex-col grow items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full"
              >
                <h3 class="font-semibold leading-none uppercase tracking-[3px]">
                  Our Vision
                </h3>
                <h2 class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                  A platform that empowers individuals to improve
                </h2>
                <p
                  class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <!-- Our Team Section -->
    <section class="rounded-none px-20 mt-20">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <header
            class="flex flex-col mt-20 font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
          >
            <h2
              class="self-start text-4xl tracking-tighter leading-none text-gray-800"
            >
              Our team of creatives
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </header>
        </div>
        <div class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <img
            src="/public/images/about-1.png"
            alt="Our team of creatives"
            class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>

    <!-- Why We Started Section -->
    <section class="why-we-started px-20 mt-20">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[49%] max-md:ml-0 max-md:w-full">
          <img
            src="/public/images/about-2.png"
            alt="Illustration related to why we started this blog"
            class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <article
            class="flex z-10 flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h2
              class="self-start text-4xl tracking-tighter leading-none text-gray-800"
            >
              Why we started this Blog
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- section list author -->
    <a href="/author" class="block">
      <section class="author-list mt-20">
        <h1
          class="self-center text-4xl font-bold tracking-tighter text-center leading-none text-gray-800"
        >
          List of Authors
        </h1>
        <div class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div class="flex flex-wrap gap-5 justify-center">
            <AuthorCard
              v-for="author in authors"
              :key="author.id"
              :name="author.name"
              :role="author.role"
              :image-src="author.imageSrc"
              :rating-src="author.ratingSrc"
              :background-color="author.backgroundColor"
              class="w-[300px] max-lg:w-1/3 max-md:w-1/2 max-sm:w-full hover:bg-orange-100 transition-colors duration-200 rounded-lg"
            />
          </div>
        </div>
      </section>
    </a>

    <!-- Join Our Team Section -->
    <section
      class="flex flex-col items-center font-bold max-w-[407px] mt-20 my-20 mx-auto"
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

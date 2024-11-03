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
          imageSrc: "/public/images/profil-4.png",
          ratingSrc: "/src/assets/images/logo/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 2,
          name: "Dianne Russell",
          role: "Content Writer @Company",
          imageSrc: "/public/images/profil-3.png",
          ratingSrc: "/src/assets/images/logo/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 3,
          name: "Jenny Wilson",
          role: "Content Writer @Company",
          imageSrc: "/public/images/profil-2.png",
          ratingSrc: "/src/assets/images/logo/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
        {
          id: 4,
          name: "Leslie Alexa",
          role: "Content Writer @Company",
          imageSrc: "/public/images/profil-1.png",
          ratingSrc: "/src/assets/images/logo/sosmed.png",
          backgroundColor: "bg-zinc-100",
        },
      ],
    };
  },
};
</script>

<template>
  <MainLayout>
    <!-- Background Section -->
    <section
      class="relative bg-cover bg-center bg-no-repeat h-screen"
      style="background-image: url('/public/images/cover.png')"
    >
      <!-- Overlay for darker background effect -->
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Content Section aligned to the left with more bottom spacing and larger text size -->
      <div class="relative z-10 max-w-5xl text-white p-12 space-y-6 ml-10">
        <p class="text-base uppercase font-semibold text-gray-400 mt-20">
          Posted on Startup
        </p>
        <h1 class="text-6xl font-bold leading-tight">
          Step-by-step guide to choosing great font pairs
        </h1>
        <div class="flex items-center space-x-3 text-gray-400">
          <p>By <span class="text-blue-400">James West</span></p>
          <span>|</span>
          <p>May 23, 2022</p>
        </div>
        <p class="text-gray-300 text-xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button
          class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Read More >
        </button>
      </div>
    </section>

    <!-- Featured Post and All Posts Section -->
    <section class="featured-posts flex flex-col mt-20 mb-20 px-20">
      <header
        class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full"
      >
        <h2 class="tracking-tighter">Featured Post</h2>
        <h2 class="tracking-tighter ml-60">All Posts</h2>
        <a href="#" class="my-auto text-base leading-7 text-amber-300"
          >View All</a
        >
      </header>
      <div class="mt-8 w-full max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start p-8 mx-auto w-full font-bold max-md:px-5 max-md:mt-8 max-md:max-w-full"
            >
              <img
                src="/public/images/f-post.png"
                alt="Featured post image"
                class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full"
              />
              <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </p>
              <h3
                class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </h3>
              <p
                class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <a
                href="#"
                class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5"
              >
                Read More &gt;
              </a>
            </div>
          </article>
          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <article
                class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full"
              >
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Deo</span> l Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article
                class="flex flex-col items-start py-7 pr-20 pl-8 bg-orange-50 max-md:px-5 max-md:max-w-full"
              >
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article
                class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full"
              >
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
              <article
                class="flex flex-col items-start py-7 pr-20 pl-8 bg-white max-md:px-5 max-md:max-w-full"
              >
                <p class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> Aug 23, 2021
                </p>
                <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h3>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- About Us and Our Mission Section -->
    <section class="about-us-our-mission flex flex-col">
      <img
        src="/public/images/yellow-blue.png"
        alt=""
        class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full"
      />
      <div class="px-20 py-24 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
            >
              <h2
                class="self-start font-semibold leading-none uppercase tracking-[3px]"
              >
                ABOUT US
              </h2>
              <h3
                class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full"
              >
                We are a community of content writers who share their learnings
              </h3>
              <p
                class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                class="self-start mt-7 text-lg leading-8 text-amber-300"
                >Read More &gt;</a
              >
            </div>
          </article>
          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full"
            >
              <h2 class="font-semibold leading-none uppercase tracking-[3px]">
                Our mision
              </h2>
              <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                Creating valuable content for creatives all around the world
              </h3>
              <p
                class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>
        </div>
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

    <!-- Why We Started Section -->
    <article
      class="flex flex-col items-start text-base font-bold max-md:pr-5 px-20"
    >
      <div
        class="flex relative flex-col items-end px-20 pt-32 max-w-full min-h-[705px] w-[949px] max-md:pt-24 max-md:pl-5"
      >
        <img
          src="/public/images/group.png"
          alt=""
          class="object-cover absolute inset-0 size-full"
        />
        <section
          class="flex relative flex-col p-20 mr-0 max-w-full bg-white w-[706px] max-md:px-5 left-[450px]"
        >
          <h2
            class="self-start font-semibold leading-none text-gray-800 uppercase tracking-[3px]"
          >
            Why we started
          </h2>
          <h1
            class="mt-6 text-5xl tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
          >
            It started out as a simple idea and evolved into our passion
          </h1>
          <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button
            class="gap-3 self-start px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5"
          >
            Discover our story &gt;
          </button>
        </section>
      </div>
    </article>

    <!-- List of Authors Section -->
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

    <section
      class="flex items-center gap-6 px-20 mt-20 text-zinc-500 max-w-full overflow-hidden"
    >
      <header class="flex flex-col">
        <p class="text-xs md:text-sm leading-none opacity-60">We are</p>
        <h2 class="text-lg md:text-2xl font-bold leading-none">Featured in</h2>
      </header>
      <img
        src="/public/images/logo-group.png"
        alt="Featured in logos"
        class="object-contain w-[1200px]"
      />
    </section>

    <!-- Testimonials Section -->
    <main
      class="flex flex-col justify-center items-center px-20 w-full max-md:px-5 max-md:max-w-full"
    >
      <section
        class="flex flex-col justify-center items-center self-stretch px-16 py-20 mt-24 w-full bg-[#faf5e9] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <div
          class="grid grid-cols-2 gap-10 w-full max-w-[1057px] max-md:flex max-md:flex-col max-md:max-w-full"
        >
          <!-- Left Column -->
          <div class="flex flex-col items-start text-base text-gray-800">
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">
              TESTIMONIALS
            </h2>
            <h3 class="mt-3 text-4xl font-bold tracking-tighter leading-10">
              What people say about our blog
            </h3>
            <p class="mt-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>

          <!-- Right Column -->
          <div class="flex items-start gap-8">
            <!-- Divider Line -->
            <div
              class="w-px border border-solid opacity-40 bg-zinc-500 border-zinc-300 h-[310px]"
            ></div>

            <!-- Testimonial Content -->
            <article class="flex flex-col max-md:max-w-full">
              <blockquote class="text-2xl font-bold leading-8 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </blockquote>
              <div
                class="flex flex-wrap gap-5 justify-between items-start mt-20 w-full max-md:mt-10 max-md:max-w-full"
              >
                <div class="flex gap-4 mt-2">
                  <img
                    src="/public/images/profil-5.png"
                    alt="Jonathan Vallem profile picture"
                    class="object-contain shrink-0 w-12 rounded-full aspect-square"
                  />
                  <div class="flex flex-col">
                    <cite class="text-xl font-bold leading-none text-gray-800"
                      >Jonathan Vallem</cite
                    >
                    <p class="text-sm leading-7 text-gray-500">New York, USA</p>
                  </div>
                </div>
                <div
                  class="flex gap-6"
                  role="navigation"
                  aria-label="Testimonial navigation"
                >
                  <button aria-label="Previous testimonial">
                    <img
                      src="/public/images/left-arrow.png"
                      alt=""
                      class="object-contain shrink-0 my-auto w-12 aspect-square"
                    />
                  </button>
                  <button aria-label="Next testimonial">
                    <img
                      src="/public/images/right-arrow.png"
                      alt=""
                      class="object-contain shrink-0 my-auto w-12 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
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

<style scoped>
.category-card:hover .flex {
  background-color: #2563eb;
  border-color: #2563eb;
}

.category-card:hover h3 {
  color: #ffffff;
}

.category-card:hover p {
  color: #ffffff;
}
</style>

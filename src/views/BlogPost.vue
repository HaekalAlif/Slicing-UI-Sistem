<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <!-- Featured Post Section -->
    <section class="bg-gray-100 py-12">
      <header class="flex flex-col font-bold text-gray-800 mt-20 px-20">
        <div class="flex flex-col items-start self-center max-w-full w-[664px]">
          <div
            class="flex gap-4 items-start text-3xl tracking-tighter leading-none text-amber-300"
          >
            <img
              src="/public/images/profil-5.png"
              alt="Profile picture of Andrew Jonson"
              class="object-contain shrink-0 mt-1.5 w-12 rounded-full aspect-square"
            />
            <h1 class="basis-auto opacity-[0.87]">Andrew Jonson</h1>
          </div>
          <div class="ml-16 -mt-6"><h1>Posted on 27th January 2022</h1></div>
          <h2
            class="self-stretch mt-9 text-5xl tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
          >
            Step-by-step guide to choosing great font pairs
          </h2>
          <div class="flex gap-2 mt-9 text-2xl leading-none whitespace-nowrap">
            <img
              src="/public/images/cat-2.png"
              alt=""
              class="object-contain shrink-0 my-auto w-6 aspect-square"
            />
            <span>Startup</span>
          </div>
        </div>
        <img
          src="/public/images/blog-post.png"
          alt="Visual representation of font pairing guide"
          class="object-contain mt-16 w-full aspect-[2.2] max-md:mt-10 max-md:max-w-full"
        />
      </header>
    </section>

    <!-- Main Content Section -->
    <section class="bg-gray-100 py-12">
      <article
        class="flex flex-col items-start text-base leading-7 max-w-[822px] text-zinc-500 mx-auto max-w-3xl"
      >
        <h1
          class="z-10 mt-0 mr-0 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h1>
        <p class="mt-4 mr-0 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <h2
          class="mt-12 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mt-10 max-md:-mr-3.5 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
        <p class="mt-4 max-md:mr-0 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <p class="mt-6 mr-0 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <ul
          class="flex flex-col items-start mt-6 ml-4 text-2xl font-bold leading-none text-gray-900 max-md:max-w-full"
        >
          <li class="opacity-[0.78]">Lorem ipsum dolor sit amet</li>
          <li class="self-stretch opacity-[0.78] max-md:max-w-full">
            Non blandit massa enim nec scelerisque
          </li>
          <li class="opacity-[0.78] max-md:max-w-full">
            Neque egestas congue quisque egestas
          </li>
        </ul>
        <p class="mt-6 max-md:-mr-3.5 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <h2
          class="mt-12 mr-0 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mt-10 max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h2>
        <p class="z-10 mt-4 max-md:mr-0 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
      </article>
    </section>

    <!-- "What to read next" Section -->
    <section class="flex flex-col mt-20 px-20">
      <div class="max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-3">
            <div
              class="flex flex-col grow items-start font-bold text-gray-800 max-md:mt-8"
            >
              <h2
                class="text-4xl tracking-tighter leading-none text-center text-black"
              >
                What to read next
              </h2>
              <img
                src="/public/images/blog-post-1.png"
                alt="Article preview image"
                class="object-contain self-stretch mt-16 w-full aspect-[1.27] max-md:mt-10"
              />
              <p class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3 class="mt-4 text-3xl tracking-tighter leading-10">
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="self-stretch mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
              <img
                src="/public/images/blog-post-2.png"
                alt="Article preview image"
                class="object-contain w-full aspect-[1.27]"
              />
              <p
                class="self-start mt-8 text-sm font-medium leading-none text-amber-300"
              >
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3
                class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10"
              >
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow mt-28 text-gray-800 max-md:mt-10">
              <img
                src="/public/images/blog-post-3.png"
                alt="Article preview image"
                class="object-contain w-full aspect-[1.27]"
              />
              <p
                class="self-start mt-8 text-sm font-medium leading-none text-amber-300"
              >
                By <span class="text-amber-300">John Doe</span> l Aug 23, 2021
              </p>
              <h3
                class="self-start mt-4 text-3xl font-bold tracking-tighter leading-10"
              >
                A UX Case Study Creating a Studious Environment for Students:
              </h3>
              <p class="mt-4 text-base leading-7 opacity-70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </article>
        </div>
      </div>
      <hr
        class="mt-16 w-full border border-solid opacity-30 bg-zinc-500 border-zinc-500 min-h-[1px] max-md:mt-10 max-md:max-w-full"
      />
    </section>
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

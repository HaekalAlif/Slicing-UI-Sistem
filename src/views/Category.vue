<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <header class="flex flex-col text-base text-center text-gray-800">
      <section
        class="flex flex-col justify-center items-center p-20 w-full bg-[#F4F0F8] max-md:px-5 max-md:max-w-full"
      >
        <div class="flex flex-col items-center max-w-full w-[472px]">
          <h1
            class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl"
          >
            Business
          </h1>
          <p
            class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <nav class="mt-8 font-medium leading-none uppercase tracking-[3px]">
            <a href="/blog" class="hover:underline">Blog</a> &gt;
            <a href="/blog" class="hover:underline">Business</a>
          </nav>
        </div>
      </section>
    </header>
    <section
      class="category-section flex flex-col rounded-none mt-20 px-20 mb-20"
    >
      <div class="w-full max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <aside class="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8">
              <img
                src="/public/images/category-1.png"
                alt=""
                class="object-contain w-full aspect-[0.94]"
              />
              <img
                src="/public/images/category-1.png"
                alt=""
                class="object-contain mt-8 w-full aspect-[0.94]"
              />
              <img
                src="/public/images/category-1.png"
                alt=""
                class="object-contain mt-8 w-full aspect-[0.94] max-md:mr-0.5"
              />
            </div>
          </aside>
          <main class="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
              <div class="max-md:mr-0.5 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                  <article
                    class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full"
                    >
                      <h2
                        class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]"
                      >
                        Business
                      </h2>
                      <h3
                        class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
                      >
                        Top 6 free website mockup tools 2022
                      </h3>
                      <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec.
                      </p>
                    </div>
                  </article>
                  <aside
                    class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col w-full text-3xl font-bold tracking-tighter leading-none text-gray-800 whitespace-nowrap max-md:mt-10"
                    >
                      <h2
                        class="self-start text-4xl tracking-tighter leading-none"
                      >
                        Categories
                      </h2>
                      <div
                        class="flex gap-4 p-6 mt-10 text-white bg-blue-600 max-md:px-5"
                      >
                        <img
                          src="/public/images/cat-2.png"
                          alt=""
                          class="object-contain shrink-0 w-12 aspect-square"
                        />
                        <span class="grow shrink my-auto w-[174px]"
                          >Startup</span
                        >
                      </div>
                      <div
                        class="flex gap-4 p-6 mt-6 border-2 border-solid border-stone-300 max-md:px-5"
                      >
                        <img
                          src="/public/images/cat-1.png"
                          alt=""
                          class="object-contain shrink-0 w-12 aspect-square"
                        />
                        <span class="grow shrink my-auto w-[174px]"
                          >Business</span
                        >
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
              <div class="mt-6 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                  <article
                    class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col grow mt-14 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full"
                    >
                      <h2 class="self-start uppercase tracking-[3px] mt-14">
                        Business
                      </h2>
                      <h3
                        class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
                      >
                        Step-by-step guide to choosing great font pairs
                      </h3>
                      <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec.
                      </p>
                      <h2
                        class="self-start mt-36 uppercase tracking-[3px] max-md:mt-10 mt-20"
                      >
                        business
                      </h2>
                      <h3
                        class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
                      >
                        Ten free foogle fonts that you should use
                      </h3>
                      <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec.
                      </p>
                    </div>
                  </article>
                  <aside
                    class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full"
                  >
                    <div
                      class="flex flex-col w-full text-sm font-bold leading-8 text-gray-800 max-md:mt-10"
                    >
                      <div
                        class="flex gap-4 p-6 text-3xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid border-stone-300 max-md:px-5 max-md:mr-0.5"
                      >
                        <img
                          src="/public/images/cat-3.png"
                          alt=""
                          class="object-contain shrink-0 w-12 aspect-square"
                        />
                        <span class="grow shrink my-auto w-[174px]"
                          >Economy</span
                        >
                      </div>
                      <div
                        class="flex gap-4 p-6 mt-6 text-3xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid border-stone-300 max-md:px-5 max-md:mr-0.5"
                      >
                        <img
                          src="/public/images/cat-4.png"
                          alt=""
                          class="object-contain shrink-0 w-12 aspect-square"
                        />
                        <span class="grow shrink my-auto w-[174px]"
                          >Technology</span
                        >
                      </div>
                      <h2
                        class="self-start mt-12 text-4xl tracking-tighter leading-none max-md:mt-10"
                      >
                        All Tags
                      </h2>
                      <div class="flex gap-4 mt-6 w-full whitespace-nowrap">
                        <button
                          class="gap-2.5 self-stretch px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5"
                        >
                          Business
                        </button>
                        <button
                          class="gap-2.5 self-stretch px-9 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5"
                        >
                          Experience
                        </button>
                      </div>
                      <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
                        <button
                          class="gap-2.5 self-stretch py-2 pr-7 pl-7 rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5"
                        >
                          Screen
                        </button>
                        <button
                          class="gap-2.5 self-stretch px-12 py-2 rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5"
                        >
                          Technology
                        </button>
                      </div>
                      <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
                        <button
                          class="gap-2.5 px-14 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5"
                        >
                          Marketing
                        </button>
                        <button
                          class="gap-2.5 px-10 py-2 rounded-3xl border-2 border-solid border-zinc-500 max-md:px-5"
                        >
                          Life
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="mt-8 max-w-full w-[838px]">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <img
              src="/public/images/category-1.png"
              alt=""
              class="object-contain grow w-full aspect-[0.94] max-md:mt-8"
            />
          </div>
          <article class="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col self-stretch my-auto text-base max-md:mt-10 max-md:max-w-full"
            >
              <h2
                class="self-start font-semibold leading-none text-amber-300 uppercase tracking-[3px]"
              >
                Business
              </h2>
              <h3
                class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
              >
                What did I learn from doing 50+ design sprints?
              </h3>
              <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

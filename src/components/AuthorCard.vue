<template>
  <article
    :class="['flex flex-col w-3/12 max-md:ml-0 max-md:w-full', backgroundColor]"
  >
    <div
      class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8"
    >
      <img
        :src="imageSrc"
        :alt="name"
        class="object-contain w-32 max-w-full rounded-full aspect-square"
      />
      <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">
        {{ name }}
      </h2>
      <p class="self-stretch text-sm text-center text-zinc-500">
        {{ role }}
      </p>
      <img
        :src="ratingSrc"
        alt="Author rating"
        class="object-contain mt-5 w-28 max-w-full aspect-[6.58]"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: "AuthorCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    ratingSrc: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "bg-zinc-100",
    },
  },
};
</script>

<template>
    <div class="iframe-container py-5 flex flex-col gap-2 justify-between items-center">
        <section class="w-full flex flex-col gap-2 px-3 md:px-0 text-center">
        <h1 class="font-thin text-4xl font-love text-red-700 md:text-5xl">
          Today</h1>
        <h1 class="font-thin text-4xl font-love text-red-700 md:text-5xl">
          I Have Loved You</h1>
        <h1 class="font-thin text-4xl font-love text-red-700 md:text-5xl">
          For 730 Days ♡</h1>
        </section>
          <section class="w-full h-screen ">
            <iframe :src="src" frameborder="0" scrolling="no" class="w-full h-full"></iframe>
        </section>
    </div>
</template>
<script setup>
defineProps({
    src: {
        type: String,
        required: true
    }
});
</script>
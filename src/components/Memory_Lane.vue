<template>
    <div class="iframe-container  py-16 flex flex-col gap-4 justify-between items-center">
        <section class="w-full flex flex-col gap-4 px-3 md:px-0 text-center">
        <h1 class="font-thin text-4xl font-love text-red-700 md:text-5xl whitespace-nowrap">
          Memories
        </h1>
        <p class=" font-love font-thin text-2xl text-black tracking-wider">Cherished moments shared between <span class=" text-[#2ca1e9] font-bold">Youssey</span> & <span class=" text-[#ff69b4] font-bold">noney</span>.</p>
        </section>
        <section class="w-full h-screen md:px-9">
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
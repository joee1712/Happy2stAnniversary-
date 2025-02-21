<template>
    <div class="iframe-container  py-16 flex flex-col gap-4 justify-center items-center">
        <h1 class="text-4xl md:text-5xl font-love font-semibold text-red-700 z-10">Our Time Together</h1>
        <p class="text-1xl md:text-3xl font-love font-semibold text-red-600 z-10">
        Every sec with you feels like a lifetime of love .</p> 
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
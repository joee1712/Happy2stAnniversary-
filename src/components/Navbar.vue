<template>
    <div class="flex flex-col px-6 py-5 justify-between items-center">
        <div class="flex justify-between items-center w-full">
            <p class="font-love-light font-semibold text-xl tracking-wide">
                To My Lovely Girl <span class="text-red-700"> Non ♡ </span>
            </p>
            <div class="lg:hidden">
                <button @click="isNavOpen = !isNavOpen" class="text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            <nav class="hidden lg:flex justify-center items-center gap-6 font-love font-semibold text-xl text-red-700 transition-all duration-300 ease-in-out">
                <a v-for="item in navItems" :key="item.id" @click.prevent="scrollToSection(item.id)"
                    class="cursor-pointer">
                    {{ item.label }}
                </a>
            </nav>
        </div>
        <nav :class="[
            'flex flex-col justify-center items-center gap-6 font-love font-semibold text-xl text-red-700 transition-all duration-300 ease-in-out',
            { 'max-h-0 opacity-0 overflow-hidden': !isNavOpen, 'max-h-72 opacity-100': isNavOpen }
        ]">
            <a v-for="item in navItems" :key="item.id" @click.prevent="scrollToSection(item.id)" class="cursor-pointer">
                {{ item.label }}
            </a>
        </nav>
    </div>
    <hr class="border-t-2 border-gray-200 shadow-md">
</template>

<script setup>
import { ref } from 'vue';
const navItems = ref([
    { id: 'firstMet', label: 'Falling in Love' },
    { id: 'memoryLane', label: 'Memories' },
    { id: 'celebrating', label: 'Celebrating and Feelings' },
    { id: 'Time', label: 'Time in loving you' },
    { id: 'keeps_on_loving', label: 'Love' },
    { id: 'heart', label: 'What\'s Inside My Heart?' },
    { id: 'Message', label: 'Message' },
    { id: 'fireworks', label: 'Fireworks' },
]);
const isNavOpen = ref(false);

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
nav {
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

@media (max-width: 1023px) {
    nav {
        flex-direction: row; 
        flex-wrap: wrap; 
        gap: 1rem; 
        padding: 0.5rem; 
        justify-content: center; 
        align-items: center;
    }

    .max-h-0 {
        max-height: 0;
        overflow: hidden;
    }

    .max-h-72 {
        max-height: 20rem; 
        overflow-y: auto; 
    }

    .opacity-0 {
        opacity: 0;
    }

    .opacity-100 {
        opacity: 1;
    }
}
@media (min-width: 1024px) {
    nav {
        flex-direction: row; 
        gap: 1.5rem; 
    }
}
</style>
<template>
    <div class="flex md:flex-row flex-col justify-between gap-4 items-center md:px-9 py-16">
        <section class="w-full bg-gray-100 py-9 rounded-3xl">
            <ModalVideo 
                :thumb="thumbProps.thumb" 
                :thumbWidth="thumbProps.thumbWidth" 
                :thumbHeight="thumbProps.thumbHeight"
                :thumbAlt="thumbProps.thumbAlt" 
                :video="modalVideo" 
                :videoWidth="thumbProps.videoWidth"
                :videoHeight="thumbProps.videoHeight" 
                :isModalOpen="isModalOpen" 
                @close="closeModal" 
            />
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ModalVideo from '@/components/ModalVideo.vue';

const thumbProps = {
    thumb: "/in_love2.png",
    thumbWidth: 400,
    thumbHeight: 100,
    thumbAlt: "loving you",
    video: "/sec.mp4", 
    videoWidth: "100%",
    videoHeight: "100%",
};

// Reactive states
const isModalOpen = ref(false); // Track modal open state
const modalVideo = ref(thumbProps.video); // Initialize with the original video

// Function to open the modal with another video
const openModalWithAnotherVideo = () => {
    modalVideo.value = "/keep_on_loving_you.mp4"; // Change to the new video path
    isModalOpen.value = true; // Open the modal
};

// Function to close the modal
const closeModal = () => {
    isModalOpen.value = false; // Close the modal
    modalVideo.value = thumbProps.video; // Reset to original video when closed
};

</script>

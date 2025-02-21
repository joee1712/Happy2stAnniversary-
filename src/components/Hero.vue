<template>
  <div
    class="px-0 md:px-9 py-16 flex flex-col justify-between gap-14 relative overflow-hidden"
  >
    <section
      class="md:px-0 px-3 flex flex-col gap-4 md:gap-0 md:flex-row justify-between"
    >
      <div class="w-full text-4xl">
        <h1 class="font-love text-3xl text-black tracking-wider">
          A Journey of Love:
        </h1>
        <h1
          class="font-love-light font-bold text-4xl text-black tracking-wider"
        >
          <span class="text-[#2ca1e9]">Youssef</span
          ><span class="font-love text-4xl font-thin"> & </span
          ><span class="text-[#ff69b4]">Haneen</span>
        </h1>
      </div>
      <div class="w-full font-love">
        <p>
          Welcome to our special corner of the internet, where every moment
          we've shared comes alive. Join me in celebrating
          <span class="font-love-light text-2xl font-semibold text-red-700"
            >how much Youssef loves Haneen</span
          >, filled with cherished memories and unforgettable experiences.
        </p>

        <div class="flex flex-wrap items-center gap-2 mt-6">
          <!-- Container for "Click on" with inline-flex -->
          <div class="inline-flex items-baseline gap-1">
            <p class="font-love font-thin">Click</p>
            <p class="font-love font-thin">on</p>
          </div>
          <button
            class="px-5 py-3 border-2 border-[#2ca1e9] bg-[#2ca1e9] text-white font-love text-xl"
            @click="generateLoveNony"
          >
            Youssey
          </button>
          <p class="font-love font-thin text-[#ff69b4]">
            o<span class="text-[#2ca1e9]">r</span>
          </p>
          <button
            class="px-5 py-3 border-2 border-[#ff69b4] font-love text-xl text-white bg-[#ff69b4]"
            @click="generateLoveYoussef"
          >
            noney
          </button>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-9 rounded-3xl">
      <ModalVideo
        :thumb="thumbProps.thumb"
        :thumbWidth="thumbProps.thumbWidth"
        :thumbHeight="thumbProps.thumbHeight"
        :thumbAlt="thumbProps.thumbAlt"
        :video="thumbProps.video"
        :videoWidth="thumbProps.videoWidth"
        :videoHeight="thumbProps.videoHeight"
      />
    </section>

    <!-- Love Texts -->
    <div class="love-texts">
      <div
        v-for="(text, index) in loveTexts"
        :key="`text-${index}`"
        class="love-text"
        :style="{
          top: text.top,
          left: text.left,
          animation: `fly ${text.duration}s ease-in-out`,
          color: text.color,
        }"
      >
        {{ text.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalVideo from "@/components/ModalVideo.vue";

const thumbProps = {
  thumb: "/in_love1.png",
  thumbWidth: 600,
  thumbHeight: 100,
  thumbAlt: "Loving each other",
  video: "/iam_in_love.mp4",
  videoWidth: "100%",
  videoHeight: "100%",
};

const loveTexts = ref([]);

const generateLoveNony = () => {
  for (let i = 0; i < 10; i++) {
    createLoveText("Love Nony", "#ff69b4" ); // red color for "Love Nony"
  }
};

const generateLoveYoussef = () => {
  for (let i = 0; i < 10; i++) {
    createLoveText("Love Youssey","#2ca1e9"); // Pink color for "Love Youssef"
  }
};

const createLoveText = (content, color) => {
  const text = {
    top: `${Math.random() * 100}vh`, // Random vertical position
    left: `${Math.random() * 100}vw`, // Random horizontal position
    duration: 2, // Duration of the animation
    content: content, // Text content
    color: color, // Text color
  };
  loveTexts.value.push(text);

  // Remove text after 5 seconds
  setTimeout(() => {
    loveTexts.value.shift(); // Remove the text after it animates
  }, text.duration * 1000);
};
</script>

<style scoped>
.relative {
  position: relative; /* Ensure the container is relative for absolute children */
}

.love-texts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevent interaction with text */
}

.love-text {
  position: absolute;
  font-family: "Loved by the King", "serif"; /* Use a fancy font for the text */
  font-size: 1.5rem;
  pointer-events: none; /* Prevent interaction with text */
}

@keyframes fly {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px); /* Change this value for higher flight */
    opacity: 0; /* Fade out */
  }
}
</style>

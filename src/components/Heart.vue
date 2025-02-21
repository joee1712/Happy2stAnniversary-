<template>
  <div
    ref="section"
    class="flex justify-center items-center h-96 bg-gradient-to-r my-16 from-pink-300 to-red-500 overflow-hidden relative w-full"
  >
    <div
      v-for="n in 35"
      :key="n"
      class="heartss"
      :style="heartStyle(n)"
      style="z-index: 1"
    ></div>

    <!-- Click Me text -->
    <transition name="fade">
      <p
        class="animated-text control-text absolute text-white text-[17px] sm:text-4xl font-bold w-full text-center top-72"
        style="z-index: 3"
      >
        Tap Youssef's heart to see what's inside !
      </p>
    </transition>

    <!-- Heart container -->
    <div
      v-if="!isHeartClicked"
      @click="animateHeart"
      class="absolute top-1/2 left-[57%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 cursor-pointer"
      style="z-index: 2"
    >
      <div
        class="absolute inset-0 bg-red-700 transform w-full h-full heart hide"
      ></div>
      <div
        class="absolute inset-0 bg-red-600 transform rotate-45 w-full h-full heart show"
      ></div>
      <div
        class="absolute inset-0 bg-red-600 transform -rotate-45 w-full h-full heart show"
      ></div>
    </div>

    <!-- Hidden photos and text until animation -->
    <transition-group name="photo" tag="div">
      <div
        v-for="(photo, index) in photos"
        :key="`photo-${index}`"
        v-if="photosVisible"
        class="absolute top-1/2 left-[57%] md:left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 heart-frame flex justify-center items-center"
        style="z-index: 2"
      >
        <img :src="photo" class="w-full h-full object-cover" />
      </div>
    </transition-group>

    <transition name="fade">
      <p
        v-if="showText && isHeartClicked"
        class="animated-text tracking-wider absolute text-white text-2xl italic font-extrabold w-full text-center top-72"
        style="z-index: 3"
      >
        It's only <span class="text-4xl">you 🫵🏻</span>
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

// Photos array (add your images here)
const photos = [
  "https://i.ibb.co/kB8wDF7/non.jpg",
  // Add more photos as needed
];

// For positioning the photos
const photosVisible = ref(false);
const showText = ref(false);
const isHeartClicked = ref(false);

const section = ref(null); // Ref for the section container

// Heart pumping animation
onMounted(() => {
  const heartElements = document.querySelectorAll(".heart");
  gsap.to(heartElements, {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
});

// Heart animation function
const animateHeart = () => {
  const heartElements = document.querySelectorAll(".heart");
  const show = document.querySelectorAll(".show");
  const hide = document.querySelectorAll(".hide");
  const text = document.querySelectorAll(".control-text");

  hide.forEach((element) => {
    element.style.display = "none";
  });

  text.forEach((element) => {
    element.classList.add("click-me-text");
  });

  // Set position: absolute for elements with the 'show' class
  show.forEach((element) => {
    element.style.display = "flex";
  });

  // Stop the pulsing animation of the big heart only
  gsap.killTweensOf(heartElements);

  // GSAP heart breaking animation for the big heart only
  gsap.to(heartElements, {
    scale: 0.8,
    rotation: 15,
    duration: 0.3,
    onComplete: () => {
      gsap.to(heartElements, {
        scale: 0,
        duration: 0.5,
        onComplete: () => {
          // Make photos visible
          photosVisible.value = true;
          isHeartClicked.value = true;

          // Ensure DOM updates before applying animations
          nextTick(() => {
            showText.value = true; // Show the text after photos appear
          });
        },
      });
    },
  });

  // Fade out Click Me text after clicking the heart
  setTimeout(() => {
    showText.value = false; // This will control the visibility of the text
  }, 100); // A slight delay before the text fades out
};

// Function to generate random styles for hearts
const heartStyle = (n) => {
  const randomLeft = Math.random(); // Random position from 0 to 1
  const randomDuration = 5 + Math.random() * 10; // Random duration between 5 and 15 seconds
  const randomDelay = Math.random() * 10; // Random delay between 0 and 5 seconds

  return {
    "--left": randomLeft,
    "animation-duration": `${randomDuration}s`,
    "animation-delay": `${randomDelay}s`,
  };
};
</script>

<style scoped>
.animated-text {
  font-family: "Handlee", serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.05);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}

.heart {
  clip-path: path(
    "M120 40.248c-31.48-54.02-120-38.25-120 29.44 0 46.61 55.71 94.27 120 158.08 60.86-60.51 120-110.735 120-158.08 0-67.92-88.75-82.306-120-29.44z"
  );
  transition: transform 0.15s ease;
}

.heart-frame {
  clip-path: path(
    "M120 40.248c-31.48-54.02-120-38.25-120 29.44 0 46.61 55.71 94.27 120 158.08 60.86-60.51 120-110.735 120-158.08 0-67.92-88.75-82.306-120-29.44z"
  );
  overflow: hidden;
}

.photo-enter-active,
.photo-leave-active {
  transition: all 0.5s ease;
}

.show {
  display: none;
}

.photo-enter-from {
  opacity: 0;
}

.photo-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.click-me-text {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
.heartss {
  position: absolute;
  top: -10%;
  background-color: pink;
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 0 0;
  transform: rotate(-45deg);
  animation: fall linear infinite, sway ease-in-out infinite;
  opacity: 0.8;
  z-index: 1;
}

.heartss::before,
.heartss::after {
  content: " ";
  position: absolute;
  background-color: pink;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.heartss::before {
  top: -10px;
  left: 0;
}

.heartss::after {
  left: 10px;
  top: 0;
}

@keyframes fall {
  0% {
    top: -10%;
    left: calc(100% * var(--left) - 10px);
    transform: rotate(-45deg);
  }

  100% {
    top: 110%;
    left: calc(100% * var(--left) - 10px);
    transform: rotate(45deg);
  }
}

@keyframes sway {
  0%,
  100% {
    transform: translateX(0) rotate(-45deg);
  }

  50% {
    transform: translateX(20px) rotate(-45deg);
  }
}
</style>

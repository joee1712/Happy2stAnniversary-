<template>
  <div class="flex flex-col items-center justify-center py-16 md:px-9">
    <section
      class="w-full flex flex-col gap-3 px-3 md:px-0 bg-gray-100 py-9 rounded-3xl text-center"
    >
      <h1 class="font-bold text-2xl md:text-3xl font-love text-black m-auto">
        When I fell in <span class="text-red-700">love</span> with you
      </h1>
      <p class="py-2 px-9 font-love text-center">
        I still remember the first day I saw you, felt like I was dreaming of
        how such a beautiful girl was passing by me. The time almost froze, and
        I wasn't concerned about anything but meditating on how beautiful you
        are. You took my breath away, and I started wondering if that was a real
        human or an angel that came to me from the sky.
      </p>
      <p class="py-2 px-9 font-love text-center"> My heart skipped a beat,
        my mind went blank, and for a moment, the world around me faded into
        nothingness. It was as if the universe itself had orchestrated that
        moment just for me to witness your beauty, leaving me in awe, lost
        between reality and a dream I never wanted to wake up from. 
      </p>
      <p class="py-2 px-9 font-love text-center">Every detail
        about you was mesmerizing the way your hair danced with the wind, how
        your eyes carried the depth of an endless ocean, and the way your
        presence illuminated everything around you. I felt like time had gifted
        me a glimpse of perfection, and in that instant, I knew that moment
        would be etched in my heart forever.
      </p>
      <h1 class="m-auto font-bold text-4xl font-love text-red-700">
        I love you
      </h1>
    </section>

    <section class="flex flex-col items-center justify-center mt-6">
      <button
        @click="toggleAudio"
        class="px-6 py-3 font-bold text-lg rounded-full shadow-md transition flex items-center justify-center"
        :class="
          isPlaying
            ? 'bg-gray-300 hover:bg-gray-200'
            : 'bg-red-700 hover:bg-red-600'
        "
      >
        <span v-if="isPlaying"
          ><img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/stop.png"
            alt="stop"
        /></span>
        <span v-else
          ><img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-glyphs/30/play--v1.png"
            alt="play--v1"
        /></span>
      </button>

      <audio ref="audioPlayer">
        <source src="../../public/voice.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <h1 class="text-2xl font-love text-black text-center mt-4">
        Hit play and listen closely :)
      </h1>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const audioPlayer = ref(null);
const isPlaying = ref(false);

const toggleAudio = () => {
  if (audioPlayer.value) {
    if (isPlaying.value) {
      audioPlayer.value.pause();
      audioPlayer.value.currentTime = 0;
    } else {
      audioPlayer.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};
</script>

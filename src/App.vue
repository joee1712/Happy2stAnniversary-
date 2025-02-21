<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import First_met from './components/First_met.vue'
import Memory_Lane from './components/Memory_Lane.vue'
import Heart from './components/Heart.vue'
import Celebrating from './components/Celebrating.vue'
import Message from './components/Message.vue'
import keeps_on_loving from './components/keeps_on_loving.vue'
import card from './components/Time.vue'
import Fireworks from './components/Fireworks.vue'
import Swal from 'sweetalert2'
import { onMounted } from 'vue'
onMounted(() => {
  Swal.fire({
    title: 'Happy 2ˢᵗ Anniversary',
    text: 'I may not always find the right words, but my heart is full of love for you. So, as a programmer, I built this for you hoping it brings you happines',
    imageUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajh4c2RnN212cWF6cnR3NTY5b3I0dzJocDZ2bHRnOG16NTRoOXZ4ZCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Om39zFBge6KdVVq58H/giphy.gif',
    imageWidth: 100,
    imageHeight: 100,
    confirmButtonText: 'Okey',
    confirmButtonColor: '#b91c1c' 
  })
})
</script>
<template>
  <Navbar />
  <div id="hero">
    <Hero />
  </div>
  <div id="firstMet">
    <First_met />
  </div>
  <div id="memoryLane">
    <Memory_Lane src="https://joee1712.github.io/joee1712.github.io-swapper/" />
  </div>
  <div id="celebrating">
    <Celebrating />
  </div>
  <div id="Time">
    <card src="https://joee1712.github.io/joee1712.github.io-couner/" />
  </div>
  <div id="keeps_on_loving">
    <keeps_on_loving />
  </div>
  <div id="heart">
    <Heart />
  </div>
  <div id="Message">
    <Message />
  </div>
  <div id="fireworks">
    <Fireworks src="https://joee1712.github.io/joee1712.github.io-fireworks/" />
  </div>
</template>
<style scoped></style>

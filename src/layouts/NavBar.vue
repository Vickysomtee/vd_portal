<script setup>
import { computed } from 'vue'

const greetings = computed(() => {
  let time = new Date()
  const hour = time.getHours()

  if (hour >= 4 && hour <= 11) {
    return 'Good Morning🌞'
  } else if (hour >= 12 && hour <= 16) {
    return 'Good Afternoon 🌕'
  } else if (hour >= 17 && hour <= 20) {
    return 'Good Evening 🌘'
  } else if (hour >= 21 || hour <= 3) {
    return 'Good Night 🌠'
  }
})
</script>

<template>
  <main class="w-ful flex justify-between h-[80px] bg-[#EAEDFF] py-[15px] px-[40px] text-[#343434]">
    <div class="pt-[12px] text-[13px] font-extrabold">{{ greetings }}</div>
    <div class="flex">
      <img src="@/assets/icons/profile.svg" alt="" class="h-12 mr-[17px]" />
      <div class="pt-[7px]">
        <p class="text-[14px] font-black">Rev. Fr Theodore</p>
        <p class="text-[11px]">Vocational Director</p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

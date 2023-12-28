<script setup>
import Api from '../../Api';
const props = defineProps({
  title: String,
  total: Number
})

const emits = defineEmits(['view'])

const viewSeminarians = () => {
  emits('view')
}

</script>

<template>
  <main
    class="w-[30%] h-[200px] bg-white shadow-[0_5px_16px_0px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] mr-[30px] mt-[20px] grid content-between"
  >
    <div class="text-[#343434]">
      <h1 class="text-[15px]">{{ title }}</h1>
      <div class="mt-[10px] text-[25px]">{{ total }}</div>
    </div>
    <div @click="viewSeminarians" class="text-right text-[#061C82] text-[15px] mt-[10px] cursor-pointer">View all</div>
  </main>
</template>

<style></style>

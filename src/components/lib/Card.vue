<template>
  <main class="w-[32%] h-[200px] bg-white shadow-[0_5px_16px_0px_rgba(0,0,0,0.25)] rounded-[10px] p-[20px] grid content-between">
    <div
      class="text-[#343434]"
    >
      <h1 class="text-[22px]">{{ title }}</h1>
      <div class="mt-[10px] text-[40px]">{{ total }}</div>
    </div>
    <div class="text-right text-[#061C82] text-[15px] mt-[10px]">View all</div>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    total: Number,
  }
}
</script>

<style></style>

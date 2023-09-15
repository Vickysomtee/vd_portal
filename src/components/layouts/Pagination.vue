<script setup>
</script>

<template>
  <div class="flex justify-between w-[400px] h-[30px] mx-auto my-[10px]">
    <img class="w-[17px]" src="@/assets/icons/chevron-left.svg" alt="">
    <div class="flex justify-between text-[#343434]">
        <div class="px-[12px] py-[3px] bg-[#061C82] rounded-[4px] mr-[10px] text-white">1</div>
        <div class="px-[12px] py-[3px] rounded-[4px] mr-[10px]">2</div>
        <div class="px-[12px] py-[3px] rounded-[4px] mr-[10px]">3</div>
        <div class="px-[12px] py-[3px] rounded-[4px] mr-[10px]">4</div>
        <div class="w-[13px] mr-[10px] relative top-[3px]">...</div>
        <div class="px-[12px] py-[3px] rounded-[4px] mr-[10px]">5</div>


    </div>
    <img class="w-[17px]" src="@/assets/icons/chevron-right.svg" alt="">

  </div>
</template>

<style scoped>
.collection {
  display: grid;
  padding-left: 20px;
  align-content: space-between;
  letter-spacing: 0.2px;
  color: #343434
}

.collection:before {
  content: ' ';
  border-left: 3px solid #061c82;
  position: relative;
  height: 50px;
  right: 20px;
  top: 25px;
}
</style>

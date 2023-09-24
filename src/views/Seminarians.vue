<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import Pagination from '../layouts/Pagination.vue';
</script>

<template>
  <MainLayout title="Seminarians">
    <div class="bg-[#F8F8F8] p-[20px] w-[50%] rounded-lg mb-[40px]">
      <div class="collection">
        <div class="relative bottom-[30px] font-bold text-[15px]">
          Number of seminarians - Philosophy
        </div>

        <div class="relative bottom-[10px] font-bold text-[20px]">200</div>
      </div>
    </div>
    <div class="flex justify-between bg-[#061C82] p-[15px] font-bold text-white text-[15px] mb-4">
      <div class="w-[20%]">Name</div>
      <div class="w-[25%]">Parish</div>
      <div class="w-[20%]">Year Of Admission</div>
      <div class="w-[20%]">Class</div>
      <div class="w-[15%]">Status</div>
    </div>

    <div class="flex justify-between bg-[#F8F8F8] p-[15px] text-[#343434] text-[14px] mt-2">
      <div class="w-[20%]">John Adebiyi</div>
      <div class="w-[25%]">St Denis, Bariga</div>
      <div class="w-[20%]">2019/2020</div>
      <div class="w-[20%]">Philosophy 1</div>
      <div class="w-[15%]">Active</div>
    </div>

    <div class="flex justify-between bg-[#F8F8F8] p-[15px] text-[#343434] text-[14px] mt-2 mb-[50px]">
      <div class="w-[20%]">John Adebiyi</div>
      <div class="w-[25%]">St Denis, Bariga</div>
      <div class="w-[20%]">2019/2020</div>
      <div class="w-[20%]">Philosophy 1</div>
      <div class="w-[15%]">Active</div>
    </div>

    <pagination/>
  </MainLayout>
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

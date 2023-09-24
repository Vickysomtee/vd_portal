<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import PersonalInfoVue from './seminarian/PersonalInfo.vue';
import Report from './seminarian/Report.vue';
</script>


<template>
 <MainLayout title="Seminarian Details">
    <div class="flex justify-between w-10/12">
      <div class=" mb-12">
      <img src="@/assets/icons/profile.svg" alt="" class="h-20 mr-[17px]" /> 
      <div class="font-bold text-lg text-[#343434] mt-4">Mitchel Ogbu</div>
    </div>
    <button
      class="w-[200px] h-[50px] bg-green-500 text-[15px] font-black mt-8 py-2 px-7 rounded text-white"
    >
      Generate Report
    </button>
    </div>
    <div class="bg-[#F8F8F8] w-10/12 p-[50px] border-2 rounded-[5px]">
        <div class="flex border-b-4 h-[35px] ">
            <div class="w-[200px] h-[35px] text-[#343434] font-bold border-b-4 border-[#061C82] mr-[40px]">
                Personal Info
            </div>
            <div class="w-[200px] text-[#343434] font-bold mr-[40px]">
                Reports
            </div>
        </div>
        <!-- <PersonalInfoVue/> -->
        <Report/>
    </div>
 </MainLayout>
</template>

<style scoped>

</style>

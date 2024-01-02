<script setup>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import VueHtml2pdf from 'vue-html2pdf'

import Api from '../../Api';
import MainLayout from '../../layouts/MainLayout.vue';
import PersonalInfoVue from './PersonalInfo.vue';
import Report from './Report.vue';

const route = useRoute();
const tab = ref(0)
let seminarian = ref({})

onMounted(async () => {

  const seminarianId = route.params.id
  const { data } = await Api().get(`seminarians/${seminarianId}`)
  seminarian.value = data.seminarian
})

</script>


<template>
 <MainLayout title="Seminarian Details">
    <div class="flex justify-between w-10/12">
      <div class=" mb-12">
      <img :src="seminarian.profile_image" alt="" class="h-[150px] w-[150px] rounded-[50%] mr-[17px]" /> 
      <div class="font-bold text-lg text-[#343434] mt-4">{{seminarian.first_name}} {{ seminarian.last_name }}</div>
    </div>
    <button
      class="w-[200px] h-[50px] bg-green-500 text-[15px] font-black mt-8 py-2 px-7 rounded text-white"
    >
      Generate Report
    </button>
    </div>
    <div class="bg-[#F8F8F8] w-10/12 p-[50px] border-2 rounded-[5px]">
        <div class="flex border-b-4 h-[35px] ">
            <div class="w-[200px] h-[35px] text-[#343434] font-bold mr-[40px] pl-4 cursor-pointer" :class="{'border-b-4 border-[#061C82]' : tab === 0,}" @click="tab = 0">
                Personal Info
            </div>
            <div class="w-[200px] h-[35px] text-[#343434] font-bold mr-[40px] pl-4 cursor-pointer" :class="{'border-b-4 border-[#061C82]' : tab === 1,}" @click="tab = 1">
                Reports
            </div>
        </div>
        <PersonalInfoVue v-if="tab === 0" :seminarian="seminarian"/>
        <Report v-if="tab === 1" :seminarian="seminarian"/>
    </div>
 </MainLayout>
</template>

<style scoped>

</style>

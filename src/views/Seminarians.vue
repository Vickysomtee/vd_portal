<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import Api from '../Api'
import MainLayout from '../layouts/MainLayout.vue'
import Pagination from '../layouts/Pagination.vue'

const router = useRouter()
const route = useRoute()
let seminarians = ref([])

onMounted(async () => {
  if (route.query) {
    const queries = route.query
    const { data } = await Api().get(`seminarians?${(Object.keys(queries))}=${Object.values(queries)}`)
    seminarians.value = data
  } else {
    const { data } = await Api().get('seminarians')
  seminarians.value = data
  }
})

const openSeminarian = (id) => {
  router.push({ name: 'seminarian', params: { id } })
}
</script>

<template>
  <MainLayout title="Seminarians">
    <div class="bg-[#F8F8F8] p-[20px] w-[50%] rounded-lg mb-[40px]">
      <div class="collection">
        <div class="relative bottom-[30px] font-bold text-[15px]">
          Number of seminarians
        </div>

        <div class="relative bottom-[10px] font-bold text-[20px]">{{ seminarians.length }}</div>
      </div>
    </div>

    <div class="overflow-auto">
      <div
        class="flex justify-between bg-[#061C82] p-[15px] font-bold text-white text-[15px] mb-4 w-[1500px]"
      >
        <div class="w-[20%]">Name</div>
        <div class="w-[35%]">Parish</div>
        <div class="w-[20%]">Year Of Admission</div>
        <div class="w-[15%]">Class</div>
        <div class="w-[10%]">Status</div>
      </div>
      <div
        v-for="(seminarian, index) in seminarians"
        :key="index"
        class="flex justify-between bg-[#F8F8F8] p-[15px] text-[#343434] text-[14px] mt-2 cursor-pointer w-[1500px]"
        @click="openSeminarian(seminarian.id)"
      >
        <div class="w-[20%]">{{ seminarian.first_name }} {{ seminarian.last_name }}</div>
        <div class="w-[35%]">{{ seminarian.parish }}</div>
        <div class="w-[20%]">{{ seminarian.admission_year }}</div>
        <div class="w-[15%]">{{ seminarian.current_class }}</div>
        <div class="w-[10%]">{{ seminarian.formation_status }}</div>
      </div>
    </div>

    <pagination />
  </MainLayout>
</template>

<style scoped>
.collection {
  display: grid;
  padding-left: 20px;
  align-content: space-between;
  letter-spacing: 0.2px;
  color: #343434;
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

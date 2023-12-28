<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Card from '../components/lib/Card.vue';
import Api from '../Api';

const router = useRouter()
let stats = ref({})

onMounted(async () => {
  const {data} = await Api().get('seminarians/stats/all');
  stats.value = data
})

const openDetails = (value, type) => {
  router.push({name: 'seminarians', query: {[type === 'seminary_alias' ? 'seminary_alias' : 'seminary_level']: value}})
}
</script>

<template>
   <MainLayout>
    <card title="All Seminarians" :total="stats.allSeminarians" @view="openDetails()"/>

    <h1 class="text-[#061C82] text-[25px] font-bold mt-[60px]">Seminaries</h1>
    <div class="flex flex-wrap">
      <card title="SS Peter & Paul, Bodija" :total="stats.ssppbodija" @view="openDetails('ssppbodija', 'seminary_alias')"/>
      <card title="St. John Of The Cross, Ekpoma" :total="stats.stjohnotcekpoma" @view="openDetails('stjohnotcekpoma', 'seminary_alias')"/>
      <card title="St. Peter The Apostle, Eruku" :total="stats.stpetertaeruku" @view="openDetails('stpetertaeruku', 'seminary_alias')"/>
      <card title="All Saints, Uhiele" :total="stats.asuhiele" @view="openDetails('asuhiele', 'seminary_alias')"/>
      <card title="St Albert the Great, Idowu-Offonran" :total="stats.stalberttgidowu_offonran" @view="openDetails('stalberttgidowu_offonran', 'seminary_alias')"/>
    </div>

    <h1 class="text-[#061C82] text-[25px] font-bold mt-[60px]">Departments</h1>
    <div class="flex">
      <card title="Spiritual" :total="stats.spiritual" @view="openDetails('spiritual', 'seminary_level')"/>
      <card title="Philosophy" :total="stats.philosophy" @view="openDetails('philosophy', 'seminary_level')"/>
      <card title="Theology" :total="stats.theology" @view="openDetails('theology', 'seminary_level')"/>
    </div>

   </MainLayout>
</template>

<style scoped>

</style>

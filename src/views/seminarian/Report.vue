<script setup>
import { ref } from 'vue'

const isEditing = ref(false)

const props = defineProps({
  seminarian: Object
})
</script>

<template>
  <div class="grid mt-10">
    <div class="w-[250px] mb-10 ml-auto float-right">
      <button
        v-if="isEditing"
        @click="isEditing = false"
        class="w-[120px] bg-[#000] text-[15px] font-black mt-5 py-2 px-7 rounded text-white"
      >
        Cancel
      </button>
      <button
        @click="isEditing = true"
        class="w-[120px] bg-[#061c82] text-[15px] font-black mt-5 py-2 px-7 rounded text-white float-right"
      >
        Edit
      </button>
    </div>
    <div class="grid mt-10">
      <label for="" class="text-[15px] font-bold text-[#343434]">Psychology Report</label>
      <textarea
        v-model="seminarian.psychology_report"
        :disabled="!isEditing"
        cols="30"
        rows="10"
        class="bg-[#F8F8F8] border-2 rounded-md p-4 mt-[12px]"
      ></textarea>
    </div>
    <div class="grid mt-10">
      <label for="" class="text-[15px] font-bold text-[#343434]">Seminary Report</label>
      <textarea
        v-model="seminarian.seminary_report"
        :disabled="!isEditing"
        cols="30"
        rows="10"
        class="bg-[#F8F8F8] border-2 rounded-md p-4 mt-[12px]"
      ></textarea>
    </div>
    <div class="grid mt-10">
      <label for="" class="text-[15px] font-bold text-[#343434]">Pastoral work Report</label>
      <textarea
        v-model="seminarian.pastoral_report"
        :disabled="!isEditing"
        cols="30"
        rows="10"
        class="bg-[#F8F8F8] border-2 rounded-md p-4 mt-[12px]"
      ></textarea>
    </div>
    <div class="grid mt-10">
      <label for="" class="text-[15px] font-bold text-[#343434]">Directorate Report</label>
      <textarea
        v-model="seminarian.directorate_report"
        :disabled="!isEditing"
        cols="30"
        rows="10"
        class="bg-[#F8F8F8] border-2 rounded-md p-4 mt-[12px]"
      ></textarea>
    </div>
    <button
      v-if="isEditing"
      class="w-[200px] bg-[#061c82] text-[15px] font-black mt-12 py-2 px-7 rounded text-white"
    >
      Save Changes
    </button>
  </div>
</template>

<style scoped></style>

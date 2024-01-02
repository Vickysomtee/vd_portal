<script setup>
import { ref } from 'vue'
import { states, seminary_level, formation_status, classes, years,seminaries } from '../../utils/constants'
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
    <div class="flex justify-between">
      <div class="grid w-[40%] mt-[12px]">
        <label for="" class="text-[15px] font-bold text-[#343434]">First Name</label>
        <input
          type="text"
          v-model="seminarian.first_name"
          :disabled="!isEditing"
          class="bg-[#F8F8F8] border-b-2 rounded outline-0 mt-[15px] text-sm"
          :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
        />
      </div>
      <div class="grid w-[40%] mt-[12px]">
        <label for="" class="text-[15px] font-bold text-[#343434]">Last Name</label>
        <input
          type="text"
          v-model="seminarian.last_name"
          :disabled="!isEditing"
          class="bg-[#F8F8F8] border-b-2 rounded outline-0 mt-[15px] text-sm"
          :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
        />
      </div>
    </div>
    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Email</label>

      <input
        type="text"
        v-model="seminarian.email"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Date of Birth</label>

      <input
        type="text"
        v-model="seminarian.dob"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">State of Origin</label>
      <select
        v-model="seminarian.state_origin"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(state, index) in states" :key="index" :value="state">{{ state }}</option>
      </select>
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Parish</label>

      <input
        type="text"
        v-model="seminarian.parish"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      />
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Year Of Admission</label>
      <select
        v-model="seminarian.admission_year"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(year, index) in years" :key="index" :value="year">{{ year }}</option>
      </select>
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Formation Status</label>
      <select
        v-model="seminarian.formation_status"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(status, index) in formation_status" :key="index" :value="status">{{ status }}</option>
      </select>
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Seminary</label>
      <select
        v-model="seminarian.seminary"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(seminary, index) in seminaries" :key="index" :value="seminary">{{ seminary }}</option>
      </select>
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Department</label>
      <select
        v-model="seminarian.seminary_level"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(level, index) in seminary_level" :key="index" :value="level">
          {{ level }}
        </option>
      </select>
    </div>

    <div class="grid mt-[50px]">
      <label for="" class="text-[15px] font-bold text-[#343434]">Class</label>
      <select
        v-model="seminarian.current_class"
        :disabled="!isEditing"
        class="bg-[#F8F8F8] border-b-2 mt-[15px] outline-0 text-sm"
        :class="isEditing ? 'text-[#000]' : 'text-[#343434] opacity-75'"
      >
        <option v-for="(clas, index) in classes" :key="index" :value="clas">{{ clas }}</option>
      </select>
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

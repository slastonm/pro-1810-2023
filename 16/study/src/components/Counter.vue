<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  }, 
  countValue:{
    type:Number,
    default: 0
  }
})
import { ref } from 'vue'
const couter = ref(props.countValue)
function incrementValue(){
    couter.value++
}
</script>

<template>
  <div class="greetings">
    {{ couter }}
    <button @click="incrementValue">
        +1
    </button>
  </div>
</template>

<style scoped>

</style>

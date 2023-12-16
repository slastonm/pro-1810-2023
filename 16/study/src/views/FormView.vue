<template>
    <div class="about">
        <h1>
            User type : {{ textValue }}
        </h1>
        <input type="text" v-model="textValue">
        <div class="block-item">
            <input type="checkbox" v-model="skills" value="html" id="html">
            <label for="html">Html</label>
            <div></div>
            <input type="checkbox" v-model="skills" value="css" id="css">
            <label for="css">Css</label>
            <div></div>
            <input type="checkbox" v-model="skills" value="js" id="js">
            <label for="js">JS</label>
        </div>
        <ul>
            <li v-for="(skill, key) in skills" :key="key">
                {{ skill }}
            </li>
        </ul>
        <Counter></Counter>
        <div>
            <Counter :countValue="10"></Counter>
        </div>
        <div>
            <Counter :countValue="5"></Counter>
        </div>        
        <div>
            <Counter :countValue="7"></Counter>
        </div>        
        <div>
            <Counter></Counter>
        </div>
    </div>
  </template>
  <script setup>
    import{ref, reactive, computed} from 'vue'
    import Counter from '../components/Counter.vue'
    const textValue = ref('')
    const skills = ref([])
  </script>
  <style>
  .block-item{
    background-color: yellow;
    padding: 20px;
    color: black;
    margin-bottom: 20px;
  }
  </style>
  
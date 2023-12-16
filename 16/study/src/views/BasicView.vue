<template>
    <div class="about">
      <h1>Basic example</h1>
      <h2>
        {{hello}}
      </h2>
      <h3>{{ 2>10?'True':'False'}}</h3>
      <h3>
        {{ formatText('Fomat me') }}
      </h3>
      <a :href="link">Vue docs</a>
      <div v-if="isActive">
        Hello true 
      </div>
      <div v-else>
        Hello False
      </div>
      <div v-if="value === 'A'">
        Value is:{{ value }}
      </div>
      <div v-else-if="value === 'B'">
        Value is:{{ value }}
    </div>
      <div v-else>
        Value is not A and B = {{ value }}
      </div>

      <div>
        Count {{ productCount.cout }}
      </div>
      <div v-if="productCount.cout > productCount.saleItems">
        Sale 50%
      </div>
      <div v-else>
        Buy more items
      </div>

      <button @click="addProduct">Buy item</button>
      <button @click="removeProduct">
        Remove buy item
      </button>
      <!-- <button v-on:click="addProduct">Buy item</button> -->
    </div>
  </template>
  <script setup>
    import{ref, reactive} from 'vue'
    const hello = ref('Hello world');
    function formatText(value){
        return value.toUpperCase()
    }
    const isActive = ref(true)
    const value = ref('FFFF')
    const link = ref('https://vuejs.org')

    const productCount = reactive({
        cout:0,
        saleItems:5
    })
    function addProduct(){
        productCount.cout++
    }
    function removeProduct(){
        if(productCount.cout>0){
            productCount.cout--
        }
        
    }
  </script>
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  
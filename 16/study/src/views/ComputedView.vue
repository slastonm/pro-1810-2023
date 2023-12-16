<template>
    <div class="about">
        <h1>
            User has : {{ userInfo.userWork.length }} works
        </h1>
        <h2>
            User has : {{ userDeployedWorks }} 
        </h2>
        <h3>
             {{nowYear}}
        </h3>
        <div :class="activeCheck" class="block-item">
            Dynamic class value
        </div>
        <div :style="{'font-size':fontSizeValue+'px'}" class="block-item">
            Text size
        </div>
        <button @click="fontSizeValue++">
            Size +
        </button>
        <hr>
        <!-- <div v-for="value in 5" :key="value">
            {{ value }}
        </div> -->
        <ul>
            <li v-for="(user, key) in users" :key="key" :class="{admin:user.isAdmin}">
                {{ user.name }} - {{ user.age }} <button @click="adminMode(user)">Change admin status</button>
            </li>
        </ul>
        <hr>
        <ul class="admin-list">
            <li v-for="(user, key) in justAdmin" :key="key">
                {{ user.name }} - {{ user.age }} 
            </li>
        </ul>
    </div>
  </template>
  <script setup>
    import{ref, reactive, computed} from 'vue'
    const userInfo = reactive({
        userName:'Tom',
        userWork:[
            'htm & css page',
            'htm css js',
            'html css scss js vue'
        ]
    })
    const userDeployedWorks = computed(()=>{
        return userInfo.userWork.length>0 ? userInfo.userWork.length : 'Any work published'
    })
    const nowYear = computed(()=>{
        let date = new Date()
        return `Today is ${date.getFullYear()}`
    })
    const isActive = ref(false);
    const activeCheck = computed(()=>{
        return isActive.value ? 'active-class' : 'non-active'
    })
    const fontSizeValue = ref(25)
    const users = ref([
        {
            name:'Bob',
            age:30,
            isAdmin:true
        },
        {
            name:'Tom',
            age:33,
            isAdmin:false
        },
        {
            name:'Eva',
            age:20,
            isAdmin:true
        },
        {
            name:'Bob22',
            age:30,
            isAdmin:true
        },
        {
            name:'Tom33',
            age:33,
            isAdmin:false
        }
    ])
    const justAdmin = computed(()=>{
        return users.value.filter((user)=>user.isAdmin)
    })
    function adminMode(user){
        user.isAdmin = !user.isAdmin
    }
  </script>
  <style>
  .block-item{
    background-color: yellow;
    padding: 20px;
    color: black;
    margin-bottom: 20px;
  }
  .active-class{
    border: 4px solid green;
  }
  .non-active{
    border: 4px solid gray;
  }
  .admin{
    background-color: orange;
  }
  .admin-list{
    padding: 20px;
    margin-top: 20px;
    background-color: lightcoral;
  }
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  
<template>
<div>
  <div v-if="!!this.$route.params.isAdmin">Welcome Admin</div>
  <div v-else>Welcome {{this.name}}</div>  
  <button @click="name='aref'">click me</button>
</div>
</template>

<script>
export default {
 data(){
     return {
         name: "sajed"
     }
 },   
 mounted(){
   
 }, 
}
</script>

<style>
  
</style>

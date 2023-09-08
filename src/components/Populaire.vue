<script>
import Exemple from './Exemple.vue'
import {ref} from 'vue'

export default {
  components: {
    Exemple
  },
  setup() {
 const data = ref([])
 fetch("http://127.0.0.1:8000/api/articles")
 .then(response => response.json())
 .then(articles => {
   data.value = articles.filter(item => item.populaire === 1)
 })
 .catch(error => alert(error.stack))
 return {
   data
 }
}
}
</script>

<template>
  <div class="popular my-5 d-flex flex-wrap justify-content-around">
        <Exemple v-for="(item , index) in data" :key="index" :donne="item"/>
  </div>
</template>

<style></style>

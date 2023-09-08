<script>
import Exemple from './Exemple.vue'
import { ref } from 'vue'

export default {
  components: {
    Exemple
  },
  setup() {
    const data = ref([])

    fetch('http://127.0.0.1:8000/api/articles')
      .then((response) => response.json())
      .then((articles) => {
        data.value = articles
      })
      .catch((error) => alert(error.stack))

    return {
      data
    }
  }
}
</script>
<template>
  <article>
    <div class="conteneur">
      <div class="information">
        <div
          class="titre"
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 80px;
            margin-left: 100px;
          "
        >
          <h4 class="head" style="color: rgb(223, 107, 126)">NOS ARTICLES</h4>
        </div>
        <div class="carte" style="display: flex; justify-content: space-between">
          <div class="body" style="margin-left: 150px; margin-top: 50px">
            <img
              src="src/assets/img/lot.png"
              class="carte-img"
              alt=""
              style="width: 600px; height: 500px; border-radius: 5%"
            />
            <h5 class="titre" style="color: rgb(223, 107, 126); margin-top: 20px">
              <strong class="1">CLUB DE FITNESS</strong>
            </h5>
            <a href="" style="color: black; text-decoration: none"
              ><h3 class="texte" style="margin-top: 20px">
                <strong>Participez aux Resofit Meet les 29 et 30 juin !</strong>
              </h3></a
            >
            <span class="auteur" style="color: rgba(0, 0, 0, 0.455)">par Romane Mary</span>
          </div>
          <div class="" style="height: 100vh; overflow-y: scroll">
            <Exemple v-for="(item, index) in data" :key="index" :donne="item" />
          </div>
        </div>
      </div>
      <div class="conteneur2">
        <div
          class="information2"
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            background-color: rgba(208, 202, 202, 0.35);
            height: 46vh;
          "
        >
          <div
            class="body2"
            style="
              margin-left: 150px;
              margin-top: 80px;
              display: flex;
              justify-content: space-between;
            "
          >
            <img
              src="src/assets/img/lot.png"
              class="carte-img"
              alt=""
              style="width: 600px; height: 500px; border-radius: 5%"
            />
            <div class="info" style="margin-left: 80px">
              <span
                ><h5
                  class="titre"
                  style="color: rgb(223, 107, 126); margin-top: 10px; margin-bottom: 40px"
                >
                  MARKETING DIGITAL
                </h5></span
              >
              <a href="" style="color: black; text-decoration: none"
                ><span>
                  <h1 class="descrip" style="margin-bottom: 40px">La réouverture approche</h1></span
                ></a
              >
              <span>
                <img
                  src="src/assets/img/skew.png"
                  class="object-fit-sm-contain border rounded"
                  alt=""
                  style="width: 40px; height: 20px; margin-bottom: 40px"
              /></span>
              <span><p class="date" style="margin-bottom: 40px">19 mai 2021</p></span>
              <span class="image"
                ><img
                  src="src/assets/img/lot.png"
                  alt=""
                  style="width: 100px; height: 100px; border-radius: 50%"
              /></span>
              <p class="auteur" style="color: rgb(159, 158, 158)">Romane Mary</p>
            </div>
          </div>
        </div>
        <div class="contenu">
          <div
            class="titre3"
            style="margin-top: 300px; margin-left: 100px; color: rgb(223, 107, 126)"
          >
            <h2>Toute l'actualité</h2>
          </div>
          <div class="article d-flex justify-content-evenly flex-wrap">
            <Exemple v-for="(item, index) in data" :key="index" :donne="item" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.im1 {
  width: 100%;
  height: 50%;
}
</style>

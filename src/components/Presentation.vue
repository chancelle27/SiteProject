<script setup>
import Header from './Header.vue'
</script>

<template>
  <div
    class="presentation"
    style="
      background-color: rgb(160, 73, 119);
      z-index: 10; /*background-image: url(src/assets/img/image10.jpeg);*/
    "
  >
    <Header />
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="Texte py-5 text-left text-white fw-bold">
          <span><h5>BLOG</h5></span> <br />
          <span
            ><h2>Sport, Motivation, Lifestyle & <br />Nutrition</h2></span
          >
          <br />
          <span>
            <img
              src="src/assets/img/skew.png"
              class="object-fit-sm-contain border rounded"
              alt=""
              style="width: 40px; height: 20px"
          /></span>
          <br />
          <br />
          <span
            ><p>
              Retrouvez les activités tendances, événements à ne pas rater, mode sportive, conseils
              de nutrition et interviews de sportifs inspirants.
            </p></span
          >
        </div>
        <div class="img py-2 rounded float-right">
          <img
            src="src/assets/img/zumba.png"
            alt=""
            style="
              height: 40%;
              width: 40%;
              background-color: rgba(160, 73, 119, 0);
              display: flex;
              float: right;
            "
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>

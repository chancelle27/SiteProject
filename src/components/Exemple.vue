<script>
export default {
  props: {
    donne: Object
  }
}
</script>

<template>
  <div
    class="cont1"
    style="display: flex; justify-content: space-between; margin-right: 20px; width: 700px"
  >
    <img
      :src="donne.urlImage"
      alt=""
      style="
        width: 250px;
        height: 200px;
        margin-right: 20px;
        margin-top: 50px;
        border-radius: 15px;
        object-fit: cover;
      "
    />
    <div class="t1p1" style="margin-top: 80px; margin-left: 20px">
      <h5 class="titre1" style="color: rgb(223, 107, 126); margin-bottom: 15px">
        {{ donne.name }}
      </h5>
      <h4 class="para1" style="margin-bottom: 15px; width: 450px">
        <a href="#" style="color: black; text-decoration: none"
          ><strong>{{ donne.description }}</strong></a
        >
      </h4>
      <span class="auteur" style="color: rgba(0, 0, 0, 0.455)">{{ donne.auteur }}</span>
    </div>
  </div>
</template>

<style scoped></style>

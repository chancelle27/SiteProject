<script>
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconYoutube from '../components/icons/IconYoutube.vue'

export default {
  components: {
    IconFacebook,
    IconYoutube
  }
}
</script>

<template>
  <div class="conteneur" style="background-color: rgb(160, 73, 119)">
    <div class="cote1" style="margin-top: 100px; display: flex; justify-content: space-between">
      <div
        class="imTexte"
        style="
          display: flex;
          justify-content: space-between;
          width: 50px;
          margin-bottom: 50px;
          margin-top: 50px;
        "
      >
        <img
          src="c"
          alt=""
          style="height: 50px; width: 50px; margin-left: 120px; margin-top: 20px"
        />
        <h5 class="titre" style="margin-top: 30px"><strong style="color: white">FITGYM</strong></h5>
      </div>
      <div class="mission" style="margin-top: 20px; margin-right: 550px; margin-top: 150px">
        <p class="texte" style="color: white; font-size: larger; margin-left: 20px">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
          Itaque nobis aspernatur suscipit rem ab harum incidunt <br />nihil ipsa exercitationem
          sequi, necessitatibus, quae officiis quam<br />
          sit eveniet eligendi modi deserunt consequuntur! <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
          Itaque nobis aspernatur suscipit rem ab harum incidunt!<br />
        </p>
      </div>
      <div class="cote2" style="color: white; margin-right: 100px; margin-top: 80px">
        <h3>En savoir plus</h3>
        <p>Contactez-nous</p>
        <div class="icon" style="margin-top: 100px; display: flex; justify-content: space-between">
          <IconFacebook />
          <div class="youtube">
            <IconYoutube />
          </div>
        </div>
      </div>
    </div>

    <div class="cote3"></div>
  </div>
</template>

<style scoped></style>

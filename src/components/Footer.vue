<script >
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconYoutube from '../components/icons/IconYoutube.vue'

export default{
    components: {
        IconFacebook,
        IconYoutube
    }
}
</script>

<template>
  <div class="conteneur" style="background-color: rgb(160, 73, 119)">
    <div class="cote1" style="margin-top: 100px; display: flex; justify-content: space-between;">
        <div class="imTexte" style=" display: flex; justify-content: space-between; width: 50px; margin-bottom: 50px; margin-top: 50px;">
      <img
        src="src/assets/img/logo-gym .png"
        alt=""
        style="height: 50px; width: 50px; margin-left: 120px; margin-top: 20px;"
      />
      <h5 class="titre" style="margin-top: 30px;"><strong style="color: white;">FITGYM</strong></h5>
    </div>
      <div class="mission" style="margin-top: 20px; margin-right: 650px; margin-top: 150px;">
        <p class="texte" style="color: white; font-size: larger; ">
          Notre mission est de vous aider à trouver la bonne salle de <br />
          sport pour vous (re)mettre au sport et mener ainsi une vie <br />
          plus saine. Nous sommes partenaires de 2 000 salles en <br />
          France, vous n’aurez donc que l’embarras du choix. Même <br />
          si nous travaillons beaucoup, il est possible que vous ne <br />
          trouviez pas un club de sport que vous connaissez dans <br />
          notre liste. Dans ce cas, n’hésitez pas à nous écrire un <br />
          message en cliquant sur ‘contact’ et nous les appellerons. <br />
          Si vous hésitez entre plusieurs activités sportives, le plus <br />
          simple est de vous déplacer dans le club de sport de votre <br />
          choix et de tester une activité ; et aussi d’échanger avec <br />
          un coach sportif pour qu’il vous conseille au mieux. Les <br />
          formules d’abonnements sont maintenant assez flexibles <br />
          avec de nombreuses options et sont donc adaptées à <br />
          tous les types de public. Le prix des abonnements est <br />
          compris en général entre 19€ et 49€ par mois avec <br />
          souvent des frais d'inscription à payer en plus.
        </p>
      </div>
      <div class="icon" style="margin-top: 200px; display: flex; justify-content: space-between;"><IconFacebook/>
        <div class="youtube" style="margin-left: 20px;">
      <IconYoutube/>
       </div>
    </div>
      <div class="cote2" style="color: white; margin-right: 50px; margin-top: 80px;"><h3>En savoir plus</h3>
    <p>Contactez-nous</p></div>
    </div>
    
    <div class="cote3"></div>
  </div>
</template>

<style scoped></style>

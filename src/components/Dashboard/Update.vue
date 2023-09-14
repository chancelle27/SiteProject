<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router' // Importez useRoute depuis vue-router

export default {
  setup() {
    const data = ref([])
    const route = useRoute() // Utilisez useRoute pour obtenir les données de la route
    const id = route.params.id // Accédez aux paramètres de la route via route.params

    const infos = ref({
      name: '',
      description: '',
      auteur: '',
      urlImage: '',
      populaire: 0
    })

    fetch(`http://127.0.0.1:8000/api/article?id=${id}`)
      .then((response) => response.json())
      .then((articles) => {
        infos.value = articles
      })
      .catch((error) => alert(error.stack))

    const submit = (e) => {
      e.preventDefault()
      // Votre logique de soumission du formulaire ici
      // URL de l'endpoint de l'API
      const url = `http://127.0.0.1:8000/api/article?id=${id}`

      // Données que vous souhaitez envoyer dans la requête POST (sous forme d'objet JSON)
      const data = infos.value
      infos.value = {
        name: '',
        description: '',
        auteur: '',
        urlImage: '',
        populaire: 0
      }
      // Options de la requête, y compris la méthode 'POST', les en-têtes et le corps de la requête
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' // Type de contenu JSON
        },
        body: JSON.stringify(data) // Convertit les données en JSON
      }

      // Effectue la requête POST
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error('La requête a échoué avec le statut ' + response.status)
          }
          return response.json() // Si vous attendez une réponse JSON
        })
        .then((data) => {
          console.log('Réponse JSON :', data)
          // Faites quelque chose avec les données de la réponse ici
        })
        .catch((error) => {
          console.error('Erreur :', error)
          // Gérez les erreurs ici
        })
    }

    return {
      infos,
      submit,
      data
    }
  }
}
</script>

<template>
  <div class="ajouter" style="margin-top: 100px; margin-left: 50px">
    <form>
      <div class="mb-3">
        <label for="exampleName" class="form-label">Nom de l'article</label>
        <input v-model="infos.name" type="text" class="form-control" id="exampleName" />
      </div>
      <div class="mb-3">
        <label for="exampleDescription" class="form-label">Description de l'article</label>
        <input
          v-model="infos.description"
          type="text"
          class="form-control"
          id="exampleDescription"
        />
      </div>
      <div class="mb-3">
        <label for="exampleAuteur" class="form-label">Auteur de l'article</label>
        <input v-model="infos.auteur" type="text" class="form-control" id="exampleAuteur" />
      </div>
      <div class="mb-3">
        <label for="exampleUrl" class="form-label">Url de l'image</label>
        <input v-model="infos.urlImage" type="text" class="form-control" id="exampleUrl" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Valider</label>
      </div>
      <button
        @click="submit"
        type="submit"
        class="btn btn-primary"
        style="background-color: rgb(160, 73, 119); border-color: white"
      >
        Mettre à jour
      </button>
    </form>
  </div>
</template>

<style></style>

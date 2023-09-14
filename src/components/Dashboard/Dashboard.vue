<script>
import { ref } from 'vue'

export default {
  setup() {
    const data = ref([])

    fetch('http://127.0.0.1:8000/api/articles')
      .then((response) => response.json())
      .then((articles) => {
        data.value = articles
      })
      .catch((error) => alert(error.stack))

      const submit = (id) => {
      
      // Votre logique de soumission du formulaire ici
      // URL de l'endpoint de l'API
      const url = `http://127.0.0.1:8000/api/article?id=${id}`

      
      // Options de la requête, y compris la méthode 'POST', les en-têtes et le corps de la requête
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json' // Type de contenu JSON
        }
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
      data,
      submit
    }
  }
}
</script>

<template>
  <div class="Dash">
    <div>
      <router-link class="Ajouter" to="/create"
        ><button
          class="btn"
          type="submit"
          style="
            border: 1px solid black;
            background-color: rgb(160, 73, 119);
            color: white;
            width: 100px;
            margin-top: 100px;
            margin-bottom: 50px;
          "
        >
          Ajouter
        </button></router-link
      >
    </div>
    <table style="border-collapse: collapse">
      <thead style="border: 1px solid black">
        <tr>
          <th class="p-3">Id</th>
          <th class="p-3">Name</th>
          <th class="p-3">Description</th>
          <th class="p-3">Auteur</th>
          <th class="p-3">UrlImage</th>
          <th class="p-3">Action</th>
        </tr>
      </thead>
      <tbody style="border: 1px solid black">
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.auteur }}</td>
          <td>{{ item.urlImage }}</td>
          <td>
            <div class="" style="display: flex; justify-content: space-between">
              <span class="bouton1"
                ><router-link class="mettreAJour" :to="'update/' + item.id" >
                  <button
                    class="btn"
                    type="submit"
                    style="
                      border: 1px solid black;
                      background-color: rgb(160, 73, 119);
                      color: white;
                      margin-right: 10px;
                    "
                  >
                    Modifier
                  </button>
                </router-link>
              </span>
              <span class="bouton2">
                <button
                @click="submit(item.id)"
                  class="btn"
                  type="submit"
                  style="border: 1px solid black; background-color: rgb(160, 73, 119); color: white"
                >
                  Supprimer
                </button>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td {
  border: 1px solid black;
  padding: 20px;
}
</style>

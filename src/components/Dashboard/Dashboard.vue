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

    return {
      data
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
                ><router-link> <button
                  class="btn"
                  type="submit"
                  to="/update"
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

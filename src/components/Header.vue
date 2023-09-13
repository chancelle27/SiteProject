<script></script>

<template>
  <nav class="navbar navbar-expand-lg header mb-5" style="position: fixed; top: 0px">
    <div class="container-fluid">
      <a class="navbar-brand text-white fw-bold" href="#"
        ><img
          src="src/assets/img/logo-gym .png"
          alt=""
          style="height: 50px; width: 50px; margin-left: 120px"
        /><strong>FITGYM</strong></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success text-white fw-bold border-white" type="submit">
            Search
          </button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-white fw-bold fs-5" aria-current="page" to="/"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-bold fs-5" to="/populaire"
              >POPULAIRE</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fw-bold fs-5" to="/activite"
              >ACTIVITES</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.header {
  background-color: rgb(160, 73, 119);
  width: 100%;
  z-index: 10;
}
</style>

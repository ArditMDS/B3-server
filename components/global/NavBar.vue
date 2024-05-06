<script setup lang="ts">

</script>

<template>
  <nav class="navbar">
    <ul>
      <li><nuxt-link to="/users">Users</nuxt-link></li>
      <li><nuxt-link to="/posts">Posts</nuxt-link></li>
      <li><nuxt-link to="/books">Books</nuxt-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    li {
      text-decoration: none;
      margin: 0 10px;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
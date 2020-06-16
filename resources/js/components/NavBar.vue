<template>
  <div>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link active" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link active" to="/register">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>

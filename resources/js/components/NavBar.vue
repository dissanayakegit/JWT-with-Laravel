<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">        
            <router-link class="nav-link" to='/login'>Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/register'>Register</router-link>
          </li>        
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
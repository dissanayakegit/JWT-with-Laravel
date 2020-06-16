<template>
  <div>
    <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">User Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          placeholder="Enter first name"
          v-model="models.username"
        />
      </div>
      
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="models.password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit()">Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      models:{
        username:'',
        password:''
      }
    }
  },

  mounted : {

  },

  methods : {
    submit(){
      console.log(this.models.username, this.models.password);
    }
  }

};
</script>

<style>
</style>
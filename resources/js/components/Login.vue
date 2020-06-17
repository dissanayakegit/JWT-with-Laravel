<template>
  <div class="container">
    <div class="row justify-content-center">
      <form>
        <div class="form-group">
          <label for="username">Email</label>
          <input
            type="email"
            class="form-control"
            id="username"
            aria-describedby="emailHelp"
            v-model="email"
          />        
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"  v-model="password"/>
        </div>
       
        <button type="submit" class="btn btn-primary" @click.prevent = "submit()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    date(){
        return {
            email: '',
            password:'',
        }
    },

  mounted() {
  },

  methods: {
      submit(){
          console.log(this.username, this.password);
          let save_data = {
            email : this.email,
            password : this.password
          }
          axios.post('api/auth/login', save_data ).then(response => {
            if(response.data.access_token){
                console.log(response);
                this.$router.push({ path: 'dashboard' });
              }else{
                console.log('could not Login!');
              }
          });

      }
  }
};
</script>
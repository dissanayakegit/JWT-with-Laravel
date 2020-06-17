<template>
  <div class="container">
    <div class="row justify-content-center">
      <form>
        <div class="form-group">
          <label for="username">User Name</label>
          <input
            type="text"
            class="form-control"
            id="username"
            aria-describedby="emailHelp"
            v-model="username"
          />        
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            v-model="email"
          />        
        </div>


        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password"/>
        </div>

        <div class="form-group">
          <label for="password2">Confirm password</label>
          <input type="password" class="form-control" id="password2" v-model="confirm_password" />
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
            username: '',
            email:'',
            password:'',
            confirm_password:''
        }
    },
  mounted() {
  },

  methods: {
      submit(){
          console.log(this.username, this.email,this.password,this.confirm_password);
          let save_data = {
            name: this.username,
            email : this.email,
            password : this.password
          }
          axios.post('api/auth/register', save_data).then(
            response => {
              if(response.data.access_token){
                console.log(response);
                this.$router.push({ path: 'dashboard' });
              }else{
                console.log('could not registered!');
              }
            }
          );
      }
  }
};
</script>
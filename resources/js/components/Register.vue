<template>
  <div>
    <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          type="text"
          class="form-control"
          id="first_name"
          placeholder="Enter first name"
          v-model="models.first_name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Enter last name"
          v-model="models.last_name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email address"
          v-model="models.email"
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
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="Confirm Password"
          v-model="models.confirs_password"
        />
      </div>
      <button type="submit" class="btn btn-primary" href="#" @click.prevent="submit()">Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
name : 'register';
export default {
  data(){
    return{
      models: {
        first_name: '',
        last_name: '',
        email: '',
        password:'',
        confirs_password:'',
      }
    }
  },

  mounted:{

  },

  methods:{
    submit(){
      console.log(this.models.first_name, this.models.last_name,this.models.email,this.models.password,this.models.confirs_password );

      axios.post('/api/auth/register', {
        params: {
          first_name : this.first_name,
          last_name : this.last_name,
          email : this.email,
          password : this.password,
          confirs_password : this.confirs_password
        }
      }).then(
        res => {
          alert();
          console.log(res);
        }
      );
    }
  }
};
</script>

<style>
</style>
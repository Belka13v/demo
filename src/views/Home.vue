<template>
  <div class="home">
      <HelloWorld/>
<!--    <button name="Register" @click="component='Register'">Register</button>-->
<!--    <button name="Login" @click="component='Login'">Login</button>-->
<!--   <keep-alive>-->
<!--     <component :is="component"></component>-->
<!--   </keep-alive>-->

  </div>
</template>

<script>
// @ is an alias to /src

//import axios from 'axios'

// import Login from "./Login";
// import Register from "./Register";

import HelloWorld from "../components/HelloWorld";

export default {
    name: 'home',
    components: {HelloWorld},
    // data() {
  // return {
  //   component: 'Login'
  // }

// mounted() {
//   axios.get('api/payments')
//           .then(response => {
//             this.payments = response.data
//           })
//           .catch(response => {
//             debugger
//             alert(response.status)
//           })
// },
//   components: {
//     Login,
//     Register
//   }

}
</script>

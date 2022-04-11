<template>
  <section class="header" id="home">
    <div class="container">
      <h2>Lyf. Styl Fastfood and Restaurant</h2>
      <h1 class="header-title">Enjoy our special food quality every day .</h1>
      
        <router-link  to="/booking" ><button type="button" class="btn" style="color: white">Book a Reservation</button></router-link>
      
    </div>
  </section>
</template>

<script>
export default {
//   methods: {
//     makeBooking: function () {
      
      
//       if (localStorage.getItem("jwt") !== "undefined") {
//         this.$emit("myBooking", true);
//       } else {
//         alert("Log in to book a reservaton");
//       }
    
//     },
//   },
//   data() {
//     return {
//       jwt: localStorage.getItem("jwt") || null,
//       user: {
//         name:null
//       },
//     };
//   },
  
// };
}
</script>

<style scoped>
#home {
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url(../assets/header-banner.jpg) center/cover fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-attachment: fixed;
}
.header h2 {
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
}
.header-title {
  color: #fff;
  font-size: 2.8rem;
  padding: 1rem 0;
}
.header button {
  width: 150px;
  cursor: pointer;
  font-weight: 500;
}

/* title */
.title {
  padding: 0.2rem;
}
.title h4 {
  text-transform: uppercase;
  color: var(--grey);
  font-size: 0.8rem;
}
.title h2 {
  opacity: 0.9;
  text-transform: capitalize;
  font-size: 1.7rem;
}
@media screen and (min-width: 992px) {
  .container {
    width: 85vw;
  }
}
</style>

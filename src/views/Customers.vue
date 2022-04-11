<template>
<section class = "customers section-py">
     

        <div class="container">
          <div class="row">
             <!-- title -->
      <div class = "title">
        <h2>Why Our Customers Love Us</h2>
      </div>
      <!-- end of title -->
          </div>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="height:400px; text-align:justify;">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            </div>

            <div  class="carousel-inner" v-if="customers">
              
              <div class="carousel-item" :class="{active : isActive === index }" v-for="(customer, index) in customers" :key="index">
                <img :src="customer.image" class="d-block"
                  style="border-radius: 50%; width: 150px; height: 150px; margin: 60px auto 30px; object-fit: cover;"
                  alt="A picture of my work">
                <div class="customers-content text-white" style="color: black;">
                  <h5>{{customer.name}}</h5>
                  <p style="font-style: italic;" class="text-white">{{customer.message}}</p>
                </div>
              </div>
            </div>
                  <div class="load" v-else>
                  <div class="loader"></div>
                  </div>
          </div>
        </div>
        
</section>
<Footer />
</template>

<script>
import Footer from "../components/Footer.vue"
  export default {
      components:{Footer},
  data() {
    return {
      customers: null,
      isActive: 0,
    };
  },
  mounted() {
    fetch("https://lyf-styl-reservation.herokuapp.com/customers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.customers = data;
      });
  },

}
</script>

<style>
.customers{
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/header-banner.jpg) center/cover no-repeat fixed;
    overflow: hidden;
}
.customers .title{
    text-align: center;
    color: #fff;
}
.customers-slider{
    margin: 2rem 0;
}
.customers-item img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 0 auto;
}
.customers-item{
    text-align: center;
}
.customers-item p{
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.7;
    width: 80%;
    margin: 1.5rem auto 1rem;
    color: var(--lightGrey);
    opacity: 0.9;
}
.customers-item h3{
    color: var(--grey);
}
/* LOADER BEGIN */
.load{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader {
  border: 10px solid var(--dark);
  border-radius: 50%;
  border-top: 10px solid var(--persian-red);
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* LOADER END */

</style>
<template>
  <footer class = "footer section-py">
      <div class = "footer-wrapper container">

   
  <div class="row">
    <div class="col">
      <div class = "footer-item">
          <h3>Find us</h3>
          <p class = "para-text">Shop 421, V&A Waterfront, <br>South Africa, Cape Town</p>
        </div>
    </div>
    <div class="col">
     
        <div class = "footer-item">
          <h3>Reservation</h3>
          <p class = "para-text">080-080-18333 | 083-222-3342</p>
          <p class = "para-text">infor@elyfstyl.com</p>
          <p class = "para-text">LINE: 082 702 7383</p>
        </div>
    </div>
    <div class="col">
      <div class = "footer-item">
          <h3>Open Hours</h3>
          <p class = "para-text">Monday: Closed</p>
          <p>Tuesday to Friday</p>
          <p class = "para-text">7:00 AM - 9:00 PM</p>
          <p>Saturday to Sunday</p>
          <p class = "para-text">11:00 AM - 10:00 PM</p>
        </div>
    </div>

    <div class="col">
      <div class = "footer-item">
          <div class = "footer-icons">
            <a href = "https://www.facebook.com" target = "_blank">
              <i class = "fab fa-facebook"></i>
            </a>
            <a href = "https://www.instagram.com" target = "_blank">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "https://www.twitter.com" target = "_blank">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "https://www.linkedin.com" target = "_blank">
              <i class = "fab fa-linkedin"></i>
            </a>
          </div>
          <p class = "para-text">Copyright 2022 &copy; eLyfstyl</p>
          <p class = "para-text">All rights reserved.</p>
        </div>
    </div>
  </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    /* border-top: 2px solid #ccc; */
    background: #ccc;
}
.footer-item{
    margin-bottom: 3rem;
}
.footer-item h3{
    opacity: 0.8;
}
.footer-item .para-text{
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.6;
}
.col.footer-item:nth-child(3){
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url("../assets/footer-img.jpg") center/cover no-repeat;
    color: #fff;
    padding: 2rem;
    border-radius: 1.3rem;
}
.footer-item:nth-child(3) .para-text{
    color: var(--grey);
    line-height: 0.5;
}
.footer-item:nth-child(3) p:not(.para-text){
    font-weight: 500;
}
.footer-icons{
    display: flex;
}
.footer-icons a{
    color: var(--persian-red);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.4rem 0.6rem 1rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: var(--transition);
}
.footer-icons a:first-child{
    margin-left: 0;
}
.footer-icons a:hover{
    background: var(--persian-red);
    color: #fff;
}



</style>
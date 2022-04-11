<template>
  <section id="about" class="about container section-py">
    <div class="about-left">
      <!-- title -->
      <div class="title">
        <h4>Read Our Story</h4>
        <h2>We've been making delicious food since 2015</h2>
      </div>
      <!-- end of title -->
      <p class="para-text">
       Lyfstyl’s Restaurant started in 2015 as a small family operated bar and dining establishment with two employees. Through several expansions it has evolved into a restaurant that can accommodate up to 100 people. Still family owned, Lyfstyl’s is known for serving friends and families, with quality meals at reasonable prices.
      </p>
      <p class="para-text">
       Our décor depicts a contemporary feel and free spirited vibes. Located in the Waterfront
       with an ocean view , we are here to serve  with a casual fine dining experience unlike any other.
      </p>
      
      <h4> MISSION STATEMENT</h4>
      <p class="para-text">
      "We Make It All... Better," is an expression of our desire for continued improvement in everything we do to enhance your experience. We invite you to join us as we write a new chapter in the history of our community. And when you do... you might just forget you're sitting at the corner of Lyfstyl.
      </p>
    </div>

  </section>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  components:{Footer}
};
</script>

<style>
.para-text {
  text-align: justify;
}
section #about {
  background: #bc8f8f80;
}

</style>
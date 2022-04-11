<template>
  <section id="contact" class="mb-4">
    <!-- <section class="mb-4"> -->
    <div class="contaner">
      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div class="row">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5" style="padding: 26px 131px;}">
          <form
            @submit.prevent="submitForm()"
          >
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <label for="name" class="">First name</label>
                </div>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input
                    type="name"
                    id="lastname"
                    name="lastname"
                    class="form-control"
                  />
                  <label for="lastname" class="">Last name</label>
                </div>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    v-model="email"
                    class="form-control"
                  />
                  <label for="email" class="">email</label>
                </div>
              </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-md-12">
                <div class="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    v-model="message"
                    rows="4"
                    class="form-control md-textarea"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
            <!--Grid row-->

          <div class="text-center text-md-left">
            <button type="submit" class="btn btn-outline" style="width: 100%;">Send</button>
          </div>
        </form>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="fas fa-map-marker-alt fa-2x"></i>
              <p>Cape Town, Western Cape, SA</p>
            </li>

            <li>
              <i class="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <i class="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@eLyfstyl.com</p>
            </li>
          </ul>
        </div>
        <!--Grid column-->
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
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.firstname, this.lastname, this.email, this.message);
      fetch("https://lyf-styl-reservation.herokuapp.com/contact", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },

        body: JSON.stringify({
          firsname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          message: this.message,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.container {
  margin: 250px;
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.95rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>

<template>
  <section id="chef" class="chef section-py">
    <div class="container">
      <!-- title -->
      <div class="title">
        <h4>Meet Our Chefs</h4>
        <h2>They are excellent people</h2>
      </div>
      <!-- end of title -->

      <div class="chef-wrapper">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="chef-item">
              <div class="chef-item-img">
                <img src="@/assets/chef-img-1.jpg" alt="chef image" />
                <div class="chef-overlay">
                  <p>
                    Started her career in hospitality in 2008. Catherine's
                    passion is providing an outstanding dining experience for
                    all our guests.
                  </p>
                  <div class="chef-icons">
                    <span>
                      <i class="fab fa-facebook fa-fw"></i>
                    </span>
                    <span>
                      <i class="fas fa-envelope fa-fw"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="chef-item-footer">
                <h2>Chef Catherine</h2>
                <h3>owner & manager</h3>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="chef-item">
              <div class="chef-item-img">
                <img src="@/assets/chef-img-2.jpg" alt="chef image" />
                <div class="chef-overlay">
                  <p>Chef Lindsay is our Pastry Chef</p>
                  <div class="chef-icons">
                    <span>
                      <i class="fab fa-facebook fa-fw"></i>
                    </span>
                    <span>
                      <i class="fas fa-envelope fa-fw"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="chef-item-footer">
                <h2>Chef Lindsay</h2>
                <h3>kitchen officer</h3>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="chef-item">
              <div class="chef-item-img">
                <img src="@/assets/chef-img-3.jpg" alt="chef image" />
                <div class="chef-overlay">
                  <p>
                    Robert brings his love of good produce and a lot of energy
                    to the team. He has been part of the team since early 2020.
                  </p>
                  <div class="chef-icons">
                    <span>
                      <i class="fab fa-facebook fa-fw"></i>
                    </span>
                    <span>
                      <i class="fas fa-envelope fa-fw"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="chef-item-footer">
                <h2>Chef Robert</h2>
                <h3>food items specialist</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.chef {
  background: var(--lightGrey);
}
.section-py {
  /* padding: 5rem 0; */
  display: flex;
}
.chef .title {
  text-align: center;
}
.chef-wrapper {
  /* margin: 2rem 85px; */
  display: flex;
  gap: 50px;
}
.para-text {
  text-align: justify;
}
.chef-item-img {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.chef-item-img img {
  transition: var(--transition);
}
.chef-item-img img:hover {
  transform: scale(1.2);
}
.chef-overlay {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.6s ease-in-out 0.3s;
}
.chef-overlay p {
  color: var(--lightgrey);
  width: 70%;
  text-align: center;
  line-height: 1.7;
}
.chef-icons {
  display: flex;
}
.chef-icons span {
  background: var(--dark);
  margin: 0.5rem;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--lightGrey);
  transition: var(--transition);
}
.chef-icons span:hover {
  background: var(--persian-red);
}
.chef-item-img:hover .chef-overlay {
  transform: translateY(0);
}
.chef-item-footer {
  text-align: center;
  padding: 0.8rem;
}
.chef-item-footer h2 {
  font-size: 1.4rem;
  color: var(--dark);
}
.chef-item-footer h3 {
  color: var(--grey);
  text-transform: uppercase;
  font-size: 0.9rem;
}
@media screen and (max-width: 1000) {
  .chef-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .chef-overlay p {
    line-height: 0.5;
  }
  .row {
    display: flex;
    flex-direction: column;
  }
}
</style>

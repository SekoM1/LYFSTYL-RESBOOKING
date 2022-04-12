<template>
  <section id = "menu" class = "menu section-py">
      <!-- title -->
      <div class = "title">
        <h4>Taste Our Food</h4>
        <h2>Quality food items</h2>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-outline" data-bs-toggle="modal" data-bs-target="#addmenu" v-if="isAdmin">
        ADD MENU ITEM
      </button>

<!-- Modal for add to menu -->
<div class="modal fade" id="addmenu" tabindex="-1" aria-labelledby="addmenuLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addmenuLabel">Menu Item</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="createMenu">
        <div class="group log-input">
                    <input
                      type="text"
                      id="tittle"
                      v-model="tittle"
                      placeholder="Product Name"
                    />
                  </div>

                  <div class="group log-input">
                    <input
                      type="number"
                      id="price"
                      v-model="price"
                      placeholder="Price"
                    />
                  </div>

                  <div class="group log-input">
                    <input
                      type="text"
                      id="desc"
                      v-model="desc"
                      placeholder="Description"
                    />
                  </div>

                  <div class="group log-input">
                    <input
                      type="text"
                      id="catergory"
                      v-model="catergory"
                      placeholder="Catergory"
                    />
                  </div>

                  <div class="group log-input">
                    <input
                      type="text"
                      id="img"
                      v-model="img"
                      placeholder="Image url"
                    />
                  </div>

       
         <div class="modal-footer">
                    <button
                      type="submit"
                      class="btn btn-outline"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <!-- sign up btn -->
                    <button
                      type="button"
                      class="btn btn-outline"
                    >
                      Save
                    </button>
                  </div>
       </form>
      </div>
     
    </div>
  </div>
</div>

      <!-- end of title -->
        <!-- first row -->
    <div class="row" style="row-gap:20px;" v-if="menus">
               <input class="border" placeholder="seach meal" type="text" v-model="search" />
    <div class="col-lg-4 col-md-6 col-sm-12" v-for="menu in filteredmenus" :key="menu._id">
      <!-- item -->
                
              <div class = "menu-item" v-if="menu">
          <!-- <a href = "@/assets/food-american-breakfast.jpg"> -->
            <img :src ="menu.img" alt = "food image" style="height: 310px; object-fit: cover;">
            <div class = "menu-overlay">
              <div class = "menu-overlay-content">
                <div>
                  <h2>{{menu.title}}</h2>
                  <h2>R{{menu.price}}</h2>
            
                </div>
                <h5>{{menu.desc}}</h5>
                  
              <div class="edit-btn">     
            <button
            type="button" class="btn btn-secondary" @click.prevent="removeMenu(menu._id)" v-if="isAdmin" >Delete</button>
            <button type="button"
            class="btn btn-secondary" @click="updateMenu(menu._id)" data-bs-toggle="modal" data-bs-target="#addmenu" v-if="isAdmin"> Edit
            </button>
              </div>
           

              </div>
            </div>
          <!-- </a> -->
        </div>
    </div>
        <!-- end of item -->

    
    </div>
    <div class="load" v-else>
      <div class="loader"></div>
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
       title: "",
    desc: "",
    img: "",
   category: "",
    price: "",
    isAdmin: false,
    filteredmenus: null,
    menus:null,
    search: ""
    };
  },
  mounted() {
    if (!localStorage.getItem("isAdmin") ==="true" ) {
      // this.isAdmin =true;
      

        alert("User not logged in");
      }
      
    fetch("https://lyf-styl-reservation.herokuapp.com/menu", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
       "Authorization": `Bearer ${localStorage.getItem("jwt")}`}
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.menus = json;
        this.filteredmenus = json;
      });
  },
  methods: {
createMenu() {
      
        
      if (!localStorage.getItem("jwt")) {
         localStorage.setItem("user", JSON.stringify(json.user));

        localStorage.setItem("isAdmin", JSON.stringify(json.isAdmin));
        alert("User not logged as Admin");
       
       
      }
    fetch("https://lyf-styl-reservation.herokuapp.com/menu/add", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
         category: this.category,
          desc: this.desc,
          img:this.img,
          price: this.price,

    
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
    
        .then((json) => {
         console.log(json)
          alert("item added");
         
        })
        .catch((err) => {
          console.log(err)
          alert("Adding failed.Try again");
          this.loading = false;
        });
    },
    // delete button

    removeMenu(id) {
      if (!localStorage.getItem("jwt")) {
        localStorage.setItem("user", JSON.stringify(json.user));

        localStorage.setItem("jwt", JSON.stringify(json.isAdmin));
        alert("User not logged as Admin");
      }
      console.log(id);
      fetch(
        `https://lyf-styl-reservation.herokuapp.com/menu/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Item successfully removed");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    // update button

    updateMenu(id) {
      if (!localStorage.getItem("jwt")) {
       localStorage.setItem("user", JSON.stringify(json.user));
       localStorage.setItem("isAdmin", JSON.stringify(json.isAdmin));
        alert("User not logged in");
      }
      fetch(
        `https://lyf-styl-reservation.herokuapp.com/menu/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            tittle: this.tittle,
            category: this.category,
            price: this.price,
            img: this.img,
            desc: this.desc,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${localStorage.getItem("isAdmin")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          alert("Menu item Edited");
        })
        .catch((err) => {
          alert(err);
        });
    },
},
computed: {
    filteredmenus: function () {
      return this.menus.filter((menu) => {
        return menu.title.match(this.search);
      });
    },
  },


}
</script>

<style scoped>
/* LOADER BEGIN */
.load{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader {
  border: 10px solid var(--grey);
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


.menu.section-py{
    padding-bottom: 0;
   
}
.menu .title{
    text-align: center;
}
section#menu{
  display: flex;
  flex-direction: column;
}
.first-menu {
  display: flex;
  gap: 10px;
  margin: 5px;
}

.second-menu {
  display: flex;
  margin: 5px;
  gap: 10px;
}
.title{
    padding: 0.2rem;
}
.menu-wrapper{
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.menu-item{
    position: relative;
    cursor: pointer;
}
.menu-overlay{
    height: 130px;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    padding: 1.5rem;
    opacity: 0;
    transition: var(--transition);
    overflow: hidden;
}
.menu-overlay-content{
    overflow: hidden;
    transition: all 0.5s ease;
    transform: translateY(100%);
    margin-top: -35px;
    text-size-adjust: 40px;
}
.menu-overlay-content div{
    display: flex;
    justify-content: space-between;
}
.edit-btn{
   display: inline-block;
   justify-content: space-around;
}
.menu-overlay-content h2{
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: medium;
    margin-bottom: -6px;

}
.menu-overlay-content h5{
    text-transform: uppercase;
    color: var(--grey);
    margin-top: 0.6rem;
    font-size: 0.8rem;
    font-size: x-small;
    margin-bottom: 0px;

}
.menu-item:hover .menu-overlay{
    opacity: 1;
}
.menu-item:hover .menu-overlay-content{
    transform: translateY(0);
}
.border{
  width: 100%;
  align-items: center;
  text-align: center;
  border-bottom: 4px solid var(--grey);
  
}

</style>
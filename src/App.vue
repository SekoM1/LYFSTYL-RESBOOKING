<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
      Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
 
}
:root {
  --persian-red: #ce3232;
  --dark: #363636;
  --grey: #bfbdbd;
  --lightGrey: #f9f9f9;
  --transition: all 0.5s ease;
  --Poppins: "Poppins", sans-serif;
  --Mont: "Montserrat", sans-serif;
}

* {
  box-sizing: border-box;
}
body {
  font-family: var(--Mont);
}

/* Utilities */
a {
  color: var(--dark);
  text-decoration: none;
}
ul li {
  list-style-type: none;
}
img {
  width: 100%;
  display: block;
}
button {
  font-family: inherit;
  outline: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 1.2rem 0;
}
h4 {
  color: var(--grey) !important;
}
.btn {
  background: var(--persian-red);
  border: none;
  color: #fff !important;
  text-transform: capitalize;
  font-size: 0.95rem;
  padding: 0.7rem;
  display: block;
  transition: var(--transition);
  cursor: pointer;
}
.btn:hover {
  background: var(--dark);
}
.container {
  width: 100vw;
  margin: 0 auto;
  
}
.section-py {
  padding: 5rem 0;
}
.para-text {
  color: var(--dark);
  line-height: 1.7;
  font-size: 0.95rem;
  opacity: 0.8;
}

/* slick */
.slick-slider {
  position: relative;

  display: block;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;

  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before,
.slick-track:after {
  display: table;

  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;

  height: auto;

  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}

</style>

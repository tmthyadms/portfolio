import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(
  AOS.init({
    // offset: 200,
    easing: "ease-out-sine",
    mirror: true,
  })
);

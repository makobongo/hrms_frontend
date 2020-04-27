<template>
  <div>
    <div id="container">
      <img src="../../assets/paws.jpeg" class="paws" id="paw1" alt="fox-paws" />
      <img src="../../assets/paws.jpeg" class="paws" id="paw2" alt="fox-paws" />
      <img src="../../assets/paws.jpeg" class="paws" id="paw3" alt="fox-paws" />
      <img src="../../assets/paws.jpeg" class="paws" id="paw4" alt="fox-paws" />
      <img id="fox" src="../../assets/sleeping-fox.png" alt="fox-logo" />
    </div>
  </div>
</template>
<script>
import gsap from "gsap";

let masterTL = gsap.timeline();

export default {
  methods: {
    play() {
      masterTL.add(this.pawsTL());
      masterTL.add(this.foxTL());
      masterTL.play();
    },
    pawsTL() {
      let tl = gsap.timeline();
      tl.to("#paw1", {
        opacity: 4,
        scale: 1,
        duration: 0.5,
        ease: "bounce.out"
      });
      tl.to(
        "#paw2",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );
      tl.to(
        "#paw3",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );
      tl.to(
        "#paw4",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );
      return tl;
    },
    foxTL() {
      let tl = gsap.timeline();
      tl.to(
        "#fox",
        {
          opacity: 1,
          filter: "blur(0)",
          scale: 1,
          duration: 0.4,
          ease: "slow"
        },
        "<.2"
      );
      return tl;
    }
  },
  mounted() {
    this.play();
  }
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5em;
}

#fox {
  height: 8em;
  width: 8em;
  opacity: 0;
  filter: blur(2px);
}

.paws {
  transform: scale(0);
  width: 2.5em;
  height: 2.5em;
  margin-top: 50px;
  margin-right: 0.8em;
  opacity: 0;
}

button {
  margin-top: 5em;
}
</style>

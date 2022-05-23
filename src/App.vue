<script>
import CabecaAlho from "@/components/CabecaAlho.vue";
import FooterBol from "@/components/FooterBol.vue";
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      atual: "home",
    };
  },
  components: {
    CabecaAlho,
    FooterBol,
    RouterView,
  },
};
</script>
<template>
  <CabecaAlho />
  <div>
    <main id="content">
      <RouterView />
    </main>
  </div>
  <FooterBol />
</template>
<style></style>

<script>
export default {
  props: {
    titulo: {
      default: "Titulo Padrão",
    },
    nomes: {
      type: Array,
    },
  },
};
</script>
<template>
  <article class="blocksemanal">
    <div class="titulo">
      {{ titulo }}
    </div>
    <hr />
    <ul>
      <li v-for="(nome, i) of nomes" :key="i">
        {{ nome }}
      </li>
    </ul>
  </article>
</template>
<style scoped>
.titulo {
  text-align: center;
}
</style>

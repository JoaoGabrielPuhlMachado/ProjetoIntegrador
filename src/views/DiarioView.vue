<script>
import MaisUmDiario from "@/components/MaisUmDiario.vue";
export default {
  components: { MaisUmDiario },
};
</script>
<template>
  <MaisUmDiario titulo="Manhã" :nomes="['Arrumar cama', 'Lavar a roupa']" />
  <MaisUmDiario titulo="Tarde" :nomes="['Arrumar cama', 'Lavar a roupa']" />
  <MaisUmDiario titulo="Noite" :nomes="['Arrumar cama', 'Lavar a roupa']" />
  <MaisUmDiario
    class="anotacoesdiario"
    titulo="Anotações Extras"
    :nomes="['Beber mais água', 'Dar banho no gato']"
  />
</template>
<style></style>

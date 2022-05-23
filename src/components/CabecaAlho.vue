<script>
export default {};
</script>
<template>
  <header id="header">
    <h2 class="titulo-header">JoLi Planners</h2>
    <nav class="botoes">
      <a href="/">home</a>
      <a href="/login">Login</a>
      <a href="/diario">Diario</a>
      <a href="/semanal">Semanal</a>
      <a href="/mensal">Mensal</a>
    </nav>
  </header>
</template>
<style scoped>
.botoes {
  height: 100%;
  padding: 2px;
  display: flex;
  align-items: center;
}

.botoes a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-top: 2px;
}
.botoes a:hover {
  background-color: #f0eeff;
  color: #535a8e;
  padding: 2px;
  border-radius: 4px;
}

.titulo-header {
  margin: 0 15px;
  align-self: center;
  color: white;
  display: flex;
}
</style>

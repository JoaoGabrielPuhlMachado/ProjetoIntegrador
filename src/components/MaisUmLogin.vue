<script>
export default {
  props: {
    titulo: {
      default: "Login",
    },
    nomes: {
      type: Array,
    },
  },
};
</script>
<template>
  <div>
    <article class="blocklogin">
      <div class="titulo">
        {{ titulo }}
      </div>
      <hr />
      <ul>
        <li v-for="(nome, i) of nomes" :key="i">
          {{ nome }}
        </li>
      </ul>
      <form>
        <label for="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="ex: Joao Gabriel"
        />

        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@gmail.com"
        />

        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="ex: 1a2b3c4d"
        />

        <input type="button" name="submit" id="submit" value="Entrar" />
      </form>
    </article>
  </div>
</template>
<style scoped>
article {
  margin-left: 3%;
}
.titulo {
  padding: 0;
  font-size: 30px;
  margin: 0;
}
input {
  margin-bottom: 8px;
  display: block;
  width: 150px;
  border: 1px solid black;
  background-color: white;
}
#submit {
  margin-top: 10px;
  width: 50px;
  cursor: pointer;
  background-color: rgb(243, 243, 243);
}
#submit:active {
  background-color: black;
  color: white;
}
</style>

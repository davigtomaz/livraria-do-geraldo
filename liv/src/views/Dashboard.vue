<script>
import cadastroEditora from "../components/cadastroEditora.vue";
import cadastroAutor from "../components/cadastroAutor.vue";
import NavBarF from "../components/nav.vue";
import CadastroAutor from "../components/cadastroAutor.vue";
import CadastroCategoria from "../components/cadastroCategoria.vue";
export default {
  components: {
    cadastroEditora,
    cadastroAutor,
    NavBarF,
    CadastroAutor,
    CadastroCategoria,
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    select(item) {
      this.selected = item;
    },
  },
};
</script>

<template>
  <nav-bar-f @select="select" />
  <div class="h-screen bg-zinc-700 flex justify-center items-center">
    <div class="h-full w-full">
      <cadastroEditora v-if="selected === 'editora'"></cadastroEditora>
      <cadastro-autor v-if="selected === 'autor'"></cadastro-autor>
      <cadastro-categoria v-if="selected === 'categoria'"></cadastro-categoria>
    </div>
  </div>
</template>

<style scoped></style>

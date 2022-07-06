<script>
import cadastroEditora from "../components/cadastroEditora.vue";
import cadastroAutor from "../components/cadastroAutor.vue";
import NavBarF from "../components/nav.vue";
import CadastroAutor from "../components/cadastroAutor.vue";
import CadastroCategoria from "../components/cadastroCategoria.vue";
import CadastroLivro from "../components/cadastroLivro.vue";
import vendasMes from "../components/charts/sell.vue";
import viewsMes from "../components/charts/views.vue";
import createdDay from "../components/charts/created.vue";
import { useStatisticsStore } from "../stores/statistics";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  setup() {
    const store = useStatisticsStore();
    return {
      store,
    };
  },

  computed: {
    chartData() {
      return {
        labels: ["Livros", "Autores", "Editoras", "Categorias"],
        datasets: [
          {
            data: [
              this.store.Statistics.totalBooks,
              this.store.Statistics.totalAuthors,
              this.store.Statistics.totalPublishers,
              this.store.Statistics.totalCategories,
            ],
            label: "Itens cadastrados hoje",
            backgroundColor: "#6E82AF",
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        scale: {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      };
    },
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

  components: {
    cadastroEditora,
    cadastroAutor,
    NavBarF,
    CadastroAutor,
    CadastroCategoria,
    CadastroLivro,
    vendasMes,
    viewsMes,
    createdDay,
    Bar,
  },
};
</script>

<template>
  <nav-bar-f @select="select" />
  <div
    class="max-h-full min-h-screen bg-zinc-700 flex flex-col justify-center items-center"
  >
    <div class="mb-72 w-full">
      <cadastroEditora v-if="selected === 'editora'"></cadastroEditora>
      <cadastro-autor v-if="selected === 'autor'"></cadastro-autor>
      <cadastro-categoria v-if="selected === 'categoria'"></cadastro-categoria>
      <cadastro-livro v-if="selected === 'livro'"></cadastro-livro>
    </div>

    <div class="flex flex-wrap justify-center items-center w-full">
      <div class="mx-5 my-5">
        <vendas-mes />
      </div>

      <div class="mx-5 my-5">
        <views-mes />
      </div>

      <div class="mx-5 my-5">
        <created-day :chart-data="chartData"> </created-day>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

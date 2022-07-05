<script>
export default {
  data() {
    return {
      items: [
        { title: "Cadastrar Autor", item: "autor" },
        { title: "Cadastrar Editora", item: "editora" },
        { title: "Cadastrar Categoria", item: "categoria" },
      ],
    };
  },
  methods: {
    select(item) {
      this.$emit("select", item);
      // this.selected = item;
    },
  },
};
</script>

<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <button
        class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        class="collapse navbar-collapse flex-grow items-center"
        id="navbarSupportedContent1"
      >
        <a class="text-xl text-white" href="#"
          ><svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
            /></svg
        ></a>
        <!-- Left links -->
        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
            <a class="nav-link text-white" href="/dashboard">Dashboard</a>
          </li>

          <div class="dropdown relative">
            <li class="nav-item p-2">
              <a
                class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Cadastrar novos itens</a
              >
              <ul
                class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li v-for="(item, i) of items" :key="i">
                  <button
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                    @click="select(item.item)"
                  >
                    {{ item.title }}
                  </button>
                </li>
                <!-- <li>
                  <button
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Cadastrar Autor
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Cadastar Livro
                  </button>
                </li> -->
              </ul>
            </li>
          </div>

          <li class="nav-item p-2">
            <a
              class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
              href="#"
              >Itens já cadastrados</a
            >
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
  </nav>
</template>

<template>
  <div class="flex justify-center p-3">
    <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
      <h1 class="flex justify-center pb-6 text-2xl text-white">Categoria</h1>
      <form>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail1"
            class="form-label inline-block mb-2 text-white"
            >Nome da Editora
          </label>
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nome"
          />
        </div>

        <div class="form-group mb-6">
          <label
            for="exampleInputPassword1"
            class="form-label inline-block mb-2 text-white"
            >Descrição da Categoria</label
          >
          <textarea
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Descrição"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

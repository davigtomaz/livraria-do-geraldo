<template>
  <div class="bg-zinc-700">
      
    <div>
      <h1 class="flex justify-center text-4xl p-5 text-indigo-500 bg-gray-900" >
        Área de cadastros
      </h1>
    </div>

    <div class="flex justify-center p-3">
      <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
        <h1 class="flex justify-center pb-6 text-2xl text-white">Editora</h1>
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
              >Site</label
            >
            <input
              type="password"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Site"
            />
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

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex justify-center p-3">
      <div class="block p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm">
        <h1 class="flex justify-center pb-6 text-2xl text-white">Autor</h1>
        <form>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-white"
              >Nome do Autor(a)
            </label>
            <input
              type="email"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nome"
            />
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

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

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
  </div>

  <footer class="text-center bg-gray-900 text-white">
    <div class="container px-6 pt-6">
      <div class="flex justify-center mb-6">
      </div>
    </div>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a class="text-whitehite" href="https://tailwind-elements.com/"
        >Livraria do Geraldo</a
      >
    </div>
  </footer>
</template>

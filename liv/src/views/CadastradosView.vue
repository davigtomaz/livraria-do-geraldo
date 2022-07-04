<template>
  <div class="bg-zinc-700">
    <div class="flex justify-between p-3">
      <div class="flex justify-center">
        <div
          class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg bg-indigo-900"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://images-americanas.b2w.io/produtos/179547/imagens/livro-harry-potter-e-a-pedra-filosofal/179547_1_large.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-xl font-medium mb-2">
              Harry Potter e a Pedra Filosofal
            </h5>
            <p class="text-white text-base mb-4">
              Harry Potter é um garoto órfão que vive infeliz com seus tios, os
              Dursleys. Ele recebe uma carta contendo um convite para ingressar
              em Hogwarts, uma famosa escola especializada em formar jovens
              bruxos.
            </p>
            <p class="text-white text-xs">J.K. Rowling</p>
            <p class="text-white text-xs">Editora Rocco</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg bg-indigo-900"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-xl font-medium mb-2">
              A Sociedade do Anel
            </h5>
            <p class="text-white text-base mb-4">
              'A Sociedade do Anel' é a primeira parte da obra de ficção de J.
              R. R. Tolkien. Numa cidadezinha indolente do Condado, um jovem
              hobbit é encarregado de uma imensa tarefa. Deve empreender uma
              perigosa viagem através da Terra-média até as Fendas da Perdição,
              e lá destruir o Anel do Poder.
            </p>
            <p class="text-white text-xs">J. R. R. Tolkien</p>
            <p class="text-white text-xs">Editora Arqueiro</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg bg-indigo-900"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="https://m.media-amazon.com/images/I/51axD5mw91L._AC_SY780_.jpg"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-white text-xl font-medium mb-2">
              As crônicas de Nárnia - O sobrinho do mago
            </h5>
            <p class="text-white text-base mb-4">
              A aventura começa quando Digory e Polly vão parar no gabinete
              secreto do excêntrico tio André. Ludibriada por ele, Polly toca o
              anel mágico e desaparece. Digory, aterrorizado, decide partir
              imediatamente em busca da amiga no Outro Mundo.
            </p>
            <p class="text-white text-xs">C.S Lewis</p>
            <p class="text-white text-xs">Editora Sextante</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex justify-between p-3">
      <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
        <div class="items-center justify-center">
          <img
            src="https://www.hypeness.com.br/1/2020/07/j.k-rowling4.jpg"
            class="rounded-full w-24 ml-5"
            alt="Avatar"
          />
        </div>

        <h1 class="flex justify-center pb-6 text-2xl text-white">
          J. K. Rowling
        </h1>
        <div>
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ver Mais
          </button>
        </div>
      </div>
      <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
        <div class="items-center justify-center">
          <img
            src="https://br.web.img3.acsta.net/medias/nmedia/18/91/76/65/20162476.jpg"
            class="rounded-full w-24 ml-7"
            alt="Avatar"
          />
        </div>

        <h1 class="flex justify-center pb-6 text-2xl text-white">
          J. R. R. Tolkien
        </h1>
        <div>
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ver Mais
          </button>
        </div>
      </div>
      <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
        <div class="items-center justify-center">
          <img
            src="data:image/jpeg;base64,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"
            class="rounded-full w-24 ml-2"
            alt="Avatar"
          />
        </div>

        <h1 class="flex justify-center pb-6 text-2xl text-white">
          C. S. Lewis
        </h1>
        <div>
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ver Mais
          </button>
        </div>
      </div>
      <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
        <div class="items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNn6FcqJgnTCBDjX9vK_qRnle-dHO1Jp7uEEqISfNOm8bbjoW"
            class="rounded-full w-24 ml-1"
            alt="Avatar"
          />
        </div>

        <h1 class="flex justify-center pb-6 text-2xl text-white">S. King</h1>
        <div>
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ver Mais
          </button>
        </div>
      </div>
      <div class="p-10 rounded-lg shadow-lg bg-indigo-900 max-w-sm block">
        <div class="items-center justify-center">
          <img
            src="https://monteirolobato.com/wp-content/uploads/2021/04/mt.png"
            class="rounded-full w-24 ml-2"
            alt="Avatar"
          />
        </div>

        <h1 class="flex justify-center pb-6 text-2xl text-white">M. Lobato</h1>
        <div>
          <button
            type="submit"
            class="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Ver Mais
          </button>
        </div>
      </div>
    </div>

    <div class="relative flex py-5 items-center">
      <div class="flex-grow border-t border-gray-400"></div>
      <span class="flex-shrink mx-4 text-gray-400"></span>
      <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <div class="flex justify-between p-3">
      <div class="flex justify-center">
        <div
          class="bg-indigo-900 block p-6 rounded-lg shadow-lg bg-white max-w-sm"
        >
          <h5 class="text-white text-xl leading-tight font-medium mb-2">
            Editora Rocco
          </h5>
          <a href="#" class="text-white text-base mb-4 p-4">www.rocco.com.br</a>
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-indigo-900 block p-6 rounded-lg shadow-lg bg-white max-w-sm"
        >
          <h5 class="text-white text-xl leading-tight font-medium mb-2">
            Companhia das Letras
          </h5>
          <a href="#" class="text-white text-base mb-4 p-4"
            >www.companhiadasletras.com.br</a
          >
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-indigo-900 block p-6 rounded-lg shadow-lg bg-white max-w-sm"
        >
          <h5 class="text-white text-xl leading-tight font-medium mb-2">
            Editora Arqueiro
          </h5>
          <a href="#" class="text-white text-base mb-4 p-4"
            >www.editoraarqueiro.com.br</a
          >
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-indigo-900 block p-6 rounded-lg shadow-lg bg-white max-w-sm"
        >
          <h5 class="text-white text-xl leading-tight font-medium mb-2">
            Editora Intrínseca
          </h5>
          <a href="#" class="text-white text-base mb-4 p-4"
            >www.intrinseca.com.br</a
          >
        </div>
      </div>
      <div class="flex justify-center">
        <div
          class="bg-indigo-900 block p-6 rounded-lg shadow-lg bg-white max-w-sm"
        >
          <h5 class="text-white text-xl leading-tight font-medium mb-2">
            Editora Sextante
          </h5>
          <a href="#" class="text-white text-base mb-4 p-4">sextante.com.br</a>
        </div>
      </div>
    </div>
  </div>

  <footer class="text-center bg-gray-900 text-white">
    <div class="container px-6 pt-6">
      <div class="flex justify-center mb-6"></div>
    </div>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022 Copyright:
      <a class="text-whitehite" href="https://tailwind-elements.com/"
        >Livraria do Geraldo</a
      >
    </div>
  </footer>
</template>

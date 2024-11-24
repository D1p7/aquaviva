'use client'

import Image from 'next/image';
import BackArrow from '../components/back.js';
import { useRouter } from 'next/navigation.js';

export default function Home() {

  const router = useRouter();

  return (
    // Container principal com fundo e centralização vertical e horizontal.
    <div className="flex items-center justify-center min-h-screen bg-[#387478]">

      {/* Card central com bordas arredondadas e sombra */}
      <div className="bg-[#E2F1E7] rounded-lg p-8 shadow-lg w-[306px] h-[450px]">

        {/* Botão de voltar no topo */}
        <div className='h-[.5px]'>
          <BackArrow size={20} onClick={() => router.push('/telaInicial')}></BackArrow>
        </div>

        {/* Imagem de perfil centralizada */}
        <div className="flex justify-center mb-6">
          <Image
            src="/Perfil.svg"
            width={100}
            height={100}
            alt='perfil'
          ></Image>
        </div>

        {/* Conteúdo do card */}
        <div className="space-y-4">

          {/* Informações do usuário */}
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#243642]'>Nome Completo</h1> {/* Nome do usuário */}
            <h4 className='text-[#ABABAB]'>Cargo</h4> {/* Cargo do usuário */}
          </div>

          {/* Botão para relatórios */}
          <div>
            <button
              type="button"
              className="w-full bg-[#629483] mt-2 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
            >
              Relatórios
            </button>
          </div>

          {/* Botão para página inicial */}
          <div>
            <button
              type="button"
              className="w-full bg-[#629483] mt-3 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
            >
              Página Inicial
            </button>
          </div>

          {/* Botão para logout */}
          <div>
            <button
              type="button"
              onClick={() => router.push('/')} // Redireciona para a página de login.
              className="w-full bg-[#243642] mt-4 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
            >
              Sair
            </button>
          </div>

          {/* Link para suporte */}
          <div>
            <a
              href="#"
              className="block text-center text-teal-600 text-sm mt-4 hover:underline"
            >
              Suporte
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

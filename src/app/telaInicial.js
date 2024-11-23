'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#387478]">
      <div className="bg-[#E2F1E7] rounded-lg p-8 shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.ico"
            width={100}
            height={100}
            alt='Logo'
            ></Image>
        </div>
        {/* Formulário */}
        <form className="space-y-4">
          <div>
            <label className="block text-[#629584] font-bold mb-1">Login</label>
            <input
              type="text"
              placeholder="Digite seu login"
              className="text-[#629584] w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <div>
            <label className="block text-[#629584] font-bold mb-1">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="text-[#629584] w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <button
            onClick={() => router.push('/telaInicial')}
            type="submit"
            className="w-full bg-[#243642] text-white font-medium py-2 rounded hover:bg-teal-800 transition"
          >
            Entrar
          </button>
          <a
            href="#"
            className="block text-center text-teal-600 text-sm mt-4 hover:underline"
          >
            Suporte
          </a>
        </form>
      </div>
    </div>
  );
}

'use client'

import Image from 'next/image';
import BackArrow from '../components/back.js';
import { useRouter } from 'next/navigation.js';

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#387478]">
        <div className="bg-[#E2F1E7] rounded-lg p-8 shadow-lg w-[306px] h-[450px]">
          <div className='h-[.5px]'>
            <BackArrow size={20} onClick={() => router.push('/telaInicial')}></BackArrow>
          </div>
            <div className="flex justify-center mb-6">
                <Image
                    src="/Perfil.svg"
                    width={100}
                    height={100}
                    alt='perfil'
                    ></Image>
            </div>
        <div className="space-y-4">
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[#243642]'>Nome Completo</h1>
                <h4 className='text-[#ABABAB]'>Cargo</h4>
            </div>
            <div>
                <button
                    type="button"
                    className="w-full bg-[#629483] mt-2 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
                >Relatorios</button>
            </div>
            <div>
                <button
                    type="button"
                    className="w-full bg-[#629483] mt-3 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
                >Pagina Inicial</button>
            </div>
            <div>
                <button
                type="button"
                onClick={() => router.push('/')}
                className="w-full bg-[#243642] mt-4 text-white font-medium py-2 rounded hover:bg-teal-800 transition"
                >Sair</button>
            </div>
            <div>
                <a href="#"
                className="block text-center text-teal-600 text-sm mt-4 hover:underline">
                Suporte</a>
            </div>
        </div>
      </div>
    </div>
  );
}

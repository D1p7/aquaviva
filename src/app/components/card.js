'use cliente'

import React from "react"
import BackArrow from "./back.js";

export default function Card({title, cards, onBack}) {

    return (
        // Estrutura principal com fundo e alinhamento central.
        <div className="min-h-screen bg-[#387478] flex flex-col items-center p-8">
          {/* Container central com título e cards */}
          <div className="w-full max-w-6xl bg-[#E2F1E7] shadow-2xl rounded-2xl p-10 space-y-8">
            {/* Título da página */}
            <h1 className="text-3xl flex justify-center items-center font-bold mb-8 text-teal-900 text-[#387478]">
              {title}
            </h1>
    
            {/* Container dos cards */}
            <div className="w-full max-w-6xl bg-[#F2F9F4] shadow-2xl p-10 space-y-8">
              {/* Grid responsivo para os cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Renderiza cada card */}
                {cards.map((item, index) => (
                  <div
                    key={index} // Chave única para cada card.
                    className={`w-[200px] h-[350px] flex flex-col justify-center items-center p-4 ${item.color} text-white shadow-lg rounded-lg border-2 hover:scale-105 transition-transform duration-300 ease-in-out`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div> {/* Ícone */}
                    <h2 className="text-lg font-semibold">{item.title}</h2> {/* Título */}
                    <p className="text-2xl font-bold my-2">{item.value}</p> {/* Valor */}
                    <div className="text-sm whitespace-pre-line">{item.details}</div> {/* Detalhes */}
                    <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                      VER MAIS
                    </button>
                  </div>
                ))}
              </div>
            </div>
    
            {/* Botão de voltar */}
            <BackArrow onClick={onBack}></BackArrow>
          </div>
        </div>
      );
}
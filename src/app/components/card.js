'use cliente'

import React from "react"
import BackArrow from "./back.js";

export default function Card({title, cards, onBack}) {

  return (
    <div className="min-h-screen bg-[#387478] flex flex-col items-center p-8">
    <div className="w-full max-w-6xl bg-[#E2F1E7] shadow-2xl rounded-2xl p-10 space-y-8">
    <h1 className="text-3xl flex justify-center items-center font-bold mb-8 text-teal-900 text-[#387478]">{title}</h1>
      <div className="w-full max-w-6xl bg-[#F2F9F4] shadow-2xl p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cards.map((item, index) => (
                  <div
                      key={index}
                      className={`w-[200px] h-[350px] flex flex-col justify-center items-center p-4 ${item.color} text-white shadow-lg rounded-lg border-2  hover:scale-105 transition-transform duration-300 ease-in-out`}
                  >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-2xl font-bold my-2">{item.value}</p>
                      <div className="text-sm whitespace-pre-line">{item.details}</div>
                      <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
                          VER MAIS
                      </button>
                  </div>
              ))}
          </div>
        </div>
         <BackArrow onClick={onBack}></BackArrow>
    </div>
 </div>
  );
}
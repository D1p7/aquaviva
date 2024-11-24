'use client'

import { useRouter } from 'next/navigation.js';
import Card from "../components/card.js";

export default function Home() {
  const dadosAmelia = [
    {
      icon: "💧",
      title: "POPULAÇÃO SEM ÁGUA",
      value: "4.247 habitantes",
      details: `MUNICÍPIO: 17.59%\nESTADO: 20.29%\nPAÍS: 15.76%`,
      color: "bg-[#21d9b4]"
    },
    {
      icon: "🚽",
      title: "POPULAÇÃO SEM ESGOTO",
      value: "Sem Informação",
      details: `MUNICÍPIO: ?\nESTADO: 58.8%\nPAÍS: 44.5%`,
      color: "bg-[#a85a47]"
    },
    {
      icon: "🗑️",
      title: "POPULAÇÃO SEM COLETA DE LIXO",
      value: "12.338 habitantes",
      details: `MUNICÍPIO: 51.11%\nESTADO: 27.56%\nPAÍS: 24.05%`,
      color: "bg-[#fa9f66]"
    },
    {
      icon: "🏠",
      title: "DOMICÍLIOS SUJEITOS À INUNDAÇÕES",
      value: "20 domicílios",
      details: `MUNICÍPIO: 0.3%\nESTADO: 2.6%\nPAÍS: 4.3%`,
      color: "bg-[#92ba66]"
    }
  ];
  

        const router = useRouter();

        return (
          <Card 
          title={"Amelia Rodrigues"}
          cards={dadosAmelia}
          onBack={() => router.back()}
      />
      );
}
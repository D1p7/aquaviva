'use client'

import { useRouter } from 'next/navigation.js';
import Card from "../components/card.js";


export default function Home() {
    const dadosSalvador = [  
        {
          icon: "💧",
          title: "POPULAÇÃO SEM ÁGUA",
          value: "29.876 habitantes",
          details: "MUNICÍPIO: 1.24%\nESTADO: 20.29%\nPAÍS: 15.76%",
          color: "bg-[#21d9b4]",
        },
        {
          icon: "🚽",
          title: "POPULAÇÃO SEM ESGOTO",
          value: "281.858 habitantes",
          details: "MUNICÍPIO: 11.66%\nESTADO: 58.8%\nPAÍS: 44.5%",
          color: "bg-[#a85a47]",
        },
        {
          icon: "🗑️",
          title: "POPULAÇÃO SEM COLETA DE LIXO",
          value: "80.992 habitantes",
          details: "MUNICÍPIO: 3.35%\nESTADO: 27.56%\nPAÍS: 24.05%",
          color: "bg-[#fa9f66]",
        },
        {
          icon: "🏠",
          title: "DOMICÍLIOS SUJEITOS A INUNDAÇÕES",
          value: "1.034 domicílios",
          details: "MUNICÍPIO: 0.1%\nESTADO: 2.6%\nPAÍS: 4.3%",
          color: "bg-[#92ba66]",
        },
      ];
      
      const router = useRouter();

      return (
        <Card 
            title={"Salvador"}
            cards={dadosSalvador}
            onBack={() => router.back()}
        />
    );
}
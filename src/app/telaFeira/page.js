'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import Card from "../components/card.js";

export default function TelaFeira() {
    const dadosFeira = [
        {
            icon: "💧",
            title: "POPULAÇÃO SEM ÁGUA",
            value: "62.951 habitantes",
            details: "MUNICÍPIO: 10.41%\nESTADO: 20.29%\nPAÍS: 15.15%",
            color: "bg-[#21d9b4]",
        },
        {
            icon: "🚽",
            title: "POPULAÇÃO SEM ESGOTO",
            value: "289.670 habitantes",
            details: "MUNICÍPIO: 47%\nESTADO: 55.2%\nPAÍS: 44%",
            color: "bg-[#a85a47]",
        },
        {
            icon: "🗑️",
            title: "POPULAÇÃO SEM COLETA DE LIXO",
            value: "71.272 habitantes",
            details: "MUNICÍPIO: 11.57%\nESTADO: 25.7%\nPAÍS: 24.9%",
            color: "bg-[#fa9f66]",
        },
        {
            icon: "🏠",
            title: "DOMICÍLIOS SUJEITOS A INUNDAÇÕES",
            value: "Não há",
            details: "MUNICÍPIO: 0%\nESTADO: 2.6%\nPAÍS: 4%",
            color: "bg-[#92ba66]",
        },
    ];

    const router = useRouter();

    return (
        <Card 
            title={"Feira de Santana"}
            cards={dadosFeira}
            onBack={() => router.back()}
        />
    );
}

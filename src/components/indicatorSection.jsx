import React from "react";
import IndicatorCard from "./IndicatorCard";

const IndicatorSection = () => {
  return (
    <div className="bg-(--azul) p-20 mb-12">
      <h1 className="font1 text-3xl text-(--preto) mb-8">Indicadores</h1>
      <div className="flex justify-center gap-12">
        <IndicatorCard
          image="/images/card_illustration1.png"
          title="Consumo Otimizado"
          description="Redução progressiva do consumo energético a partir da análise contínua de dados e identificação de padrões"
        />
        <IndicatorCard
          image="/images/card_illustration2.png"
          title="Gastos Evitados"
          description="Monitoramento dos gastos financeiros em decorrência do uso periódico da energia"
        />
        <IndicatorCard
          image="/images/card_illustration3.png"
          title="Eficiência Energética"
          description="Acompanhamento da performance energética ao longo do tempo, promovendo decisões mais conscientes e estratégicas"
        />
      </div>
    </div>
  );
};

export default IndicatorSection;

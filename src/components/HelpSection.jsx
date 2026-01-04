import React from "react";

const HelpSection = () => {
  return (
    <div className="relative text-white mb-30">
      <h1 className="font1 text-3xl text-center mb-16">Como a tecnologia ajuda ?</h1>
      <div className="flex justify-between">
        <div className="font2 flex flex-col gap-12 max-w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-2">Coleta de dados</h2>
            <p className="tracking-wide text-lg">
              A tecnologia possibilita a coleta estruturada e contínua de dados
              de consumo energético por meio de sistemas e sensores
              inteligentes. Essas informações servem como base para análises
              mais precisas, garantindo maior confiabilidade e transparência nos
              indicadores monitorados.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Análise inteligente</h2>
            <p className="tracking-wide text-lg">
              Com os dados organizados, ferramentas analíticas e visuais
              permitem transformar números em informações compreensíveis.
              Gráficos, métricas e comparações facilitam a identificação de
              desperdícios, tendências de consumo e oportunidades de otimização,
              apoiando decisões mais estratégicas.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
            <video src="/videos/grafico.mp4" className="w-2xs"/>
            <video src="/videos/grafico2.mp4" className="w-2xs"/>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

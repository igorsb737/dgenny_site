import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">DGENNY NEGOCIAÇÕES GENIAIS</span>
      <h2 className="title text-center">Conheça o Futuro das Negociações</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Seja um Ninja das Compras"
          desc="Negocie com centenas de fornecedores com esforço zero."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Aumente o Seu Lucro"
          desc="Imagine em vez de negociar com 3 fornecedores negociar com 100. Aumente seu lucro baixando seus custos."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Aumente Suas Vendas"
          desc="Com custo mais baixos sua empresa se torna muito mais competitiva aumentando suas vendas"
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Seu Departamento de Compras"
          desc="A Dgenny será o seu primeiro e único departamento de compras. Não depende exclusivamente de talentos em uma área tão importante da sua empresa"
        />
      </div>
    </section>
  );
};

export default Features;

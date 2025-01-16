import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">PASSO A PASSO</span>
      <h2 className="title text-center ">Mude Como Sua Empresa Faz Negócios</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Inicie o Orçamento"
          desc="Você pode negociar tudo que você imaginar. As matérias primas da sua empresa, matérias de escritório, materiais de limpeza, serviços como eventos, marketing e etc. Qualquer coisa que você imaginar a Dgenny negocia para você."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Busca de Fornecedor"
          desc="A Dgenny vai fazer uma busca em toda internet por fornecedores e informações sobre eles como nota no google e reclame aqui. Você também pode adicionar fornecedores que você já negocia para a Dgenny negociar nas próximas negociações.."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Dgenny Negocia Para Você"
          desc="Dgenny é uma inteligência Artifical Avançada, construida exclusivamente para ser uma expert em negociações. A Dgenny vai enviar uma mensagem única para dezenas de fornecedores e iniciar as negociações com técnicas avançadas."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Recomendação das Melhores Opções"
          desc="Ao final da negociação você recebe os melhores orçamento com insights de cada negociação.  Com a Dgenny você garante sempre o melhor valor."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;

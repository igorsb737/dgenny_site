"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
          <button className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={"https://youtu.be/aVNa8Dka5MA"} target="_blank">
              <span className="playButton duration-700 w-full h-full bg-primary rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
              COMO FAZEMOS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              A DGenny revoluciona o processo de
compras pelo WhatsApp
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="IA Humanizada"
            desc="A IA da DGenny utiliza algoritmos avançados para simular a persuasão humana, obtendo melhores resultados nas negociações."
          />
          <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Fornecedores"
            desc="A DGenny analisa dados e histórico de performance para recomendar a melhor opção de fornecedor, garantindo decisões mais inteligentes."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

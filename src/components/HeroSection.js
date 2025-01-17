import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const HeroSection = () => {
  const { openModal } = useModal();
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Faça Compras Geniais com </p>
          <p>Conversas Inteligentes</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          Aumente seu lucro em até 3x com a única IA que encontra o fornecedor ideal, conversa, orça, negocia o melhor valor e compra para você
        </p>
        <button 
          onClick={openModal}
          className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-[#07325B] hover:border-[#07325B] hover:bg-transparent hover:text-[#07325B] rounded-full"
        >
          Garanta Acesso Antecipado
        </button>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/tela-site.webp"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

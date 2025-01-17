"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div className="container mx-auto flex flex-col items-center">
        <Link href={"/"}>
          <Image 
            src="/logo-dgenny.png"
            alt="DGenny Logo"
            width={150}
            height={40}
            className="h-auto w-auto"
          />
        </Link>
        <p className="mt-8 text-xs">© 2024 DGenny - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;

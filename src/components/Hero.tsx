import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative flex items-center justify-between h-[100vh]">
      <div className="">
        <h1>WILKER MARTINS</h1>
        <h2>DESENVOLVEDOR WEB</h2>
        <p>Criação de sites e sistemas web</p>
        <div className="flex">
            <Link href="https://github.com/wilkermartins">Baixar Currículo</Link>
            <Link href="https://www.linkedin.com/in/wilker-martins/">Meus Projetos</Link>
        </div>
      </div>
      <div className="absolute bottom-0 right-2">
        <Image
          src="/images/wilker.png"
          alt="wilker"
          width={500}
          height={500}
        ></Image>
      </div>
    </section>
  );
};

export default Hero;

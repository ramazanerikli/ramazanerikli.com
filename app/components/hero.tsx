"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import ContactModal from "./contact-modal";

const Hero: FC<{
}> = ({ }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <section>
    <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="mt-[6vh] sm:mt-xl">

<p className="inter-light hero-base-text">
  I build web applications that your users love. <br></br>
  On time and on budget.
</p>
</div>
<div className="flex flex-col lg:flex-row w-full mb-[6vh] pt-6 lg:pt-12 lg:gap-5">
  <div className="lg:w-1/6">
    <div className="h-full flex items-center justify-start">
      <button
      onClick={() => setIsModalOpen(true)}
      className="
       inter-medium hover:-translate-y-2 transition-all duration-500 
       text-center transition-all duration-500  
       text-white shadow-2xl shadow-blue-300 bg-blue-700 hover:bg-blue-800 
       focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-8 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Contact
      </button>
    </div>
  </div>
  <div className="lg:w-5/6">
    <div className="flex flex-col items-start gap-1 md:flex-row md:gap-16">
      <div className="flex flex-row-reverse items-baseline md:flex-col">
        <dt className="inter-medium">6 years</dt>
        <dd className="w-32 text-sm text-text-2 md:w-auto">
          Experience
        </dd>
      </div>
      <div className="flex flex-row-reverse items-baseline md:flex-col">
        <dt className="inter-medium">React & Node.js</dt>
        <dd className="w-32 text-sm text-text-2 md:w-auto">
          Core Tech Stack
        </dd>
      </div>
      <div className="flex flex-row-reverse items-baseline md:flex-col">
        <dt className="inter-medium">Turkey</dt>
        <dd className="w-32 text-sm text-text-2 md:w-auto">
          Location
        </dd>
      </div>
      <div className="flex flex-row-reverse items-baseline md:flex-col">
        <dt className="inter-medium">English & Turkish</dt>
        <dd className="w-32 text-sm text-text-2 md:w-auto">
          Languages
        </dd>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;

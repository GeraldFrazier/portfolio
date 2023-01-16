import About from "@/Components/About";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import TechSkills from "@/Components/TechSkills";
import Experience from "@/Components/Experience";
import Head from "next/head";
import Image from "next/image";
import Contact from "@/Components/Contact";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div
      className='bg-[rgb(36,36,36)] text-white h-screen 
  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
  z-0 scrollbar-thin scrollbar-track-[#EC9EC0]/10 
  scrollbar-thumb-[#FF0080]/60 scrollbar-thumb-rounded'>
      <Head>
        <title>Knight Portfolio</title>
      </Head>

      <Header />
      <section id='hero' className='snap-start hero'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='techSkills' className='snap-start'>
        <TechSkills />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer>
          <ChevronDoubleUpIcon
            className='fixed bg-transparent text-[#FF0080]/20 hover:text-[#FF0080] animate-bounce w-10 h-10
            bottom-[1%] right-[5%] cursor-pointer z-100'
          />
        </footer>
      </Link>
    </div>
  );
}

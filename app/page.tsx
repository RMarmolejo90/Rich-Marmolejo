"use client"
import Image from "next/image";
import { IconContext } from "react-icons"
import { 
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiCsharp,
  SiDjango,
  SiJavascript,
  SiGithub,
  SiIbm,
  SiLinkedin,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiReact,
} from "react-icons/si";
import Project from "./components/project";


export default function Home() {

  return (
    <main className="w-screen h-full flex flex-col items-center justify-center">
      <header className="w-full min-h-full flex flex-col items-start justify-between py-10 p-4">
        <h1 className="font-bold text-4xl leading-10">Hi, I'm Rich Marmolejo</h1>
        <h3 className="font-semibold leading-10 text-xl">Full-Stack Software Developer</h3>
      </header>
      <article className="w-full min-h-full flex flex-col justify-center items-center">
        <div className="m-10 rounded-b-full">
          <Image 
          src={'/rich_m.png'} 
          alt="Rich Marmolejo" 
          width={300} 
          height={300} 
          style={{
            border: '1px',
            borderRadius: '50%',
          }}/>
        </div>
     <IconContext.Provider value={{className:"text-3xl m-3"}}>
        <div className="flex flex-wrap text-center items-center justify-evenly bg-sky-300 py-10 px-4">
          <SiReact />
          <SiExpress />
          <SiPython />
          <SiMongodb />
          <SiNextdotjs />
          <SiTailwindcss />
          <SiTypescript />
          <SiCsharp />
          <SiJavascript />
          <SiDotnet/>
          <SiDjango />
        </div>
      </IconContext.Provider>
      <section className="py-10">
        <div>
          <Project 
            image='/projects/richflix.png'
            alt = 'a movie browsing app'
            headline = "Richflix"
            description = 'Richflix is a movie browsing web application that enhances user experience through server-side rendering, built with TypeScript, React, and Next.js. It features user authentication to pave the way for future additions like watchlists. Designed with scalability and ease of updates in mind, it utilizes a modular architecture, including a "single source of truth", libraries, utility functions, and reusable components.'
            github = 'https://github.com/RMarmolejo90/RichFlix'
            url = 'https://richflix-phi.vercel.app'
          />
        </div>
      </section>
      </article>
    </main>
  );
}

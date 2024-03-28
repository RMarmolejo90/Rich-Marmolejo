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
        <h1 className="font-bold text-2xl leading-10">Rich Marmolejo</h1>
        <h2 className="font-semibold leading-10 text-xl">Full-Stack Software Developer</h2>
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
        <div className="flex flex-wrap text-center items-center justify-evenly py-10 px-4">
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
      
      </article>
    </main>
  );
}

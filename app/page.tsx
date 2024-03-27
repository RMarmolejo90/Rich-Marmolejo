"use client"
import Image from "next/image";
import { IconContext } from "react-icons"
import { 
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiCsharp,
  DiDjango,
  SiJavascript,
  SiGithub,
  SiIbm,
  SiLinkedin,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiReact,
  SiDjango
} from "react-icons/si";

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
      <section>
        <div>
          <h2>Projects</h2>
          <div>
            
            <h1>

            </h1>
          </div>
        </div>
      </section>
      </article>
    </main>
  );
}

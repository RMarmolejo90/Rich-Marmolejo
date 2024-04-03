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
import { Gruppo } from "next/font/google";

const gruppo = Gruppo({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {

  return (
    <main className="w-screen h-full flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <header className="w-full h-full flex flex-col items-start justify-between p-4">
          <h1 className={`${gruppo.className} lg:text-[96px] text-5xl sm:text-[80px] m-2`}>Rich Marmolejo</h1>
          <h2 className={`${gruppo.className} text-3xl lg:text-5xl leading-10 m-4`}>Full-Stack Software Developer</h2>
        </header>
        <article className="w-full min-h-full flex flex-col justify-center items-center">
          <div className="m-2 rounded-b-full">
            <Image 
            src={'/rich_m.png'} 
            alt="Rich Marmolejo" 
            width={200} 
            height={200} 
            style={{
              border: '1px',
              borderRadius: '20%',
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
      </div>
      <section >
        <a href="https://www.coursera.org/account/accomplishments/professional-cert/B7JCXJNT8A7W"  target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row items-center justify-center rounded-xl border border-zinc-600 p-6">
            <IconContext.Provider value={{className:"text-5xl m-3"}}>
              <SiIbm />
            </IconContext.Provider>
            <div className="flex flex-col items-start justify-center"> 
              <h3 className="text-xl">IBM Full Stack Software Developer</h3>
              <h4>Professional Certificate</h4>
            </div>
          </div>
        </a>

      </section>
    </main>
  );
}

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
    <main className="w-screen h-full flex flex-col lg:flex-row items-center justify-center">
      <header className="w-full h-full flex flex-col items-start justify-between p-4">
        <h1 className={`${gruppo.className} lg:text-[96px] text-5xl sm:text-[80px] m-2`}>Rich Marmolejo</h1>
        <h2 className={`${gruppo.className} text-3xl lg:text-5xl leading-10 m-4`}>Full-Stack Software Developer</h2>
      </header>
      <article className="w-full min-h-full flex flex-col justify-center items-center">
        <div className="m-2 rounded-b-full">
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

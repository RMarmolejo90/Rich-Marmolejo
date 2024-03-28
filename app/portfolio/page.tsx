import Project from "../components/project"

const page = () => {
  return (
    <div>
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
    </div>
  )
}

export default page
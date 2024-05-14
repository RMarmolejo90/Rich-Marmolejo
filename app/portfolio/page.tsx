import Project from "../components/project"

const page = () => {
  return (
    <div>
      <section className="py-10 flex flex-col items-center justify-center">
        <h1 className="font-semibold text-4xl p-4">Portfolio</h1>
        <div className="py-10 lg:px-24">
          <Project 
            image='/projects/richflix.png'
            alt = 'a movie browsing app'
            headline = "Richflix"
            description = 'Richflix is a movie browsing web application that enhances user experience through server-side rendering, built with TypeScript, React, and Next.js. It features user authentication to pave the way for future additions like watchlists. Designed with scalability and ease of updates in mind, it utilizes a modular architecture, including a "single source of truth", libraries, utility functions, and reusable components.'
            github = 'https://github.com/RMarmolejo90/RichFlix'
            url = 'https://richflix-phi.vercel.app'
          />
          <Project 
            image='/projects/paytracker.jpg'
            alt = 'a paycheck tracking app'
            headline = "PayTracker"
            description = "Use this web application to track your work hours and estimate your paycheck in real-time. Just set your pay rate, clock in, and watch how much money you are making while you're on the clock. It comes with a basic version for those who do not want to create an account, and a Pro version with user authentication that can save your work history and track your hours for you. Find more details in the 'About' page when you visit the website."
            github = 'https://github.com/RMarmolejo90/PayTracker_v2'
            url = 'https://paytracker.netlify.app/'
          />
        </div>
      </section>
    </div>
  )
}

export default page
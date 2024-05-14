import Image from 'next/image'
import Link from 'next';
interface Props {
  image: string,
  alt: string,
  headline: string,
  description: string,
  url: string,
  github: string
}

const Project = ({image, alt, headline, description, url, github}: Props) => {

  return (
    <div className='border p-4 flex flex-col items-center justify-center'>
      <article className='flex items-start justify-between flex-col py-8'>
        <h1 className='m-4 my-2 font-bold text-2xl'>
          {headline}
        </h1>
        <p className='m-4 my-2'>
          {description}
        </p>
      </article>
      <Image 
        src={image} 
        alt={alt}
        width={300}
        height={300} 
      />
      <a href={url} target='blank' className='mt-6 p-2 border hover:text-blue-700 tracking-wider font-semibold rounded-md bg-gray-100 outline-1 border-slate-600'>Visit</a>
      <a href={github} target='blank' className='m-6 p-2 border hover:text-blue-700 tracking-wider font-semibold rounded-md bg-gray-100 outline-1 border-slate-600'>Source Code</a>
    </div>
  )
}

export default Project
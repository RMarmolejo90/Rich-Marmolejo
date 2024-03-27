import Image from 'next/image'

interface Props {
  image: string,
  alt: string,
  headline: string,
  description: string
}

const Project = ({image, alt, headline, description}: Props) => {

  return (
    <div>
      <Image 
        src={image} 
        alt={alt}
        width={200}
        height={200} 
      />
      <h1>
        {headline}
      </h1>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Project
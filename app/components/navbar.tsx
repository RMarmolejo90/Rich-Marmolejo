import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='bg-zinc-800 text-neutral-100 w-screen p-4 flex flex-row items-center justify-end'>
      <Link className='hover:border-b-2 mx-2 text-sm font-font-semibold tracking-widest uppercase' href={'/'}>Home</Link>
      <Link className='hover:border-b-2 mx-2 text-sm font-font-semibold tracking-widest uppercase' href={'/about'}>About</Link>
      <Link className='hover:border-b-2 mx-2 text-sm font-font-semibold tracking-widest uppercase' href={'/projects'}>Portfolio</Link>
      <Link className='hover:border-b-2 mx-2 text-sm font-font-semibold tracking-widest uppercase' href={'/contact'}>Contact</Link>
    </nav>
  )
}

export default navbar
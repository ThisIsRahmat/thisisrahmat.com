import Link from 'next/link'


export default function Banner() {
  return (
    <footer className="pb-2 absolute top-0 inset-x-0 bg-[#d4d700] border-b border-gray-700 text-black">
      <div className="container mx-auto ">
        <h3 className="scrolling-text">
          🚧  My personal site is a <span className="font-bold uppercase"> Work in progres </span>  you can follow along the rebuild process on github: <Link href="https://github.com/ThisIsRahmat" className="underline"> @thisisrahmat </Link> 🚧
        </h3>
      </div>
    </footer>
  )
}

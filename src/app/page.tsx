import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div>
        <Image src='/images/books.jpg' width={500} height={200} alt='books'></Image>
      </div>
      <div>
        <Link href='/books'>
        <span className=' bg-blue-500 p-2 rounded-full'>Explore More</span>
        </Link>
      </div>
    </main>
  )
}

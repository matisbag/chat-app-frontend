import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Tailwind</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Hello world!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          <Link href="/c">chat</Link>
        </p>
      </div>
    </main>
  )
}

export default function Header() {
  return (
    <header className="bg-white shadow-sm z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/chat.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

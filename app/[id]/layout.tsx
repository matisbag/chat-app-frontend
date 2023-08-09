export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow">
      <div className="hidden md:flex p-3 bg-gray-100 w-64"> chat list </div>
      {children}
    </div>
  )
}

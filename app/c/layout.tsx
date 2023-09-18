'use client'

import SearchBar from '@/components/form/SearchBar'
import { useState } from 'react'

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState<string>('')

  return (
    <div className="flex grow">
      <div className="hidden md:flex flex-col p-3 bg-gray-100 w-64">
        <SearchBar value={search} onSearchUpdate={(e) => setSearch(e)} />
        chat list
      </div>
      {children}
    </div>
  )
}

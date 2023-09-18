import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

type SearchBarProps = {
  value: string
  onSearchUpdate: (value: string) => void
}

export default function SearchBar({ value, onSearchUpdate }: SearchBarProps) {
  return (
    <div className="relative rounded-md shadow-sm">
      <input
        value={value}
        onChange={(e) => onSearchUpdate(e.target.value)}
        type="text"
        className="block w-full rounded-md py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-primary text-sm"
        placeholder="Search discussion"
      />
      <div className="absolute inset-y-0 right-1.5 flex items-center">
        {value ? (
          <XMarkIcon
            className="h-5 w-5 text-secondary cursor-pointer"
            onClick={() => onSearchUpdate('')}
          />
        ) : (
          <MagnifyingGlassIcon className="h-5 w-5 text-primary" />
        )}
      </div>
    </div>
  )
}

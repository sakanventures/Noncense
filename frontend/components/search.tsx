import { Input } from "@/components/ui/input"

function SearchIcon(props: any) {
    return(
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

export default function Search(props: any) {
    return (
        <form className="relative hidden md:block">
        <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
        className="pl-8 pr-4 h-8 w-[200px] rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:focus:ring-gray-300"
        placeholder="Search..."
        type="search"
        />
    </form>
    )
  }
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Search from "@/components/search"
import Toggle from "@/components/toggle"

function MenuIcon(props: any) {
    return (
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function MonitorIcon(props: any) {
    return (
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
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    )
  }
  
  
  function MoonIcon(props: any) {
    return (
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
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    )
  }
  
  
  function MountainIcon(props: any) {
    return (
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }
  
  
  function SunIcon(props: any) {
    return (
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
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
  }

export default function NavBar() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Noncense</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link className="hover:underline hover:underline-offset-4" href="#">
          News
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Article
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Episode
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          About
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Contact
        </Link>
        
        <Search/>

      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Button size="sm" variant="outline">
          Sign In
        </Button>
        
        <Toggle/>
      </div>




      
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-xs" side="right">
          <div className="flex flex-col gap-6 p-6">
            <Link className="font-medium hover:underline hover:underline-offset-4" href="#">
              Home
            </Link>
            <Link className="font-medium hover:underline hover:underline-offset-4" href="#">
              Features
            </Link>
            <Link className="font-medium hover:underline hover:underline-offset-4" href="#">
              Pricing
            </Link>
            <Link className="font-medium hover:underline hover:underline-offset-4" href="#">
              About
            </Link>
            <Link className="font-medium hover:underline hover:underline-offset-4" href="#">
              Contact
            </Link>
            <div className="flex items-center justify-between">
              <Button size="sm" variant="outline">
                Sign In
              </Button>
              <Toggle/>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

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

export default function Toggle() {
    return(
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <SunIcon className="h-5 w-5" />
              <span className="sr-only">Toggle dark mode</span>
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuLabel>
                Theme
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuRadioGroup defaultValue="system">
                <DropdownMenuRadioItem value="light">
                <SunIcon className="mr-2 h-4 w-4" />
                Light
                </DropdownMenuRadioItem>

                <DropdownMenuRadioItem value="dark">
                    <MoonIcon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuRadioItem>

                <DropdownMenuRadioItem value="system">
                    <MonitorIcon className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

        </DropdownMenuContent>
    </DropdownMenu>
    )
}
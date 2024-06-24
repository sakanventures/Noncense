import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { FaRegSun, FaMoon, FaDesktop } from "react-icons/fa6";

export default function Toggle() {
    return(
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <FaRegSun className="h-5 w-5" />
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
                <FaRegSun className="mr-2 h-4 w-4" />
                Light
                </DropdownMenuRadioItem>

                <DropdownMenuRadioItem value="dark">
                    <FaMoon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuRadioItem>

                <DropdownMenuRadioItem value="system">
                    <FaDesktop className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

        </DropdownMenuContent>
    </DropdownMenu>
    )
}
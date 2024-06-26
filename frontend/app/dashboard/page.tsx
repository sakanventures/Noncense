import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { LogoutButton } from "@/components/custom/LogoutButton";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF8F6]">
      
      <div className="flex flex-col items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback><Loader2 className="h-4 w-4 animate-spin" /></AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-lg font-semibold text-[#1E3A8A]">First Last</h2>
        <ShareIcon className="w-6 h-6 text-black" />
        <LogoutButton />
      </div>

      <div className="flex flex-col items-center mt-8">
        <h3 className="text-xl font-semibold text-[#1E3A8A]">No items here</h3>
        <p className="mt-2 text-sm text-[#1E3A8A]">Start adding your favorite post to your list</p>
        <Button className="mt-4" variant="outline">
          Explore
        </Button>
      </div>
    </div>
  )
}

function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}